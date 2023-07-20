import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { showNotification } from "../../store/notification/notification";

import { auth } from "../../firebase";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";

function WriteUserData(userId: string, email: string, password: string) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    email: email,
    password: password,
  });
}

const Register = (
  dispatch: Dispatch<AnyAction>,
  email: string,
  password: string,
  passwordConfirm?: string
) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      WriteUserData(user?.uid, email, password);
      dispatch(showNotification("Account created"));
    })
    .catch((error) => {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/email-already-in-use":
          dispatch(showNotification("Email already in use"));
          break;
        case "auth/weak-password":
          dispatch(showNotification("Password too weak"));
          break;
        default:
          dispatch(showNotification("Can't create account, try again"));
          console.warn(errorCode);
          break;
      }
    });
};

export default Register;
