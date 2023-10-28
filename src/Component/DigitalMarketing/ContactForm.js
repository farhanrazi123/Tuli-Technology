import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const MyComponent = () => {
  return (
    <Grid>
      <Container
        style={{
          backgroundColor: "rgb(27, 35, 56)",
          maxWidth: "950px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "64px 48px",
          marginTop: "96px",
          marginBottom: "96px",
        }}
      >
        <Grid marginBottom={"35px"}>
          <Typography className="text13" align="center" color={"white"}>
            Still thinking?{" "}
            <span className="text-warning">Let us make it easy for you!</span>
          </Typography>
        </Grid>
        <Grid container spacing={2} display={"flex"}>
          <Grid item xs={12} md={6}>
            <Typography className="text11" color="white" marginBottom={"20px"}>
              You need a website? We can make one for you.
            </Typography>
            <Grid>
              <Typography
                className="text12"
                color="white"
                marginBottom={"20px"}
              >
                Why not join hands and start your website journey.
              </Typography>
              <Grid display={"flex"} marginBottom={"20px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="cntct-ico1"
                  width="40.729"
                  height="40.729"
                  viewBox="0 0 40.729 40.729"
                >
                  <rect
                    id="Rectangle_21607"
                    data-name="Rectangle 21607"
                    width="40.729"
                    height="40.729"
                    transform="translate(0 0)"
                    fill="#f7be00"
                  ></rect>
                  <path
                    id="Path_39906"
                    data-name="Path 39906"
                    d="M0,0,20.04,20.364,0,40.729H20.688L40.729,20.364,20.688,0Z"
                    transform="translate(0 0)"
                    fill="#fff"
                  ></path>
                </svg>
                <Typography
                  className="text12"
                  color="white"
                  marginLeft={"25px"}
                >
                  020 3983 2259
                </Typography>
              </Grid>
              <Grid display={"flex"} marginBottom={"20px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="cntct-ico2"
                  width="40.729"
                  height="40.729"
                  viewBox="0 0 40.729 40.729"
                >
                  <rect
                    id="Rectangle_21616"
                    data-name="Rectangle 21616"
                    width="40.729"
                    height="40.729"
                    fill="#f7be00"
                  ></rect>
                  <path
                    id="Path_39909"
                    data-name="Path 39909"
                    d="M0,0V40.729L40.729,0Z"
                    transform="translate(0 0)"
                    fill="#2e3a58"
                  ></path>
                  <g
                    id="Group_46992"
                    data-name="Group 46992"
                    transform="translate(8.561 8.561)"
                  >
                    <g id="Group_46994" data-name="Group 46994">
                      <path
                        id="Path_39910"
                        data-name="Path 39910"
                        d="M70.2,53.279A11.967,11.967,0,0,1,53.279,70.2Z"
                        transform="translate(-49.774 -49.774)"
                        fill="#042a3f"
                      ></path>
                      <path
                        id="Path_39911"
                        data-name="Path 39911"
                        d="M41.307,58.23A11.967,11.967,0,0,1,58.231,41.306Z"
                        transform="translate(-37.802 -37.801)"
                        fill="#ffca36"
                      ></path>
                    </g>
                  </g>
                </svg>
                <Typography
                  className="text12"
                  color="white"
                  marginLeft={"25px"}
                >
                  enquiries@webbuds.co.uk
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
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
      </Container>
    </Grid>
  );
};

export default MyComponent;
