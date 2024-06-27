import * as React from "react";

import Box from "@mui/material/Box";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const StatsCard = (props) => {
  return (
    <Box
      component={Link}
      to={props.route}
      sx={{
        bgcolor: props.backgroundColor || "background.paper",
        boxShadow: 1,
        borderRadius: 3,
        borderColor: "black",
        textDecoration: "none",
        p: 2,
        minWidth: 250,
        marginTop: props.isMobile && "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {props.icon}
        <div>
          <Box sx={{ color: "text.secondary" }}>{props.title}</Box>
          <Box
            sx={{
              color: "text.primary",
              fontSize: 30,
              marginTop: "2px",
              fontWeight: "medium",
            }}
          >
            <CountUp start={0} end={props.count} />
          </Box>
        </div>
      </div>
    </Box>
  );
};
export default StatsCard;
