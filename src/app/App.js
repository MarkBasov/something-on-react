import { Redirect, Route, Router, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import { Navigate } from '../components/Navigate/Navigate'
import MainCatalog from '../pages/Catalog'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navigate></Navigate>
      <Switch>
        <MainLayout>
          <Route
            path='/catalog'
            exact
            component={MainCatalog}
          />
        </MainLayout>
      </Switch>
    </BrowserRouter>
  )
}

export default App
