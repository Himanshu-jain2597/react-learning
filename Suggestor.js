import React , {useEffect, useState} from 'react';






let timer;
const App = () => {
  const [input , setInput] = useState('');
  const [results , setResults] = useState([]);


  const onChange = (e) => {
    setInput(e.target.value);
    clearTimeout(timer);
    timer = setTimeout(async() => {
     
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${e.target.value}`)

    const res =  await data.json();

    setResults(res?.recipes);
    } , 500)

  

}

// useEffect(() => {
//   return () => {
//     clearTimeout(timer);
//   }
// } , [input])

  return (
    <>
    Auto Suggestor
    <div style={{width:500 , margin:'auto' }}>
      <input value = {input} onChange = {onChange} style={{width:'100%' , padding:'5px'}} type ="text" className='search-input'/>
      <div style={{maxHeight:500 , overflowY:'scroll'}}>      
        {results && results.map((el , index)=> {
        return (
          <div style={{padding:5 , border:"1px solid black"}} key={el.id}>
            <div>{el?.name}</div>
          </div>
        )
      })}
    </div>
    </div>
    
    </>
  )


}



export default App;
