import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from "react";
import { AppContext, Colors } from "../types";
import { dark, light } from "../constants/Colors";

const Context = createContext<AppContext>({
  darkTheme: false,
  colors: light,
  setDarkTheme: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const [darkTheme, setTheme] = useState<boolean>(false);
  const [colors, setColors] = useState<Colors>(light);

  const setDarkTheme = (value: boolean) => setTheme(value);

  useEffect(() => {
    if (!darkTheme) {
      setColors(light);
    } else {
      setColors(dark);
    }
  }, [darkTheme]);

  const state: AppContext = {
    darkTheme,
    colors,
    setDarkTheme,
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
