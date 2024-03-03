import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";

function App() {
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
            path="/dogs"
            render={() => <h1>Our Dogs</h1>}
          />
          <Route 
            exact 
            path="/signup"
            render={() => <h1>Sign Up</h1>}
          />
          <Route 
            exact 
            path="/login"
            render={() => <h1>Login</h1>}
          />
          <Route render={()=> <p>Page not found</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;