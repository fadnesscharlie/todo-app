import { createContext, useState } from "react";
import jwt from "jsonwebtoken";
// import { cookie } from "react-cookie";

const testUsers = {
  admin: {
    password: "password",
    name: "Administrator",
    role: "admin",
    capabilities: ["create", "read", "update", "delete"]
  },
  editor: {
    password: "password",
    name: "Editor",
    role: "editor",
    capabilities: ["read", "update"]
  },
  writer: {
    password: "password",
    name: "Writer",
    role: "writer",
    capabilities: ["create"]
  },
  read: {
    password: "password",
    name: "Administrator",
    role: "reader",
    capabilities: ["read"]
  },
};

const secret = "ZorkBestBoi";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [capabilities, setCapabilities] = useState([]);
  const [token, setToken] = useState();

  // const [authUser, setAuthUser] = useState({
  //   loggedIn: false,
  //   capabilities: [],
  //   token: '',
  //   login: login,
  //   logout: logout,
  //   can: can,
  // })

  const login = (role, username, password) => {
    if (testUsers[role]) {
      setLoggedIn(true);
      setCapabilities(testUsers[role].capabilities);
      const token = jwt.sign(username, secret);
      // validateToken(token);
      setToken(token);
      console.log("Token", token);
    }
  };

  // const validateToken = (token) => {
  //   try {
  //     let user = jwt.verify(token, secret);
  //   } catch {}
  // };

  // const setLoginState = (user, token) => {
  // }

  const logout = () => {
    // on logout, reset state variables
    setLoggedIn(false);
  };

  const can = (capability) => {
    return capabilities.includes(capability);
  };

  const state = {
    loggedIn,
    capabilities,
    login: login,
    logout: logout,
    can: can
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
