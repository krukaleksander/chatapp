
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

      <Router>
        <AppProvider>
          <Switch>
            <PrivateRoute path="/chat" component={Chat} />
            <div className="w-100" style={{ maxWidth: '400px' }}>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
            </div>
          </Switch>
        </AppProvider>
      </Router>

    </Container>
    // 43:39
    // echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches

  )


}

export default App;