import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import SignUpForm from "./pages/auth/SignUpForm";
import LoginForm from "./pages/auth/LoginForm";
import AdvertCreateForm from "./pages/adverts/AdvertCreateForm";
import AdvertPage from "./pages/adverts/AdvertPage";
import AdvertsPage from "./pages/adverts/AdvertsPage";

function App() {
  const currentUser = useCurrentUser();
  
  return (
    <div className={styles.App}>
      <NavBar />
      <Container fluid className={styles.Main}>  
        <Switch>
          <Route 
            exact 
            path="/"
            render={() => <h1>Home</h1>}
          />
          <Route 
            exact 
            path="/adverts"
            render={() => <AdvertsPage />}
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
          <Route exact path="/adverts/create" render={() => <AdvertCreateForm />} />
          <Route exact path="/adverts/:id" render={() => <AdvertPage />} />
          <Route render={()=> <p>Page not found</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;