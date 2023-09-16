import axios from "axios"; // <--- 여기를 수정했습니다.
import React, { createContext, useContext } from "react";

const baseURL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : "http://localhost:3000";

const axiosContext = createContext();

export function useAxios() {
  return useContext(axiosContext);
}

export const AxiosProvider = ({ children }) => {
  const axiosInstance = axios.create({ baseURL, transformResponse: JSON.parse }); // <--- 여기도 수정했습니다.

  return (
    <axiosContext.Provider value={axiosInstance}>
      {children}
    </axiosContext.Provider>
  );
};