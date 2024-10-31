import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import Success from './pages/Success'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layouts/Header'
import Footer from './layouts/Footer'

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/order">
          <ToastContainer />
          <Order />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
