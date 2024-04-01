import React from 'react'
import { useState } from 'react'
import { Input } from 'react-daisyui'

const SearchD = () => {
    const [search, setSearch] = useState('');

    const handleChange = (event:any) =>{
        setSearch(event.target.value);
    };

    const handleSubmit =(event:any) => {
        event.preventDefault();
        console.log("SearchD: ", search);
    };
  return (
    <div className='flex flex-col gap-10 my-5 w-40 bg-blue-gray-700s'>
        <form onSubmit={handleSubmit}>
            <Input 
            className="text-black"
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChange}
            aria-label='Search' />
        </form>
    </div>
  )
}

export default SearchD