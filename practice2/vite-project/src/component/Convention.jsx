
// 01. single pareant component
// const Convention1 = () => {
//     return (
//         <div>
//             <h1>Single Parent component</h1>
//         </div>
//     )
//  }

 // 02. Javascript can be used directly 
// const Convention2 = () => {
//     return (
//         <div>
//             { console.log('HI...') }
//         </div>
//     )
//  }

 // 03. All tags self close in JSX
//  const Convention3 = () => {
//     return (
//         <div>
//             <h2>This is heading</h2>
//             <img src="img.jpg" alt="" />
//             <br/>
//         </div>
//     )
//  }


//  // 04. in html class="" but in jsx className=""
//  const Convention4 = () => {
//     return (
//         <div>
//             <h2 className='text-center'>This is heading</h2>
//             <br/>
//         </div>
//     )
//  }

//  // 05. Attribute should be in camelCase
//  const Convention = () => {
//     return (
//         <div>
//             <button onClick={() => {alert('I am clicked!')}}>Submit</button>
//         </div>
//     )
//  }

//  // 06. write inline style as object
 const Convention = () => {
    return (
        <div>
            <p style={{
                color:'red',fontSize:'25px'
            }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem perspiciatis delectus enim fugit esse similique quos iusto, ipsa laborum ut minus a soluta non cum consequatur magnam nulla placeat?</p>
        </div>
    )
 }


export default Convention;