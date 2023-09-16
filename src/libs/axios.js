import axios from "axios";
import React, { createContext, useContext } from "react";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL,
  transformResponse: [data => JSON.parse(data)]
});

/**
 * @type React.Context
 */
const axiosContext = createContext();

export function useAxios() {
  return useContext(axiosContext);
}

export const AxiosProvider = ({ children }) => {
  return (
    <axiosContext.Provider value={axiosInstance}>
      {children}
    </axiosContext.Provider>
  );
};