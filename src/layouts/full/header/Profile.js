import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { User, Bell, Shield, Briefcase } from "lucide-react";
const Profile = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(3);
  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      sessionStorage.clear();
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "200px",
      }}
    >
      <Bell size={24} color="#2c3e50" />
      {notifications > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-5px",
            right: "-5px",
            backgroundColor: "#e74c3c",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
          }}
        >
          {notifications}
        </span>
      )}
      <User size={24} color="#2c3e50" style={{ cursor: "pointer" }} />
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        onClick={() => handleLogout()}
      >
        <PowerSettingsNewIcon
          sx={{
            color: "#fff",
            backgroundColor: "red",
            fontSize: "30px",
            borderRadius: "50%",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default Profile;
