"use client";

import { useContext } from "react";
import { DataContext } from "./data-context";

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useDataContext must be used within an DataProvider");
  }
  return context;
};
