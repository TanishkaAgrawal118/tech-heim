import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { setLoading, setUser, setError, logout } from './authSlice';

export const signup = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      name: user.displayName || "New User",
      isAdmin: false,
    });

    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      dispatch(setUser(userDoc.data()));
    } else {
      dispatch(setUser(user));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logout());
  } catch (error) {
    dispatch(setError(error.message));
  }
};
