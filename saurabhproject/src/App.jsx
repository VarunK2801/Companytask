import CreationPage from "./Components/CreationPage"
import TaskListing from "./Components/TaskListing"
import {Switch,Route,Redirect} from 'react-router-dom'


function App() {
  
  return (
    <>
      <h1>Varun</h1>
      <Switch>
        <Route exact path="/">
          <TaskListing/>
        </Route>
        <Route path='/create'>
          <CreationPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  )
}

export default App
