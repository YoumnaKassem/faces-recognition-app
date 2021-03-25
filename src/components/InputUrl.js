import React from 'react'


function InputUrl({clickDetectHandler,changeImageUrlHandler}) {
  return (
    <div className='w-70  h-20 center shadow-4' >
      <input className=' f4 bg-transparent pa2 w-60 ma center fontFlow' onChange={changeImageUrlHandler} type='text' placeholder='Enter Image URL here ' />
      <button className=' w-20 grow f4 link ph3 fontFlow pv2 dib back-g white' onClick={clickDetectHandler}> Detect </button>
    </div>
  );
}

export default InputUrl;