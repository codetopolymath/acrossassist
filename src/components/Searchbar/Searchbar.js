import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const Searchbar = ({ placeholder, handleSearch }) => {
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    handleSearch(searchTerm);
  };
  return (
    <TextField
      sx={{ width: "90%", borderRadius: "50%" }}
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Searchbar;
