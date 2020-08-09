import React, { Component } from 'react';
import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props =>(
    <FirebaseContext.Consumer>
        {Firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;
export { FirebaseContext, withFirebase };
