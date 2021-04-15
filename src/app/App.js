import { Redirect, Route, Switch } from 'react-router'
import MainLayout from '../components/MainLayout'
import MainCatalog from '../pages/Catalog'
import './App.css'

function App() {
  return (
    <Switch>
      <MainLayout>
        <Route
          render={() => {
            <Redirect to={{
              pathname: '/catalog',
            }}/>
          }}
          component={MainCatalog}
        />
      </MainLayout>
    </Switch>
  )
}

export default App
