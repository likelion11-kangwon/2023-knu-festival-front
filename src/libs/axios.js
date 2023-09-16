import { Axios } from "axios";
import React, { createContext, useContext } from "react";

const baseURL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : "http://localhost:3000";

/**
 * @type React.Context<Axios>
 */
const axiosContext = createContext();

export function useAxios() {
  return useContext(axiosContext);
}

export const AxiosProvider = ({ children }) => {
  return (
    <axiosContext.Provider
      value={new Axios({ baseURL, transformResponse: JSON.parse })}
    >
      {children}
    </axiosContext.Provider>
  );
};