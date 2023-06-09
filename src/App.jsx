import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './images/favicon.ico'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Shop></Shop>
    </div>
  )
}

export default App;
