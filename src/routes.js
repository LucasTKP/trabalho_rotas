import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Header from './components/Header'
import Produto from './pages/Produtos'
import Loja from './pages/Loja'

export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/informacoes/contato' element={<Contato/>}/>
                <Route path='/produtos/:id' element={<Produto/>}/>
                <Route path='/loja' element={<Loja/>}/>
            </Routes>
        </BrowserRouter>
    )
}