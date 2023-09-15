import React from 'react'
import ReactDOM from 'react-dom/client'

const App=()=>{
  // return React.createElement("h1",{},React.createElement("p",{},"hello"))

  //jsx
  //return hello
  // make component for a navbar with jsx
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
  
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
