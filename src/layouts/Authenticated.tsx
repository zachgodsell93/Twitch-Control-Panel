import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Authenticated: React.FC<AuthenticatedProps> = (props?) => {
  return (
    <>
      <Sidebar />
      <div className="ml-0 lg:ml-64 bg-slate-700 bg-no-repeat bg-full min-h-screen h-full">
        <Outlet />
      </div>
    </>
  );
};

type AuthenticatedProps = {};

export { Authenticated };
