import "./styles.css";
import {useEffect, useState} from 'react'

export default function App() {
  return (
    <div className="App">
      <h1>aryan</h1>
      {Board()}
     </div>
  );
}

function Board(){
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  useEffect(
    () => {
      const update = (e) => {
        setX(e.x)
        setY(e.y)
      }
      window.addEventListener('mousemove', update)
    }
  )
  return(<h2 style={{position: 'absolute', top: y, left: x}} >
    aryan
  </h2>)
}