import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// const number = 1324558

// let remainder = number % 10

// console.log('phan du :', remainder)

// var count = 0

// while (remainder / 2 > 0) {

// }
// console.log('count: ', count)


function App() {
  const [count, setCount] = useState(60)

  const handleClick = () => {
    setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
  }

  console.log(count)

  return (
    <div>
      HELLO WORLD - {count}
      <br />
      <button
        onClick={() => handleClick()}
      >
        CLICK ME!
      </button>
    </div>
  )
}

export default App
