import React from "react";
import { Routes as SwitchRoutes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import NewProducts from "../pages/NewProducts";
import Products from "../pages/Products";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";

export function Routes() {
  return (
    <AuthProvider>
      <SwitchRoutes>
        <Route index path="/signin" exact element={<SignIn />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route index path="/" exact element={<Products />} />
          <Route index path="/products/new" exact element={<NewProducts />} />
        </Route>
      </SwitchRoutes>
    </AuthProvider>
  );
}
