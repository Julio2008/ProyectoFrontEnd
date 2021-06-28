import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router  , Route , Switch }  from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Posts from "./pages/Posts";
import Signin from "./pages/Signin";
// import { ToastContainer } from 'react-toastify';
import store from './store';
import {  useState } from 'react';
import {Provider} from 'react-redux';
// import SigninForm from "./components/forms/SigninForm";
import HomePage from "./pages/HomePage";
import SigninForm from "./components/forms/SigninForm";
import Tarjeta from "./components/Tarjetas/Tarjeta";
import PrivateRoute from "./utils/PrivateRoute";
// import from "./utils/"

function App() {
  const [fbUserData, setFbUserData] = useState({});
  // const [checkLogin, setCheckLogin] = useState(false);
  const [googleUserData, setGoogleUserData] = useState({});		// Google
  return (
    // <Tarjeta/>
    // <Posts/>
    <Provider store={store}>
      <Router>
        <div>
          <Navigation></Navigation>
          
        </div>
        <Container>
          {/* <ToastContainer /> */}
          <Switch>
            {/* <Route exact path="/Posts" component={Posts}></Route> */}
            <Route exact path="/Signin" component={ Signin }></Route>
            
            <Route exact path="/Signin" >
							<SigninForm 
                fbUserData={fbUserData}						    // FaceBook se pasa la prop
                setFbUserData={setFbUserData}				  // FaceBook actualiza el parametro
                setGoogleUserData={setGoogleUserData}	// Google
                googleUserData={googleUserData}				// Google
              />
            </Route>

            {/* <Route exact path='/Informacion'> */}
           
            <Route exact path="/">
							<HomePage
								fbUserData={fbUserData}						// FaceBook se pasa la prop
								googleUserData={googleUserData}
							/>
            </Route>

            {/* <Route exact path="/Posts"  component={Posts}></Route> */}
            <PrivateRoute exact path="/Posts" component={Posts}></PrivateRoute>

            {/* <Route exact path="/signup" component={ SignUp }></Route>
            <Route exact path="/post/:id" component={ PostDetails }></Route>
            <PrivateRoute exact path="/posts" component={UserPosts}></PrivateRoute>
            <PrivateRoute exact path="/newpost" component={NewPost}></PrivateRoute>
            <PrivateRoute exact path="/editpost/:id" component={EditPost}></PrivateRoute> */}
          </Switch>
        </Container>
    </Router>
    </Provider>
   );
}

export default App;
