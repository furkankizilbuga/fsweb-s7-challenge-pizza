import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import Success from './pages/Success'
import { useState } from 'react'
import SecondSection from './components/IT2/homeComponents/SecondSection'
import Footer from './components/IT2/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const pizza = 
  {
    "id": 0,
    "name": "Position Absolute Acı Pizza",
    "price": 85.50,
    "rating": 4.9,
    "ratingCount": "(200)",
    "description": "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir."
  }


const initialData = 
{
  "pizza": {},
  "name": "",
  "count": 1,
  "size": "",
  "crust": "",
  "toppings": [],
  "note": "",
  "total": null
}



function App() {

  const [formData, setFormData] = useState(initialData)

  return (
    <Switch>
      <Route exact path="/">
        <Home
          pizza={pizza}
          setFormData={setFormData} 
          formData={formData} />
        {/* <SecondSection
          pizza={pizza}
          setFormData={setFormData} 
          formData={formData} /> */}
      </Route>
      <Route exact path="/order">
        <ToastContainer />
        <Order 
          initialData={initialData} 
          pizza={pizza} 
          formData={formData} 
          setFormData={setFormData} />
      </Route>
      <Route exact path="/success">
        <Success formData={formData} />
      </Route>
    </Switch>
  )
}

export default App
