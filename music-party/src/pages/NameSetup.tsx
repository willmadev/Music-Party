import React, { FC, useState } from "react";
import { db, auth } from "../constants/firebase";

export const NameSetup: FC = () => {
  const [name, setName] = useState("");
  const submitName = () => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .set({
        uid: auth.currentUser.uid,
        displayName: name,
      })
      .then(() => console.log("sadf"))
      .catch((err) => console.error(err));
  };
  return (
    <div className="nameSetup_container">
      <h2>Welcome to Music Party</h2>
      <p>Let's get you started! Enter your name below.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(name);
          submitName();
        }}
      >
        <input
          type="text"
          name="name"
          className="menu_text-input"
          required
          autoFocus
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" className="menu_btn" value="Enter" />
      </form>
    </div>
  );
};
