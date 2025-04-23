import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import FilterPage from './pages/FilterPage/FilterPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import AcercaDe from './Components/Acerca/AcercaDe'
import ErrorPage from './pages/ErrorPage/ErrorPage'


const App = () => {
  return (
    <>
    <BrowserRouter>
   <Header></Header>
   <Navbar></Navbar>
   <Routes>
     <Route path='/' element={<HomePage></HomePage>}/>
     <Route path='/filter/:genero' element={<FilterPage></FilterPage>}/>
     <Route path='/details/:id' element={<DetailsPage></DetailsPage>}/>
     <Route path='/acerca' element={<AcercaDe />} />
     <Route path='*' element={<ErrorPage />} />
 </Routes>
   </BrowserRouter>
 </>
  )
}

export default App
