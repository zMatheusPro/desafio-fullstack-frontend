import React from "react";
import { Routes as SwitchRoutes, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export function Routes() {
  return (
    <SwitchRoutes>
      <Route index path="/signin" element={<SignIn />} />
      <Route path="/signup" exact element={<SignUp />} />
    </SwitchRoutes>
  );
}
