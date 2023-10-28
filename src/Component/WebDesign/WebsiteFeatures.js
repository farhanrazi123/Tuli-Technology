import React from "react";
import { Grid, Typography } from "@mui/material";

const WebsiteFeatures = () => {
  return (
    <Grid item xs={12} className="p-4">
      <Grid item xs={12} gap={2} display={'flex'}>
        <Grid item xs={4} >
          <Typography style={{
            color: "#2d2d2d",
            fontFamily: "Hellix Black Sans-serif",
            fontSize: "3.5rem",
            fontWeight: "600",
            marginBottom: "1.5rem",
          }}>
            Website <span className="text-warning">features.</span>
          </Typography>
          <Typography style={{
            color: "#2d2d2d",
            fontFamily: "Hellix Medium Sans-serif",
            fontSize: "1.2rem",
            lineHeight: "1.7rem",
          }}>
            We understand the importance of a website that not only looks good
            but also includes all the necessary elements to help your business
            thrive. Whether you're an individual, a startup, a small business,
            or a corporation, we're here to help you every step of the way.
          </Typography>
        </Grid>
          <Grid item xs={4} sm={6}>
            <div
              style={{
                width: "390px",
                height: "380px",
                backgroundColor: "#2a9d8f",
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
                width: "390px",
                height: "380px",
                backgroundColor: "#264653",
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
        </Grid>
        <Grid item xs={12} gap={2} display={'flex'} justifyContent={'flex-end'}>
          <Grid item xs={4} sm={6}>
            <div
              style={{
                width: "390px",
                height: "380px",
                backgroundColor: "#e07a5f",
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
                width: "390px",
                height: "380px",
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
        <Grid item xs={12} gap={2} display={'flex'} justifyContent={'flex-end'}>
          <Grid item xs={4} sm={6}>
            <div
              style={{
                width: "390px",
                height: "380px",
                backgroundColor: "#480ca8",
                padding: "48px 32px",
                marginTop: "0",
              }}
            >
              <img
                src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/num-5.svg"
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
                width: "390px",
                height: "380px",
                backgroundColor: "#06d6a0",
                padding: "48px 32px",
                marginTop: "35px",
              }}
            >
              <img
                src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/num-6.svg"
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
