import { Route, useNavigate, Routes } from "react-router-dom"

import Offers from "./Offers"

export default function About() {
  // Esto nos devuelve una función para navegar por las diferentes rutas
  const navigate = useNavigate();
  return (
    <div className="content">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto doloremque. Corporis in et placeat unde sapiente perspiciatis minus! Recusandae, ad!</p>
      
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tempora nisi eligendi quod ut illo cumque quibusdam reprehenderit veniam. Cum eaque, nostrum fugit ut inventore assumenda perspiciatis sed maiores numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam repellat hic dolore officia sequi quis quod commodi iusto doloremque. Corporis in et placeat unde sapiente perspiciatis minus! Recusandae, ad!</p>

      <button onClick={() => navigate('/products')}>See our products!</button>

      <Routes>
        <Route path="offers" element={<Offers/>}/>
      </Routes>
    </div>
  )
}
