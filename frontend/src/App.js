import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import EstilosGlobais from './componentes/EstilosGlobais'

import Benvindo from './paginas/Benvindo'
import Medidas from './paginas/Medidas'
import Admin from './paginas/Admin'
import Mensagens from './paginas/Mensagens'

import Menu from './componentes/Menu'

// function Teste() {
//   fetch('/api')
//     .then(resultado=>{
//       console.log(resultado)
//   })
// }


function App(){
  return(
    <Router>
      {/* {Teste()} */}
      {/* <h1>Olá! Sou o frontend</h1> */}

      <EstilosGlobais/>
      <Menu/>
      <Routes>
        <Route path='/' element = {<Benvindo />} />
        <Route path='/medidas' element = {<Medidas />} />
        <Route path='/admin' element = {<Admin />} />
        <Route path='/mensagens' element = {<Mensagens />} />
      </Routes>
      {/* <Benvindo/> */}
    </Router>


  )
}

export default App