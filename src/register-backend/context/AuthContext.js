import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase";

const AuthContext = React.createContext({
  currentUser: null,
  login: (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  },
  signup: (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  },
  logout: () => {
    return auth.signOut();
  },
  resetPassword: (email) => {
    return auth.sendPasswordResetEmail(email);
  },
  updateEmail: (email) => {
    return auth.currentUser.updateEmail(email);
  },
  updatePassword: (password) => {
    return auth.currentUser.updatePassword(password);
  },
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
