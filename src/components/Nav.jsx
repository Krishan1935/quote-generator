import { Text } from 'react-font'
import React from 'react'

const Nav = (props) => {

    function categoryHandler(e) {
        props.setCategory(props.data[e.target.value])
    }

  return (
    <div className='w-full py-2 bg-purple-500 text-white'>
        <Text className='text-center text-4xl font-bold pb-3'
        family='Ubuntu'>
            Random Quotes
        </Text>
        <nav className='flex gap-2 flex-wrap px-8 justify-center items-center'>
            {
                props.data.map((element, index) => {
                    return (
                        <button className=' bg-purple-800 py-1 px-3 rounded-lg font-semibold text-lg hover:bg-purple-900 transition-colors duration-200'
                        value={index} onClick={categoryHandler} key={index}>{element}</button>
                    )
                })
            }
        </nav>
    </div>
  )
}

export default Nav