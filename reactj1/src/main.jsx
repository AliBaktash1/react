import React from 'react'
import ReactDOM from 'react-dom/client'
// import {Home} from './views/Home.jsx'
import Home from './views/Home.jsx'

const App=()=>{
  // return React.createElement("h1",{},React.createElement("p",{},"hello"))

  //jsx
  //return hello
  // make component for a navbar with jsx
  function helloConsole(a){
    return a
  }
  return (
    <React.Fragment>
      <div>
      <h1 className='htag'>Hello{1+2}</h1>
      <br />
      <button onClick={()=>helloConsole(1)}>btn {helloConsole(2)}</button>
    </div>
    <h1>hello world</h1>
    <Home/>
    </React.Fragment>
  );
  
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
