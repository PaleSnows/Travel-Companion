import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className='flex  '>
        <input type="text" className='bg-slate-100 p-2 rounded-sm relative  ' placeholder='Search..' />
        <FaSearch  className='mt-3 absolute ml-[180px] cursor-pointer  text-slate-700'/>
    </div>
  )
}

export default SearchBar