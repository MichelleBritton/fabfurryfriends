import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import LoginForm from "./pages/auth/LoginForm";
import AdvertCreateForm from "./pages/adverts/AdvertCreateForm";
import AdvertPage from "./pages/adverts/AdvertPage";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import AdvertEditForm from "./pages/adverts/AdvertEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <div className={styles.App}>
      <NavBar />
      <Container fluid className={styles.Main}>  
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
        <Switch>
          <Route 
            exact 
            path="/"
            render={() => <Home 
              message="No results found."
            />}
          />
          <Route 
            exact 
            path="/adverts"
            render={() => 
              <AdvertsPage 
                message="No results found. Adjust the search keyword"
              />
            }
          />
          <Route 
            exact 
            path="/signup"
            render={() => <SignUpForm />}
          />
          <Route 
            exact 
            path="/login"
            render={() => <LoginForm />}
          />
          <Route 
            exact 
            path="/adverts/create" 
            render={() => <AdvertCreateForm />} 
          />
          <Route 
            exact 
            path="/adverts/:id" 
            render={() => <AdvertPage />} 
          />
          <Route 
            exact 
            path="/adverts/:id/edit" 
            render={() => <AdvertEditForm />} 
          />
          <Route 
            exact 
            path="/profiles/:id" 
            render ={() => <ProfilePage />} 
          />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={()=> <p>Page not found</p>} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;