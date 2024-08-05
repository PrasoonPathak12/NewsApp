import {  useEffect, useState } from 'react';
import Search from './Search';
// import './App.css';

function App() {

  const[data,setData] = useState(null);
  
  useEffect(()=>{
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=6004b8fcb1604003b4ead57854e8d2c2")
    .then((response)=>response.json())
    .then((data) => setData(data.articles));
    console.log(data);
    
  },[])
return (
  <div className='flex p-4 mx-auto flex-col'>
    {
      data?
      (
        <div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-2'>

          {data.map((news,index)=>{
  
            return <div className='border border-sky-500 flex flex-col
            items-center text-center justify-evenly' key={index}>
              
            <p className='my-3'>{news.author}</p>
            <p className='my-3'>{news.title}</p>
            <p className='my-3'>{news.description}</p>
            <img src={news.urlToImage} className='h-48 w-60' alt="news-image"/>
            <p className='my-3'>{news.content}</p>
            <button className='border-2 border-sky-900 bg-slate-300 mb-2'> <a href={news.url}>See More...</a> </button>
            </div> 
                    
          })}
        </div>
      ):
      (
        <p>Loading...</p>
      )
    }
    
 
  </div>
);
}


export default App;
