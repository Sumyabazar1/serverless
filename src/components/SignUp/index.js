import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/router';

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);
const INITIAL_STATE = {
    username: '',
    email: '',
    poasswordOne:'',
    passwordTwo:'',
    error: null,
};
class SignUpFormBase extends Component {
}
 
class SignUpForm extends Component {
    constructor(props) {
        super(props);
    }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
 
        this.props.firebase
          .doCreateUserWithEmailAndPassword(email, passwordOne)
          .then(authUser => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
     
        event.preventDefault();
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };
    render() {
        const {
            username,
            email,
            poasswordOne,
            passwordTwo,
            error,
        } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (
            <form onSubmit={this.onSubmit}>
                <input
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                placeholder="Full Name"
            />
            <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
            />
            <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
            />
            <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
            />
            <button disabled={isInvalid} type="submit">
                Бүртгүүлэх
            </button>
    
            {error && <p>{error.message}</p>}
            </form>
        );
    }
}

    const SignUpLink = () => (
        <p>
            Хаяггүй байна уу? <Link to={ROUTES.SIGN_UP}>Бүртгүүлэх</Link>
        </p>
        
    );
    const SignUpForm = withRouter(withFirebase(SignUpFormBase));

    export default SignUpPage;
    export { SignUpForm, SignUpLink };