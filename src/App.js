import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddNewService from './components/AddNewService/AddNewService';
import Order from './components/Order/Order';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Registration from './components/Registration/Registration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/packages'>
              <Services></Services>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/blogs'>
              <Blogs></Blogs>
            </Route>
            <Route path='/mybookings'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/managebookings'>
              <ManageOrders></ManageOrders>
            </Route>
            <Route path='/addpackages'>
              <AddNewService></AddNewService>
            </Route>
            <PrivateRoute path='/order'>
              <Order></Order>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Registration></Registration>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
