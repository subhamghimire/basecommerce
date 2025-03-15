import axios from "axios";
import API_BASE_URL from "../constants/endpoint";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const useAxiosInterceptor = () => {
  const { authTokens, setTokens, logout } = useAuth();
  const navigate = useNavigate();
  
  axiosInstance.interceptors.request.use(async (config) => {
    const tokens = authTokens;
    if (tokens && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${tokens.access}`;
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 403 && error.response?.data.code === 'token_not_valid') {
        try {
          const response = await axios.post(`${API_BASE_URL}/token/refresh/`, {
            refresh: authTokens.refresh,
          });
          setTokens(response.data);
          error.config.headers.Authorization = `Bearer ${response.data.access}`;
          return axiosInstance(error.config);
        } catch (err) {
          logout();
          navigate("/login");
        }
      }

      if (error.response?.status === 403) {
        logout();
        navigate("/login");
      }

      return Promise.reject(error);
    }
  );
};

export { axiosInstance, useAxiosInterceptor };
