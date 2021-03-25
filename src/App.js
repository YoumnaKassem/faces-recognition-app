
import './App.css'
import React,{useState, useEffect} from 'react'
import ImageRecognition from './components/ImageRecognition'
import Title from './components/Title'
import InputUrl from './components/InputUrl'
import Results from './components/Results'
import Clarifai from 'clarifai'





function App() {
  const app = new Clarifai.App({
  apiKey: 'b4fcacd3615446c0b5aa9409ec91d2f8'
  });
  
  const [inputUrl, setInputUrl]=useState('https://assets.website-files.com/5cb90b63adbd7da37ea60e30/5dfbd3e04711840906cca804_sample-meeting-agenda-examples-%5BConverted%5D.jpg')
  const [imageUrl, setImageUrl]=useState('https://assets.website-files.com/5cb90b63adbd7da37ea60e30/5dfbd3e04711840906cca804_sample-meeting-agenda-examples-%5BConverted%5D.jpg')
  const [apiResponse, setApiResponse]=useState([])
  const [boundingBoxForAllDetectedFaces, setBoundingBoxForAllDetectedFaces]=useState([])


  useEffect(()=>{
    let faces=[]
    apiResponse.map(face=>{
      
      // console.log(face.region_info.bounding_box)
      faces.push(face.region_info.bounding_box)
      
    })
    console.log(faces)
    setBoundingBoxForAllDetectedFaces(faces)


  },[apiResponse])
  
  const clickDetectHandler=()=>{
    setImageUrl(inputUrl)
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, inputUrl)
    .then(res=>{
      // console.log(res.outputs[0].data.regions)
      setApiResponse(res.outputs[0].data.regions)
    })
    .catch(e=>console.log(e))
       
  }
  const changeImageUrlHandler=(e)=>{
    console.log(e.target.value)
    setInputUrl(e.target.value)
  }
  
  return (
    <div className="App">

       <Title />
       <div style={{display:'block', justifyContent:'center'}}>
         <InputUrl clickDetectHandler={clickDetectHandler} changeImageUrlHandler={changeImageUrlHandler}/>
         <div style={{display:'inline-flex', justifyContent:'center'}} >
          <ImageRecognition getLink={imageUrl} boundingBoxes={boundingBoxForAllDetectedFaces}/>
        </div>
       </div>

    
    </div>
  );
}

export default App;
