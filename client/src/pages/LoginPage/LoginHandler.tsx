import { signInWithEmailAndPassword } from "firebase/auth";
import { showNotification } from "../../store/notification/notification";

import { auth } from "../../firebase";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";

function LoginHandler(
  dispatch: Dispatch<AnyAction>,
  email: string,
  password: string
) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      dispatch(showNotification("logged as " + email));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch(showNotification("Wrong credentials"));
    });
}

export default LoginHandler;
