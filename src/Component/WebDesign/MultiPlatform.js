import { Grid, Typography } from "@mui/material";
import React from "react";
import { gridData } from "../Home/constant";

function MultiPlatform() {
  return (
    <Grid className="p-4" >
      <Grid className="">
        <Typography className="text1Style">
          We are not just limited to one platform or framework{" "}
          <span className="text-warning">.</span>
        </Typography>
        <Typography className="text2Style">
          As a web design agency, we understand that every business has unique
          needs and objectives. That's why we offer a range of website
          development solutions, tailored to meet the specific requirements of
          each client.
        </Typography>
      </Grid>
      <Grid container item xs={12} gap={2}>
        {gridData.map((item, index) => (
          <Grid
            item
            xs={5.9}
            key={index}
            style={{
              padding: "32px 48px",
              backgroundColor: item.backgroundColor,
              backgroundImage: item.backgroundImage,
            }}
          >
            <img src={item.image} alt="" width="263" height="60" />
            <Typography variant="h6">{item.text}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default MultiPlatform;
