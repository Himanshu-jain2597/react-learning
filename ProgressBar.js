import React, { useEffect, useState } from 'react';


const ProgressBar = ({progress}) => {

  const [animatedProgress , setAnimatedProgress] = useState(0);


  useEffect(()=> {
    setTimeout(()=> {
      setAnimatedProgress(progress)

    } ,100)
  } , [progress])



  return (
  <div className='outer'>

    <div aria-valuemin={0} aria-valuemax={100} role="progressbar" style={{transform: `translateX(${animatedProgress-100}%` }} aria-valuenow={progress}  className='inner'>{progress}%</div>

  </div>
  )

}

const App = (props) => {

  const [progress , setProgress] = useState(50)


  return (
    <div>
    <h1 style={{textAlign:'center' }}>ProgressBar</h1>
    <ProgressBar progress={progress} />
    </div>
  )

}


export default App;
