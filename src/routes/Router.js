import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../layouts/full/shared/loadable/Loadable";

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import("../layouts/full/FullLayout")));
const BlankLayout = Loadable(
  lazy(() => import("../layouts/blank/BlankLayout"))
);

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import("../views/dashboard/Dashboard")));
const SubmitOTP = Loadable(lazy(() => import("../views/signin/SubmitOTP")));
const PlanBenefits = Loadable(
  lazy(() => import("../views/policy/PlanBenefits.js"))
);
const PolicyHistory = Loadable(
  lazy(() => import("../views/policy/PolicyHistory.js"))
);
const PolicyView = Loadable(
  lazy(() => import("../views/policy/PolicyView.js"))
);
const UserProfile = Loadable(
  lazy(() => import("../views/header/UserProfile.js"))
);
const AppHeader = Loadable(lazy(() => import("../views/header/AppHeader.js")));

const Error = Loadable(lazy(() => import("../views/authentication/Error")));
const Login = Loadable(lazy(() => import("../views/authentication/Login")));
// const ProtectedRoutes = Loadable(
//   lazy(() => import("../views/protectedRoutes/ProtectedRoutes"))
// );

const Router = () => {
  return [
    {
      path: "/dashboard",
      element: <FullLayout />,
      children: [
        {
          path: "/dashboard",
          exact: true,
          element: <Dashboard />,
        },
        {
          path: "/dashboard/policy-view",
          exact: true,
          element: <PolicyView />,
        },
        {
          path: "/dashboard/plan-benefits",
          exact: true,
          element: <PlanBenefits />,
        },
        {
          path: "/dashboard/policy-history",
          exact: true,
          element: <PolicyHistory />,
        },
        {
          path: "/dashboard/profile",
          exact: true,
          element: <UserProfile />,
        },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "/",
      element: <BlankLayout />,
      children: [
        { path: "404", element: <Error /> },
        { path: "/", element: <Login /> },
        { path: "*", element: <Navigate to="/auth/404" /> },
      ],
    },
  ];
};

export default Router;
