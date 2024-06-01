import React from "react";
import img from "../assets/Glasgow.webp";
import "./ProfilePage.css";
import { Button, Grid, TextField } from "@mui/material";

const ProfilePage = () => {
  return (
    <Grid container spacing={2} className="profile">
      <Grid xs={4} className="anh">
        <h1>Profile</h1>
        <div>
          <img src={img} alt="" />
        </div>
      </Grid>
      <Grid xs={8} className="profile-details">
        <h2>Account Details</h2>
        <TextField
          fullWidth
          margin="normal"
          id="outlined-size-small"
          size="small"
          label="Email*"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          id="outlined-size-small"
          size="small"
          label="Password"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          id="outlined-size-small"
          size="small"
          label="phone"
          variant="outlined"
        />
        <br />
        <hr />
        <h5>location</h5>
        <TextField
          fullWidth
          margin="normal"
          id="outlined-size-small"
          size="small"
          label="phone"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          id="outlined-size-small"
          size="small"
          label="phone"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          id="outlined-size-small"
          size="small"
          label="phone"
          variant="outlined"
        />
        <br />
        <hr/>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button variant="outlined" color="success">
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
