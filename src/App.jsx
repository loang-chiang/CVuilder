import { useState } from 'react'
import './styles/main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="title">
        <h1>CVuilder</h1>
      </div>

      <div className='content'>
        <div className='add-info'>
          {/* personal info! */}

          {/* education */}

          {/* experience */}

          {/* skills */}
        </div>

        <div className='cv'>
          {/* resume */}
        </div>
      </div>
    </>
  )
}

export default App
