import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../constants/firebase";
import { useAppDispatch } from "../hooks/store";
import { setDisplayName, setUid } from "../store/user/user.slice";

export const FirstLoad: FC = () => {
  const [user] = useAuthState(auth);

  const history = useHistory();
  const dispatch = useAppDispatch();

  // auth
  useEffect(() => {
    if (!user) {
      auth.signInAnonymously().catch((err) => console.error(err));
    }
  }, []);

  // after sign in
  useEffect(() => {
    if (!user) {
      console.error("no user");
      return;
    }

    console.log("After Signin");
    dispatch(setUid(user.uid));

    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch(setDisplayName(doc.data().displayName));
          history.push("/mainMenu");
        } else {
          history.push("/nameSetup");
        }
      })
      .catch((err) => console.error(err));
  }, [user]);

  return <p>loading...</p>;
};
