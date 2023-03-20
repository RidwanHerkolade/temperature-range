import { useState } from 'react'
import Temp from './Component/Temp/Temp'


function App() {
  const [count, setCount] = useState(0);
  const appStyles = {
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
      width: "100%",
      height: "100vh",
      backgroundColor: "white",
      boxShadow: ""
  }

  return (
    <div className="App" style={appStyles}>
        <Temp/>
        
    </div>
  )
}

export default App
