import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Products } from './pages/Products'
import { ProductDetails } from './pages/ProductDetails'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about/*">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products/:id" element={<ProductDetails/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path='*' element={<Navigate to={'/'}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App