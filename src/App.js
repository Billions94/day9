import './App.css';
import MyNav from './component/MyNav'
import BookList from './component/BookList'
import MyFooter from './component/MyFooter'
import Registration from './component/Registration'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react'

const App = () => {

  const [registration, setRegistration] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  return (
    <div className="App">
      <Router>
      <MyNav />
      <Route path={'/registration'} exact render={(routerProps)=> <Registration {...routerProps} registration={registration} setRegistration={setRegistration}/>}/>
      <Route path={"/home"} exact component={BookList}/>
      <MyFooter />
      </Router>
    </div>
  );
}

export default App;
