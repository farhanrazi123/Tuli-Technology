/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Grid, SvgIcon, Typography } from "@mui/material";
import { icons } from "../Home/constant";

function WhyChoose() {
  return (
    <section className="p-4">
      <Grid display={"flex"} >
        <Grid item xs={6}>
          <img
            src="https://www.webbuds.co.uk/wp-content/uploads/2023/05/why-img.jpg"
            alt="Image"
            style={{ maxWidth: "750px", maxHeight: "750px" }}
          />
        </Grid>
        <Grid item xs={6} padding={'90px 40px'}>
          <Typography className="text14">
            Why Choose <br /> Web Buds
          </Typography>
          <Typography className="text15">
            Because we got everything covered for you
          </Typography>
          <Typography className="text16" maxWidth={'500px'} marginBottom={'25px'}>
            We are specialised in building highly interactive and dynamic
            Angular websites and web applications that drive engagement,
            conversion, and growth.
          </Typography>
          <Grid container spacing={2} >
          {icons.map((item) => (
            <Grid item xs={6} key={item.id} display={'flex'} alignItems={'center'}>
              <div>
                <SvgIcon
                  component={() => item.icon}
                  width={56}
                  height={56}
                  viewBox="0 0 56 56"
                />
              </div>
              <Typography className="text17">{item.text}</Typography>
            </Grid>
          ))}
        </Grid>
        </Grid>
       
      </Grid>
    </section>
  );
}

export default WhyChoose;
