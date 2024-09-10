import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "8dea4be26142b275d66aaa8a627e6803";

    const getData = async() =>{
        const response = await fetch(`https://gnews.io/api/v4/search?q=${search}&apikey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)
      

    }

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value)

    }
    const userInput = (event) =>{
        setSearch(event.target.value)
    }

  return (
    <div>
        <nav>
            <div>
                <h1>AcoNews</h1>
            </div>
            <div className=''>
            <ul style={{display:"flex", gap:"11px"}}>
                <a style={{fontWeight:600, fontSize:"17px"}}>All News</a>
                <a style={{fontWeight:600, fontSize:"17px"}}>Trending</a>

            </ul>

            </div>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>Stay Update with AcoNews</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>

        <div>
        {newsData?  <Card data={newsData}/> : null}
       

        </div>
    </div>
  )
}

export default Newsapp