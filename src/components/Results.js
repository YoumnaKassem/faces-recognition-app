import React from 'react'



function Results({apiResult}) {
	let gender='male'
	let age = 20
	let emotions ='happy'
  return (
    <div className=''>
      
      <p> Gender : {gender}</p>
      <p> Age : {age} </p>
      <p> Emotions : {emotions} </p>

      

    </div>
  );
}

export default Results;