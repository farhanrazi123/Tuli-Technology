import React from "react";
import {
  Button,
  FormControlLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

function ContactForm() {
  const locations = [
    {
      title: "East London",
      text: ["Studio 536", "Salisbury House", "London Wall", "EC2M 5SQ"],
    },
    {
      title: "North London",
      text: [
        "North London Business Park",
        "Building No 3",
        "London",
        "N11 1NP",
      ],
    },
  ];

  return (
    <Grid container item xs={12}>
      <Grid
        className="p-4"
        item
        xs={6}
        style={{
          backgroundColor: "rgb(27, 35, 56)",
        }}
      >
        <Grid container style={{padding: "25px 0 45px 0"}}>
          {locations.map((location, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Typography
                color="white"
                style={{
                  fontFamily: "Hellix Black",
                  fontSize: "24px",
                  fontWeight: "600",
                  lineHeight: "26px",
                  marginBottom: "25px",
                }}
              >
                {location.title}
              </Typography>
              {location.text.map((text, textIndex) => (
                <Typography
                  key={textIndex}
                  color="white"
                  style={{
                    fontFamily: "Hellix Regular",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "34px",
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
        <Grid >
          <Typography
            style={{
              color: "white",
              fontFamily: "Hellix Black",
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "26px",
              marginBottom: "25px",
            }}
          >
            +44 (0) 20 3983 2259
          </Typography>
          <Typography
            style={{
              color: "white",
              fontFamily: "Hellix Black",
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "26px",
              marginBottom: "25px",
            }}
          >
            enquiries@webbuds.co.uk
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={6}
        display={"flex"}
        style={{
          backgroundColor: "#2a9d8f",
        }}
      >
        <Grid item xs={12} padding={"48px"}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputLabel style={{ color: "white" }}>Name</InputLabel>
              <TextField
                id="outlined-size-small"
                placeholder="Name"
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel style={{ color: "white" }}>Email</InputLabel>
              <TextField
                id="outlined-size-small"
                placeholder="Email"
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel style={{ color: "white" }}>Contact</InputLabel>
              <TextField
                id="outlined-size-small"
                placeholder="Contact"
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel style={{ color: "white" }}>Price</InputLabel>
              <TextField
                id="outlined-size-small"
                placeholder="Price"
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel style={{ color: "white" }}>Message</InputLabel>
              <TextField
                style={{ padding: 0 }}
                placeholder="Message"
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                name="form_fields[field_6869b01]"
                required
                aria-required="true"
              >
                <FormControlLabel
                  value="agree"
                  control={<Radio />}
                  label={
                    <Typography color={"white"}>
                      By submitting, I agree to Web Buds{" "}
                      <span className="text-warning">privacy policy</span>
                    </Typography>
                  }
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{
                  backgroundColor: "#f7be00",
                  color: "#1b2338",
                  fontFamily: "Hellix Medium",
                  fontWeight: "500",
                  borderRadius: "50px 50px 50px 50px",
                  width: "100px",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactForm;
