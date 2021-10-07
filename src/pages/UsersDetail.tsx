import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getUserDetailsSelector
} from "../store/user/selectors";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Myappbar from "../pages/AppbarLayout";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";
import user from "../assets/user.png";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { IUser, IUserLocation } from "../store/user/types";
import { fetchDetailsRequest } from "../store/user/actions";
import CircularProgress from '@mui/material/CircularProgress';

const UsersDetail = () => {
  const classes = style();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  console.log("=----> User Id:", id);
  
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const userDetails = useSelector(getUserDetailsSelector) as IUser;
  const userLocation = userDetails?.location as IUserLocation;
  console.log("=----> userDetails:", JSON.stringify(userDetails));


  useEffect(() => {
    dispatch(fetchDetailsRequest(id));
  }, []);


  return (
    <Myappbar>
      <Box className={classes.parentBox} >
        <Button
          variant="outlined"
          className={classes.backButton}
          onClick = {()=> history.replace('/users')}
        >
          &#8592;
        </Button>
        
        { id !== userDetails.id && 
          <div> 
            <CircularProgress size={18} thickness={4}/> Loading...
          </div> 
        }
        
        { userLocation?.state.length > 0 && id === userDetails.id &&
        <Paper
          className = {classes.allCardsParent}
        >
          <Box
            sx={{
              flex: "1 0 200px",
              padding: "10px",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "auto",
                  borderRadius: "25%",
                  overflow: "hidden",
                }}
              >
                <img src={userDetails.picture} style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
          </Box>
          <Box
            sx={{
              // border:'1px solid red',
              flex: "1 0 250px",
            }}
          >
            <ul style={{ listStyleType: "none" }}>
              <li>
                <h1>{userDetails.firstName} {userDetails.lastName}</h1>
              </li>
              <li>
                <p>
                  <b>Gender:</b> {userDetails.gender}
                </p>
              </li>
              <li>
                <p>
                  <b>Date of birth:</b> {userDetails.dateOfBirth}
                </p>
              </li>
              <li>
                <p>
                  <b>Register date:</b> {userDetails.registerDate}
                </p>
              </li>
              <li>
                <p>
                  <b>Email:</b> {userDetails.email}
                </p>
              </li>
              <li>
                <p>
                  <b>Phone:</b> {userDetails.phone}
                </p>
              </li>
            </ul>
          </Box>
          <Box
            sx={{
              // border:'1px solid red',
              flex: "1 0 250px",
            }}
          >
            <ul style={{ listStyleType: "none" }}>
              <li>
                <h1>Address</h1>
              </li>
              <li>
                <p>
                  <b>State:</b> {userLocation.state}
                </p>
              </li>
              <li>
                <p>
                  <b>Street:</b> {userLocation.street}
                </p>
              </li>
              <li>
                <p>
                  <b>City:</b>  {userLocation.city}
                </p>
              </li>
              <li>
                <p>
                  <b>Country:</b> {userLocation.country}
                </p>
              </li>
              <li>
                <p>
                  <b>Timezone:</b> {userLocation.timezone}
                </p>
              </li>
            </ul>
          </Box>
        </Paper>
        }
      
        
      </Box>
    </Myappbar>
  );
};

export default UsersDetail;

const style = makeStyles({
  parentBox: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    maxHeight: "100vh",
    height: "97vh",
    backgroundColor: "rgba(255,255,255,0.7)",
    width: "60%",
    paddingTop: "30px",
    paddingBottom: "30px",
    overflow: "scroll",
    padding: "0 30px",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: "10px",
    top: "10px",
    cursor: "pointer",
    fontSize: "18px",
    border: "3px solid black",
    borderRadius: "50%",
    height: "50px",
    width: "50px",
    textAlign: "center",
    lineHeight: "50px",
  },
  allCardsParent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  }
});
