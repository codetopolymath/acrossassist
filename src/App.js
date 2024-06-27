import React, { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Router from "./routes/Router";
import Error from "./views/authentication/Error.js";
import { baselightTheme } from "./theme/DefaultColors";
import { ErrorBoundary } from "react-error-boundary";
// Component imports
import SubmitOTP from "./views/signin/SubmitOTP.js";
import Dashboard from "./views/dashboard/Dashboard.js";
import PolicyView from "./views/policy/PolicyView.js";
import PlanBenefits from "./views/policy/PlanBenefits.js";
import PolicyHistory from "./views/policy/PolicyHistory.js";
import UserProfile from "./views/header/UserProfile.js";
import AppHeader from "./views/header/AppHeader.js";
import Sidebar from "./views/sidebar/Sidebar.js";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  console.log("Sidebar state:", isSidebarOpen); // Debugging statement
  const routing = useRoutes(Router());
  const theme = baselightTheme;
  return (
    <ErrorBoundary fallback={<Error />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {routing}
      </ThemeProvider>
    </ErrorBoundary>
  );
  // return (
  //   <Router>
  //     {/* <AppHeader toggleSidebar={toggleSidebar} /> */}
  //     <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
  //     <div
  //       style={{
  //         marginLeft: isSidebarOpen ? 240 : 70,
  //         transition: "margin 0.3s",
  //       }}
  //     >
  //       <Routes>
  //         <Route index exact path="/" element={<Login />} />
  //         <Route path="/submitOTP" element={<SubmitOTP />} />
  //         <Route
  //           path="/profile"
  //           element={<UserProfile isOpen={isSidebarOpen} />}
  //         />
  //         <Route
  //           path="/dashboard"
  //           element={<Dashboard isOpen={isSidebarOpen} />}
  //         />
  //         <Route
  //           path="/policy-view"
  //           element={<PolicyView isOpen={isSidebarOpen} />}
  //         />
  //         <Route
  //           path="/plan-benefits"
  //           element={<PlanBenefits isOpen={isSidebarOpen} />}
  //         />
  //         <Route
  //           path="/policy-history"
  //           element={<PolicyHistory isOpen={isSidebarOpen} />}
  //         />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
}

export default App;
