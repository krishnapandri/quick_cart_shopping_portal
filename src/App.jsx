import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API calls
import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function App() {
  const initialFormData = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    contact: "",
    designation: "",
    dateOfBirth: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleClickShowConfirmPassword = () =>setShowConfirmPassword((prev) => !prev);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactRegex = /^[0-9+ ]{0,15}$/; // Allows only digits, spaces, and '+' with max length 15.
  const pincodeRegex = /^\d{6}$/; // Pincode must be exactly 6 digits.
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{11,}$/; // Password must be >10 chars, with lower, upper, digit, special char.

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "username":
        error = !value
          ? "Username is required"
          : value.length > 100
          ? "Username cannot exceed 100 characters"
          : "";
        break;
      case "email":
        error = !value
          ? "Email is required"
          : !emailRegex.test(value)
          ? "Invalid email address"
          : "";
        break;
      case "password":
        error = !value
          ? "Password is required"
          : !passwordRegex.test(value)
          ? "Password must be at least 11 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
          : "";
        break;
      case "confirmPassword":
        error = !value
          ? "Confirm password is required"
          : value !== formData.password
          ? "Passwords do not match"
          : "";
        break;
      case "contact":
        error = !value
          ? "Contact is required"
          : !contactRegex.test(value)
          ? "Invalid contact number (only digits, spaces, and '+')"
          : "";
        break;
      case "designation":
        error =
          value.length > 100 ? "Designation cannot exceed 100 characters" : "";
        break;
      case "dateOfBirth":
        error = !value ? "Date of Birth is required" : ""; // Optional validation for date of birth
        break;
      case "country":
        error = !value
          ? "Country is required"
          : value.length > 100
          ? "Country cannot exceed 100 characters"
          : "";
        break;
      case "state":
        error = !value
          ? "State is required"
          : value.length > 100
          ? "State cannot exceed 100 characters"
          : "";
        break;
      case "city":
        error = !value
          ? "City is required"
          : value.length > 100
          ? "City cannot exceed 100 characters"
          : "";
        break;
      case "pincode":
        error = !value
          ? "Pincode is required"
          : !pincodeRegex.test(value)
          ? "Pincode must be exactly 6 digits"
          : "";
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate on change
    const error = validateField(name, value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleContactChange = (e) => {
    const value = e.target.value;

    // Allow only digits, spaces, and '+' in the contact field and limit to 15 characters
    const filteredValue = value.replace(/[^0-9+ ]/g, "").slice(0, 15);
    setFormData((prevData) => ({
      ...prevData,
      contact: filteredValue,
    }));

    // Validate contact number
    const error = validateField("contact", filteredValue);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      contact: error,
    }));
  };

  const handlePincodeChange = (e) => {
    const value = e.target.value;

    // Allow only digits in the pincode field and limit to 6 characters
    const filteredValue = value.replace(/[^0-9]/g, "").slice(0, 6);
    setFormData((prevData) => ({
      ...prevData,
      pincode: filteredValue,
    }));

    // Validate pincode
    const error = validateField("pincode", filteredValue);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      pincode: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Validate all fields
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
    });

    setFormErrors(errors);

    const hasErrors = Object.values(errors).some((error) => error);

    if (!hasErrors) {
      console.log("Form Submitted", formData);
      alert("Registration successful!"); // For demo purposes
      setFormData(initialFormData); // Reset form after submission
      setFormErrors({}); // Reset errors after submission
    } else {
      alert("Please fix the validation errors before submitting.");
    }
  };

  useEffect(() => {
    setFormData(initialFormData);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "20px",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
      }}
    >
      <Box
        sx={{
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          width: "800px",
        }}
      >
        <Typography variant="h5" component="h1" align="center" mb={4}>
          User Registration Form
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <Box mb={2}>
            <TextField
              fullWidth
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              value={formData.username}
              onChange={handleInputChange}
              error={!!formErrors.username}
              helperText={formErrors.username}
            />
          </Box>

          {/* Email & Contact Fields */}
          <Box mb={2} display="flex" justifyContent="space-between">
            <TextField
              sx={{ width: "49%" }}
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
            <TextField
              sx={{ width: "48%", marginLeft: "21px" }}
              id="contact"
              name="contact"
              label="Contact"
              variant="outlined"
              value={formData.contact}
              onChange={handleContactChange} // Updated to the new handler
              error={!!formErrors.contact}
              helperText={formErrors.contact}
            />
          </Box>

          {/* Password & Confirm Password Fields */}
          <Box mb={2}>
            <FormControl sx={{ width: "49%" }} variant="standard">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                error={!!formErrors.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {formErrors.password && (
                <span style={{ color: "red" }}>{formErrors.password}</span>
              )}
            </FormControl>

            <FormControl
              sx={{ width: "48%", marginLeft: "21px" }}
              variant="standard"
            >
              <InputLabel htmlFor="confirmPassword">
                Confirm Password
              </InputLabel>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={!!formErrors.confirmPassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowConfirmPassword}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {formErrors.confirmPassword && (
                <span style={{ color: "red" }}>
                  {formErrors.confirmPassword}
                </span>
              )}
            </FormControl>
          </Box>

          {/* Designation & Date of Birth Fields */}
          <Box mb={2} display="flex" justifyContent="space-between">
            <TextField
              sx={{ width: "49%" }}
              id="dateOfBirth"
              name="dateOfBirth"
              label="Date of Birth"
              variant="standard"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              error={!!formErrors.dateOfBirth}
              helperText={formErrors.dateOfBirth}
              InputProps={{
                inputProps: {
                  max: new Date().toISOString().split("T")[0],
                },
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              sx={{ width: "48%", marginLeft: "21px" }}
              id="designation"
              name="designation"
              label="Designation"
              variant="outlined"
              value={formData.designation}
              onChange={handleInputChange}
              error={!!formErrors.designation}
              helperText={formErrors.designation}
            />
          </Box>

          {/* Address Fields */}
          <Box mb={2}>
            <TextField
              fullWidth
              id="address1"
              name="address1"
              label="Address Line 1"
              variant="outlined"
              value={formData.address1}
              onChange={handleInputChange}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="address2"
              name="address2"
              label="Address Line 2"
              variant="outlined"
              value={formData.address2}
              onChange={handleInputChange}
            />
          </Box>

          <Box mb={2} display="flex" justifyContent="space-between">
            <TextField
              sx={{ width: "49%" }}
              id="country"
              name="country"
              label="Country"
              variant="outlined"
              value={formData.country}
              onChange={handleInputChange}
              error={!!formErrors.country}
              helperText={formErrors.country}
            />
            <TextField
              sx={{ width: "48%", marginLeft: "21px" }}
              id="state"
              name="state"
              label="State"
              variant="outlined"
              value={formData.state}
              onChange={handleInputChange}
              error={!!formErrors.state}
              helperText={formErrors.state}
            />
          </Box>

          <Box mb={2} display="flex" justifyContent="space-between">
            <TextField
              sx={{ width: "49%" }}
              id="city"
              name="city"
              label="City"
              variant="outlined"
              value={formData.city}
              onChange={handleInputChange}
              error={!!formErrors.city}
              helperText={formErrors.city}
            />
            <TextField
              sx={{ width: "48%", marginLeft: "21px" }}
              id="pincode"
              name="pincode"
              label="Pincode"
              variant="outlined"
              value={formData.pincode}
              onChange={handlePincodeChange} // Updated to the new handler
              error={!!formErrors.pincode}
              helperText={formErrors.pincode}
            />
          </Box>

          {/* Submit & Reset Buttons */}
          <Box mt={3} display="flex" justifyContent="center">
            <Button
              style={{ width: "250px" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>

            <Button
              style={{ width: "250px", marginLeft: "10px" }}
              variant="contained"
              color="secondary"
              type="reset"
              onClick={() => {
                setFormData(initialFormData);
                setFormErrors({});
              }}
            >
              Reset
            </Button>
          </Box>
        </form>
      </Box>
      <Box>
        {/* <Login /> */}
      </Box>
    </Box>
  );
}

export default App;
