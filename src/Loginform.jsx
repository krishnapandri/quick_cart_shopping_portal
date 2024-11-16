import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff, Refresh } from "@mui/icons-material";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    enteredCaptcha: "",
    generatedCaptcha: generateCaptcha(),
    otp: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loginMethod, setLoginMethod] = useState("password");
  const [sessionKeys, setSessionKeys] = useState({ loginsessionkey: "", authenticationkey: "" });

  function generateCaptcha() {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) 
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    return captcha;
  }

  const refreshCaptcha = () => {
    setFormData((prev) => ({
      ...prev,
      generatedCaptcha: generateCaptcha(),
      enteredCaptcha: "",
    }));
    setFormErrors((prev) => ({ ...prev, captcha: "" }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (loginMethod === "otp") {
      setFormErrors(errors);
      return Object.keys(errors).length === 0;
    }

    if (!formData.password) errors.password = "Password is required.";
    if (formData.enteredCaptcha !== formData.generatedCaptcha) {
      errors.captcha = "Captcha does not match.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const generateSessionKeys = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/login/generatekey");
      const keys = response.data.data[0];
      setSessionKeys({ loginsessionkey: keys.loginsessionkey, authenticationkey: keys.authenticationkey });
    } catch (error) {
      console.error("Error generating keys:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await generateSessionKeys();

      const loginData = {
        loginid: formData.email,
        password: loginMethod === "password" ? formData.password : "",
        method: loginMethod.toUpperCase(),
        loginsessionkey: sessionKeys.loginsessionkey,
        authenticationkey: sessionKeys.authenticationkey,
        ...(loginMethod === "otp" && { otp: formData.otp })
      };

      axios
        .post("http://localhost:8080/api/login/authenticate", loginData)
        .then((response) => {
          const tokens = response.data.data[0];
          localStorage.setItem("access_token", tokens.access_token);
          localStorage.setItem("authorization_token", tokens.authorization_token);
          console.log("Login successful");
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    }
  };

  const handleGenerateOtp = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/login/otp/${formData.email}`);
      const keys = response.data.data[0];
      setSessionKeys({ loginsessionkey: keys.loginsessionkey, authenticationkey: keys.authenticationkey });
      alert("OTP sent to your email.");
    } catch (error) {
      console.error("Error generating OTP:", error);
    }
  };

  const toggleLoginMethod = () => {
    setLoginMethod((prevMethod) => (prevMethod === "password" ? "otp" : "password"));
    setFormErrors({});
    setFormData((prev) => ({
      ...prev,
      password: "",
      enteredCaptcha: "",
      generatedCaptcha: loginMethod === "password" ? "" : generateCaptcha(),
      otp: ""
    }));
  };


  function OnSubmitChange(){
    
  }



  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Box
        sx={{
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          backgroundColor: "white",
          width: "400px",
        }}
      >
        <Typography variant="h5" align="center" marginBottom={3}>Login</Typography>
        
        <form onSubmit={handleLogin}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
          </Box>
          {loginMethod === "password" && 
            (
              <>
                <Box mb={2}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    value={formData.password}
                    onChange={handleInputChange}
                    error={!!formErrors.password}
                    helperText={formErrors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box
                  mb={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <TextField
                    label="Generated Captcha"
                    variant="outlined"
                    value={formData.generatedCaptcha}
                    InputProps={{
                      readOnly: true,
                      style: { color: "rgba(0, 0, 0, 0.6)", backgroundColor: "#f0f0f0", fontSize: "20px" },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={refreshCaptcha} size="small">
                            <Refresh />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ width: "40%" }}
                  />
                  <TextField
                    label="Enter Captcha"
                    name="enteredCaptcha"
                    variant="outlined"
                    value={formData.enteredCaptcha}
                    onChange={handleInputChange}
                    error={!!formErrors.captcha}
                    helperText={formErrors.captcha}
                    sx={{ width: "56%" }}
                  />
                </Box>
              </>
            )
          }
          {loginMethod === "otp" && (
            <Box mb={2}>
              <TextField
                fullWidth
                label="Enter OTP"
                name="otp"
                variant="outlined"
                value={formData.otp}
                onChange={handleInputChange}
                error={!!formErrors.otp}
                helperText={formErrors.otp}
              />
              <Button onClick={handleGenerateOtp} color="primary" fullWidth variant="outlined" sx={{ mt: 1 }}>Generate OTP</Button>
            </Box>
          )}
          <Box mb={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 1 }}
              onClick={OnSubmitChange}
            >
              {loginMethod === "otp" ? "Login with OTP" : "Login with Password"}
            </Button>
          </Box>

          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button color="secondary" onClick={toggleLoginMethod}>{loginMethod === "otp" ? "Login with Password" : "Login with OTP"}</Button>
            <Button color="secondary" onClick={() => alert("Forgot Password feature coming soon")}>Forgot Password?</Button>
          </Box>

        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
