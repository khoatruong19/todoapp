import { useState,useEffect } from "react";
import DesktopDarkBg from "./images/bg-desktop-dark.jpg"
import DesktopLightBg from "./images/bg-desktop-light.jpg"
import Moon from "./images/icon-moon.svg"
import Sun from "./images/icon-sun.svg"
import useThemeContext from "./context/ThemeContextProvider";
import { useMediaQuery } from 'react-responsive'
import Card from "./Card";
function App() {
  const {darkMode, setDarkMode} = useThemeContext()
  const [todos,setTodos] = useState([])
  const [activeTodos,setActiveTodos] = useState([])
  const [completedTodos,setCompletedTodos] = useState([])
  const [modeIndex, setModeIndex] = useState(0) 
  const [todoInput, setTodoInput] = useState("")
  
  const showMode = [todos, activeTodos, completedTodos]

  useEffect(() => {
    const incompletedTodos = todos.filter(todo => todo.done === false)
    const completedTodos = todos.filter(todo => todo.done === true)
    setCompletedTodos(completedTodos)
    setActiveTodos(incompletedTodos)
  }, [todos])

  const inputTodo = (e) => {
    setTodoInput(e.target.value)
  }

  const addTodo = (e) => {
    if(e.key === 'Enter'){
      setTodos([...todos, {content: todoInput, done: false, id: Math.floor(Math.random()*1000 + 1)}])
      setTodoInput("")
    }
  }

  const tickTodo = (id) => {
    const newTodoList = todos.map(item => {
      if(item.id === id){
          return {...item,done:!item.done}
      }
      return item
   })
   setTodos(newTodoList)
  }

  const deleteTodo = (id) => {
    const newTodoList = todos.filter(todo => todo.id !== id)
    setTodos(newTodoList)
  }

  const clearCompleted = () => {
    const newTodoList = todos.filter(todo => todo.done !== true)
    setTodos(newTodoList)
  }

 const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="App text-xs sm:text-lg md:text-xl lg:text-3xl xl:text-xl">
      <div className={`${darkMode ? "bg-darkBlue-500 text-lightGrayBlueL-500" : "bg-gray-100 bg-opacity-40 text-gray-500"} w-screen h-screen  relative`}>
        <div className="w-full h-1/3 object-fit ">
          <img src={darkMode ? DesktopDarkBg : DesktopLightBg} className=" h-full w-screen" alt="bg"/>
        </div>
        <div className="absolute w-5/6 xl:w-5/12 sm:w-9/12 top-9 sm:top-20 left-1/2 transform -translate-x-1/2  ">
            <div className="flex items-center justify-between w-3xl">
                  <h1 className="tracking-widest font-bold text-3xl sm:text-6xl p-2 text-white">TODO</h1>
                  <img src={darkMode ? Sun : Moon} className=" w-8 sm:w-10 cursor-pointer" onClick={() => setDarkMode(!darkMode)} alt="icon" />
            </div>
            <div className=" w-full flex flex-col  ">

             <Card input todoInput = {todoInput} inputTodo= {inputTodo} addTodo={addTodo}/>

              <div className={`flex flex-col overflow-x-hidden rounded-t-md max-w-full  mb-5 max-h-80 md:max-h-128 xl:max-h-96   ${isTabletOrMobile ? "overflow-y-scroll" : "scrollbar" }   ${darkMode ? "scrollbar-thumb-darkGrayBlueD-500" : "scrollbar-thumb-lightGrayBlueD-h"} `}>
                    {showMode[modeIndex].length > 0 ? showMode[modeIndex].map((todo) => (
                      <Card key= {todo.id} todo={todo} tickTodo={tickTodo} deleteTodo={deleteTodo} />
                    )) : <p className="text-center mb-5 font-semibold text-lightGrayBlueD-300">No items</p>}
                      <div className={`${darkMode ? "bg-darkBlue-300" : " bg-lightGray"}sm:mt-0 px-4 sm:px-6 py-3 sm:py-5 `}>
                      <div className=' flex font-semibold text-lightGrayBlueD-300 justify-between items-center'>
                        <p>{activeTodos.length} items left</p>
                        <p onClick={clearCompleted} className="cursor-pointer">Clear Completed</p>
                      </div>
                    </div>
              </div>

              
                
              </div>
              <div className={`${darkMode ? "bg-darkBlue-300" : " bg-lightGray"} mt-5 sm:mt-0 px-4 sm:px-6 py-3 sm:py-5 flex justify-center items-center rounded-b-md shadow-2xl`}>
                    <div className=' flex space-x-5 justify-between items-center text-lightGrayBlueD-300 font-semibold'>
                      <p className={`${modeIndex === 0 && "text-check-200"} cursor-pointer`} onClick={() => setModeIndex(0)}>All</p>
                      <p className={`${modeIndex === 1 && "text-check-200"} cursor-pointer`}  onClick={() => setModeIndex(1)}>Active</p>
                      <p className={`${modeIndex === 2 && "text-check-200"} cursor-pointer`}  onClick={() => setModeIndex(2)}>Completed</p>
                    </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;
