import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthLogin = (props) => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phone_email = mobile || email;
    const payload = { phone_email };
    localStorage.setItem("phone_email", phone_email);

    try {
      const response = await fetch("http://127.0.0.1:8000/user/otp/generate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("OTP sent successfully:", data);
      } else {
        console.error("Failed to send OTP:", await response.text());
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }

    navigate("/submitOTP");
    console.log("Logging in with:", { mobile });
  };

  return (
    <>
      <Stack>
        <Box>
          <TextField
            fullWidth
            label="Mobile No."
            name="phone"
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            type="phone"
            id="phone"
          />
        </Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
            marginTop: "15px",
          }}
        >
          <hr style={{ flex: 1, borderTop: "1px solid #ccc" }} />
          <span style={{ padding: "0 10px" }}>OR</span>
          <hr style={{ flex: 1, borderTop: "1px solid #ccc" }} />
        </div>
        <Box>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </Box>
      </Stack>
      <Box sx={{ marginTop: "20px" }}>
        <Button color="primary" variant="contained" size="large" fullWidth>
          Login
        </Button>
      </Box>
    </>
  );
};

export default AuthLogin;
