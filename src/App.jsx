import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import Success from './pages/Success'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import { useFormContext } from './context/FormContext'
import NotFound from './pages/NotFound'


function App() {

  const { orderCompleted, pizzaSelected } = useFormContext();

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/order">
          <ToastContainer />
          {pizzaSelected ? (
            <Order />
          ) : (
            <Redirect to="/" />
          )}
          
        </Route>
        <Route exact path="/success">
          {orderCompleted ? (
            <Success /> 
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
