import React from 'react'
import useThemeContext from './context/ThemeContextProvider'
import Check from "./images/icon-check.svg"
import {isTabletOrMobile} from "./App"
import { useMediaQuery } from 'react-responsive'

const Card = ({input, todo, inputTodo, addTodo, todoInput, tickTodo, deleteTodo}) => {
    const {darkMode} = useThemeContext()

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    if(input){
        return (
            <div className={`${darkMode ? "bg-darkBlue-300" : " bg-lightGray"} " mb-5 sm:mb-9 mt-6 sm:mt-10" px-4 sm:px-6 py-3 sm:py-5 rounded-md shadow-xl`}>
                <div className=' flex items-center'>
                    <div className={`w-6 h-6 mr-4 sm:mr-6 sm:w-8 sm:h-8 rounded-full border-2 ${darkMode ? "border-darkBlue-500" :" border-lightGrayBlueL-300" }
                            flex justify-center items-center`}>
                       
                    </div>

                    <div className='flex-1'>
                        <input className='h-5 sm:h-9 w-full bg-transparent outline-none' value={todoInput} onKeyPress={addTodo} onChange={inputTodo} placeholder='What are you thinking? '/>
                    </div>

                </div>

            </div>
        )
    }
    return (
        <div className={`${darkMode ? "bg-darkBlue-300 border-darkGrayBlueD-500" : " bg-lightGray border-lightGrayBlueD-300"}  border-opacity-30 sm:border-opacity-100 border-b-2  px-4 sm:px-6 py-2 sm:py-3 w-full `}>
            <div className=' flex items-center'>

                <div className={`w-6 h-6 mr-4 sm:mr-6 sm:w-8 sm:h-8 ${todo.done && "bg-gradient-to-r from-check-200 to-check-300"  } rounded-full border-2 ${darkMode ? "border-darkBlue-500" :" border-lightGrayBlueL-300" }
                         flex justify-center items-center cursor-pointer`} onClick={() => tickTodo(todo.id)}>
                    { todo.done && <img src={Check} className='w-3 sm:w-4' alt="check"/> }
                </div>

                <p className={`w-full py-3 flex-1 ${isTabletOrMobile ? "overflow-y-scroll" : "scrollbar" }   ${darkMode ? "scrollbar-thumb-darkGrayBlueD-500" : "scrollbar-thumb-lightGrayBlueD-h"} `} >{todo.content}</p> 

                <span className={`${darkMode ? "text-darkGrayBlueD-700" : "text-gray-400"}  cursor-pointer`} onClick={() => deleteTodo(todo.id)}  >X</span>
            </div>
        </div>
    )
}

export default Card
