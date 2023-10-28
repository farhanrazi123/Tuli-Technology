import React from "react";
import { Grid, Typography } from "@mui/material";

const WebsiteFeatures = () => {
  return (
    <Grid item xs={12} spacing={2} className="p-4">
        <Grid item xs={12} gap={2} display={'flex'}>
          <Grid item xs={4} sm={6}>
            <div
              style={{
                width: "300px",
                height: "392px",
                backgroundColor: "#e07a5f",
                padding: "48px 32px",
                marginTop: "0",
              }}
            >
              <img
                src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/num-1.svg"
                alt="imgg"
                style={{ width: "55px", height: "85px" }}
              />
              <Typography variant="h6" gutterBottom>
                User-friendly design
              </Typography>
              <Typography variant="body1">
                A clean and easy-to-use design that makes it easy for users to
                find the information they need.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4} sm={6}>
            <div
              style={{
                width: "300px",
                height: "392px",
                backgroundColor: "#4cc9f0",
                padding: "48px 32px",
                marginTop: "35px",
              }}
            >
              <img
                src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/num-2.svg"
                alt="imgg"
                style={{ width: "55px", height: "85px" }}
              />
              <Typography variant="h6" gutterBottom>
                Accessibility
              </Typography>
              <Typography variant="body1">
                Our websites are accessible to users with disabilities and
                optimized for screen readers.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4} sm={6}>
            <div
              style={{
                width: "300px",
                height: "392px",
                backgroundColor: "#4cc9f0",
                padding: "48px 32px",
                marginTop: "0",
              }}
            >
              <img
                src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/num-3.svg"
                alt="imgg"
                style={{ width: "55px", height: "85px" }}
              />
              <Typography variant="h6" gutterBottom>
                Accessibility
              </Typography>
              <Typography variant="body1">
                Our websites are accessible to users with disabilities and
                optimized for screen readers.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={4} sm={6}>
            <div
              style={{
                width: "300px",
                height: "392px",
                backgroundColor: "#4cc9f0",
                padding: "48px 32px",
                marginTop: "35px",
              }}
            >
              <img
                src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/num-4.svg"
                alt="imgg"
                style={{ width: "55px", height: "85px" }}
              />
              <Typography variant="h6" gutterBottom>
                Accessibility
              </Typography>
              <Typography variant="body1">
                Our websites are accessible to users with disabilities and
                optimized for screen readers.
              </Typography>
            </div>
          </Grid>
        </Grid>
       
    </Grid>
  );
};

export default WebsiteFeatures;
