import { useState } from 'react'
import Calculadora from './componentes/Calculadora/Calculadora.jsx'
import Title from './componentes/title/title.jsx'
import './global.css'
function App() {
  const [peso, setpeso] = useState(0)
  const [altura, setaltura] = useState(0)

  return (
    <div className='container'>
      <Title/>
      <input type="text" className='input-name'  placeholder='Digite seu peso em KG' onChange={(e) => setpeso(e.target.value)} />
      <input type="text" className='input-name' placeholder='Digite sua altura em Metros' onChange={(e) => setaltura(e.target.value)} />
    
     <Calculadora peso={peso} altura= {altura}/>
    </div>
  )
}

export default App
