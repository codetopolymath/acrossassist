import { TextField } from "@mui/material";
import React from "react";
import { dateFormatter } from "../../../utils";

const RenderComponent = ({ keyId, value, isMobile }) => {
  if (keyId === "entry_date") {
    return (
      <td style={{ width: "70" }}>
        <TextField
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          id="outlined-disabled"
          value={dateFormatter(value)}
        />
      </td>
    );
  } else if (keyId.includes("address") || keyId.includes("comment")) {
    return (
      <td style={{ width: "70%" }}>
        <textarea
          disabled
          style={{ padding: "5px", overflow: "scroll", fontSize: "0.9rem" }}
          rows="6"
          cols={isMobile ? "30" : "50"}
          value={value}
        />
      </td>
    );
  }
  return (
    <td style={{ width: "70%" }}>
      <TextField
        fullWidth
        InputProps={{
          readOnly: true,
        }}
        id="outlined-disabled"
        value={value}
      />
    </td>
  );
};

export default RenderComponent;
