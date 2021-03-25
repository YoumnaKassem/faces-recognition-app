import React from 'react'

function ImageRecognition({getLink, boundingBoxes}) {
	let measurments=[]
	const computeFace=(face)=>{
		const image = document.getElementById('imgToDetect');
		let width=Number(image.width);
		let height=Number(image.height);
		return ({
			leftCol: width * face.left_col,
			topRow: height * face.top_row,
			rightCol:width - (width*face.right_col),
			bottomRow:height - (height*face.bottom_row)

			});
	}
	
	const squaresOnFaces=boundingBoxes.map(boundingBox=>{
		console.log(boundingBox)
		let measuredFace=computeFace(boundingBox)
		console.log(measuredFace)
		return (<div className='bounding' 
				style={{top:measuredFace.topRow, bottom:measuredFace.bottomRow, right:measuredFace.rightCol, left:measuredFace.leftCol}}>
				</div>);
	})
  return (
  	<div style={{display:'flex', alignSelf:'center'}}>
	    <div style={{position: 'relative', marginTop:'2rem'}}>
	      <img style={{height:'50vh'}}id='imgToDetect' className='detectedImg shadow-1 back-g' src={getLink} alt='Image to be detected' />
	      {squaresOnFaces}
	    </div>
    </div>
  );
}

export default ImageRecognition;