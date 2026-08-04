import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
//index = path ofpar Route: def is /

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<Landing />} />
          {/* App routes */}
        </Routes>   

        <Route path='/' element={<Layout/>} >
          {/*all routes are children of this layout/ path='dashboard'*/}
          <Route index element={<OrganisationSetup/>} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
