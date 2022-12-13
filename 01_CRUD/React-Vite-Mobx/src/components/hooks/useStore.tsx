import React from "react";
import { indexStore, storesContext } from "../../modules/indexStore";

export const useStores = () => React.useContext(storesContext);

export const useStore = <T extends keyof typeof indexStore>(
  store: T
): typeof indexStore[T] => React.useContext(storesContext)[store];
