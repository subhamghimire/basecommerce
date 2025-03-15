import React, { createContext, useState, useEffect } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { useCookies } from "react-cookie";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["authTokens"]);
  const [authTokens, setAuthTokens] = useState(() => {
    return cookies.authTokens ? cookies.authTokens : null;
  });

  const setTokens = (data) => {
    setCookie("authTokens", data, {
      expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    });
    setAuthTokens(data);
  };

  const logout = () => {
    removeCookie("authTokens");
    setAuthTokens(null);
  };

  useEffect(() => {
    if (!authTokens) return;
    const refreshTokens = async () => {
      try {
        const response = await axiosInstance.post("/token/refresh/", {
          refresh: authTokens.refresh,
        });
        setTokens(response.data);
      } catch (error) {
        logout();
      }
    };
    const interval = setInterval(refreshTokens, 10 * 60 * 1000); //every 10 minutes
    return () => clearInterval(interval);
  }, [authTokens]);

  return (
    <AuthContext.Provider value={{ authTokens, setTokens, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
