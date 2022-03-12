import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          A BASIC BOOK STORE APPLICATION
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          APP AVENGERS
        </Typography>
      </Box>
    </div>
  );
};

export default About;
