import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth();

//   currentUser ? <Outlet /> : <Navigate to="/login" />;

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return currentUser ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/login" />
//         );
//       }}
//     ></Route>
//   );
// }

export default function PrivateRoute({ children, redirectTo }) {
  let isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
