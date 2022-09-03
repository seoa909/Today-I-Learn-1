import React from "react";
import numberStore from "./numberStore";
import userStore from "./userStore";

export const indexStore = Object.freeze({
  numberStore,
  newUserStore: new userStore(),
});

export const storesContext = React.createContext(indexStore);
export const StoresProvider = storesContext.Provider;
