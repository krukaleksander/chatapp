
import Signup from './components/Signup';
import { Container } from 'react-bootstrap';
import AppProvider from './context/AppContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import Chat from './components/Chat';

const App = () => {
  return (

    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AppProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/chat" component={Chat} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
            </Switch>
          </AppProvider>
        </Router>
      </div>
    </Container>
    // 43:39


  )


}

export default App;