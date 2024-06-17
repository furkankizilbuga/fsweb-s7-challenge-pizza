import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import Success from './pages/Success'

const pizzas = [
  {
    "id": 0,
    "name": "Position Absolute Acı Pizza",
    "price": "85.50₺",
    "rating": 4.9,
    "ratingCount": "(200)",
    "description": "Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir."
  }
]

function App() {



  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/order">
        <Order pizzas={pizzas} />
      </Route>
      <Route exact path="/success">
        <Success />
      </Route>
    </Switch>
  )
}

export default App
