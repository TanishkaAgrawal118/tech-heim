import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../components/firebase/firebase';
import {
  loginSuccess,
  signupSuccess,
  loginFailure,
  signupFailure,
  logoutUser,
} from '../slice/authSlice';

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user) {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      console.log("Fetched user data:", userDoc.data());
      if (userDoc.exists()) {
        dispatch(loginSuccess(userDoc.data())); 
        alert('Login successful!');
      } else {
        alert('No user data found.');
        dispatch(loginFailure('No user data found.'));
      }
    }
  } catch (error) {
    console.error('Login error:', error.message);
    dispatch(loginFailure(error.message));
    alert('Invalid email or password.');
  }
};

export const registerUser = (name, email, password, confirmPassword) => async (dispatch) => {
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user) {
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        role: 'admin',
      });

      dispatch(signupSuccess({ name, email, role: 'user' })); 
      alert('Account created successfully!');
    }
  } catch (error) {
    console.error('Signup error:', error.message);
    dispatch(signupFailure(error.message));
    alert(error.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logoutUser());
    console.log("Logged out successfully");
    alert('Logged out successfully!');
  } catch (error) {
    console.error('Logout error:', error.message);
    alert('Failed to log out.');
  }
};