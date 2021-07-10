import { Redirect, Route } from "react-router-dom";

import React from "react";
import { isLoggedIn } from "./utils/auth";

export const ProtectedRoute = ({ children,...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn()) {
          return children
        } else {
          return (
            <Redirect
              to={{
                pathname:"/admin/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};