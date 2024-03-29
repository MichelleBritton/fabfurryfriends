import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test('renders NavBar', () => {
    render (
        <Router>
            <NavBar />
        </Router>
    );

    const loginLink = screen.getByRole('link', {name: 'Login'});
    // expect(LoginLink).not.toBeInTheDocument()
    expect(loginLink).toBeInTheDocument();
});

test('renders link to the user profile for a logged in user', async () => {
    render (
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>            
        </Router>
    );

    const profileAvatar = await screen.findByText('Profile');
    expect(profileAvatar).toBeInTheDocument();
});

test('renders Sign in and Sign Up buttons again on log out', async () => {
    render (
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>            
        </Router>
    );

    const logoutLink = await screen.findByRole('link', {name: 'Logout'});

    fireEvent.click(logoutLink);

    const loginLink = await screen.findByRole('link', {name: 'Login'});
    const signUpLink = await screen.findByRole('link', {name: 'Sign Up'});

    expect(loginLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
});