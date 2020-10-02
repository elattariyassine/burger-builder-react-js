import axios from "axios";

import * as actionTypes from "./actionTypes";

const firebaseAuthToken = "AIzaSyCKUSquS44akY5LRTzGoc2-JwYmZaAmapg";
const firebaseRegisterRequest =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const firebaseAuthRequest =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url = `${firebaseRegisterRequest}${firebaseAuthToken}`;
    if (!isSignup) {
      url = `${firebaseAuthRequest}${firebaseAuthToken}`;
    }
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
