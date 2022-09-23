// src/context/auth-context.js
// import { useRouter } from "next/router";
import { createContext, useState } from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
   token: "",
  });

  const setUserAuthInfo = ({ data }) => {
   const token = localStorage.setItem("token", data.data);

   setAuthState({
    token,
   });
 };

 // checks if the user is authenticated or not
 const isUserAuthenticated = () => !!authState.token;


 return (
   <Provider
     value={{
      authState,
      setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
      isUserAuthenticated,
    }}
   >
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };