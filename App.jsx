// // import React from 'react'
// // import Home from './Home'
// // import New from './Comp/New'

// // const App = () => {
// //   return (
// //     <div>
// //       <h1>hello</h1>
// //       <p>hiii</p>
    
// //     <Home></Home>
// //     <New></New>
// //     </div>
// //   )
// // }

// // export default App

// import React from 'react'

// const App = () => {
//   let arr=[1,2,3,4,5,6,7,8,9]
//   return (
//     <div className='' >
// {
//   arr.map((a)=>{
//     return(<>
//     <li>a</li>
//       </>)
//   })
// }

//     </div>
//   )}

// export default App



// import React from 'react'
// import Home from './Home'

// const App = () => {
//   let a= 10;
//   // return (
//     <div>
//       <Home data={a}/>
//     </div>
    
//   )
// }

// export default App
// import React, { useState } from 'react'

// const App = () => {
//   let [count,setCount]= useState(0)
//   let [color,setColor]= useState('red')
//   function fun1(){
//     setCount(count+1)
//     setColor('green')
//   }
//   return (
//     <div >
//       <p >{count}</p>
//       <button onClick={fun1}>Click</button>
//       <button onClick={fun1}>color green</button>
     
//     </div>
//   )
// }

// export default App


// import React from 'react'
// // import Input from './Comp/Input'

// const App = () => {
//   return (
//     <>
//     <Clock

//     </>
    
//   )
// }

// export default App
// import React from 'react'
// import Input from './Comp/Input'
// import Clock from './Comp/clock'

// const App = () => {
//   return (
//     <div>
      
//    <Clock/>
//     </div>
//   )
// }

// export default App
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [count,setCount] =useState(1)
// let [city,setCity]= useState('bhopal') 
//   useEffect(()=>{
//     console.log("hello")
// fetch('https://dummyjson.com/recipes').then((res)=>{
//   return res.json()
// }).then((data)=>{
//   console.log(data,'heeh');

// })
//   },[count])
//   function fun1(){
//        setCount(count+1)
//       setCity('delhi')
//      }
//      function fun1(){

//      }
//      function  done(){

//      }
//     return (
//     <div>
//          <p >{count}</p>
//        <button onClick={fun1}>Click</button>
//       <button onClick={done}>{city} </button>
         
//     </div>
 
    
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [Api,SetApi]=useState([])
//   useEffect(()=>{
//     fetch ('https:dummyjson.com/recipes').then((res)=>{
//     return res.json()
//       }).then((data)=>{
//         console.log(data.recipes,'nhjg');
//         SetApi(data.recipes)
//       })
//     }),[] )

  
//   return (
//     <div>App</div>
//   )
// }

// export default App
// import React from 'react'
// import NavBar from './NavBar'
// import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// const App = () => {
//   return (
//     <>
//     <Router>
//     <NavBar/>
//     <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route path='/About' element={<About/>} />
//       <Route path='/Contact' element={<Contact/>} />
//     </Routes>
//     </Router>

//     </>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  let [input,SetInput]=useState({
    name:"",
    email:"",
    password:""

  })


  function fun1(e){
    let {name,value}=   e.target
    // console.log(e.target.value);
    SetInput({...input,[name]:value})
    // console.log(input,"dekhoo");
    
    
  }

  function done(e){
    e.preventDefault()
    console.log('heheheh',input);
    
  }
  return (
    <div>
    {/* <h1> Form</h1> */}


    <fieldset>   
      <legend> Form</legend>
    <form   onSubmit={done}> 
      <input  type='text' name='name' value={input.name}   onChange={fun1}  placeholder='Enter your name'/>
      <br></br>
      <br></br>

      <input  type='email' name='email' value={input.email}  onChange={fun1}  placeholder='Enter your email'/>
      <br></br>
      <br></br>

      <input  type='password'  name='password'  value={input.password}  onChange={fun1} placeholder='Enter your passWord'/>
<button  type='submit'> save</button>
    </form>
    </fieldset>
    </div>
  )
}

export default App