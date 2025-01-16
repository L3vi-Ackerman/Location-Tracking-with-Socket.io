import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AuthForm from "../Form/Form";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Form Submitted:", formData);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Box
        sx={{
          width: "70%",
          borderRadius: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          boxShadow: 3,
        }}
      >
        <Box sx={{ flex: 1, marginRight: 2, padding: 2 }}>
          <Typography variant="h3" className="mb-3">
            Create Your Account
          </Typography>
          <AuthForm
            formType="signup"
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="./signup-image.jpg"
            alt="Signup"
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "100%",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
