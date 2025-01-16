import { useState } from "react";
import AuthForm from "../Form/Form";
import Box from "@mui/material/Box";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Typography from "@mui/material/Typography";
function Login() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
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
        {/* Form on the Left */}
        <Box sx={{ flex: 1, marginRight: 2, padding: 2 }}>
          <Typography variant="h3" className="mb-3">
            Welcome back!
          </Typography>
          <AuthForm formType={'login'} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </Box>

        {/* Image on the Right */}
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
            alt="Placeholder"
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

export default Login;
