import React from 'react'
import { Input } from '@material-tailwind/react'

const SearchT = () => {
    const handleSearchT = (e:any) =>{
        console.log('searchT: ', e.target.value);
    };
  return (
    <div className="flex flex-col mt-7 mb-7">
      <Input label="Search Here" 
      crossOrigin={undefined}
      onChange={handleSearchT}
      
      />
    </div>
  )
}

export default SearchT