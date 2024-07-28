import React, { useEffect } from 'react'

export default function Search() {
    let API="http://hn.algolia.com/api/v1/search?query=html";

    const fetchApi = async (url)=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
       fetchApi(API); 
      }
       ,[]
    )
  return (
    <>
    
    <div className='border-black border-6 w-1/2 relative left-1/4 flex 
    justify-between bg-slate-200 my-3'>
     <input className='border-2 border-gray-200 w-3/4 p-2 rounded-1' type="text" placeholder='Search any news feed...'/>
     <button className='
     flex items-center justify-center border-2 border-gray-400 
      rounded-r py-2 px-4'>Search</button>
    </div>
    <h2>My tech news...</h2>
    </>
    
  )
}
