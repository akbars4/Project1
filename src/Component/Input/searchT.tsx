import React from 'react'
import { Input } from '@material-tailwind/react'

const SearchT = () => {
    const handleSearchT = (e:any) =>{
        console.log('searchT: ', e.target.value);
    };
  return (
    <div className="flex w-72 flex-col">
      <Input label="Search Here" 
      crossOrigin={undefined}
      onChange={handleSearchT}
      />
    </div>
  )
}

export default SearchT