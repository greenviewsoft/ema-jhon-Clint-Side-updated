import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication



/*
 steps for authentication
 ----------------
 Step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method
---------------------
Step-2:
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register
step 3: 
1 setup sign in method
2. setup  sign out method 
3. user state 
4. special server
-------------------------
Step 4:
1. create a auth context
2. create context Provider
3. set context Provider context value
4. use Auth Provider
5. create useAuth Hook

--------------------------

step 5
1. create private Route
2. set private route

step 6

Redirect after login
1. after login redirect user desctions



 */