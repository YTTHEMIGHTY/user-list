import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getUsersSelector
} from "../store/user/selectors";

import { Waypoint } from "react-waypoint";
import { IUser, IUserResponse } from "../store/user/types";
import { fetchUserRequest } from "../store/user/actions";

import AppbarLayout from './AppbarLayout'
import MyCard from './MyCard'
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';

const User = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const users = useSelector(getUsersSelector) as IUserResponse;
  

  useEffect(() => {
    fetchMore(1);
  }, []);

  const fetchMore = (page: number) => {
    console.log("Download Data:", page);
    dispatch(fetchUserRequest(page, users.data));
  }

  return (
    <AppbarLayout>
        <Box sx ={{
            display: "flex", 
            flexWrap: "wrap", 
            alignItems: "center", 
            justifyContent: "space-around",
            maxHeight: "100vh", 
            height: "97vh", 
            bgcolor: "rgba(255,255,255,0.7)", 
            width: "60%", 
            paddingTop: "30px",
            paddingBottom:'30px',
            overflow: "scroll",
            }}>
            {/* <MyCard/> */}


              {users.data.map((u: IUser, i:number) => (
                <React.Fragment key={u.id}>
                  <MyCard userData={u} />
                  {users.page < 5 && i === users.data.length - 5 && (
                    <Waypoint onEnter={ () =>fetchMore(users.page+1) }/>
                  )}
                </React.Fragment>
              ))}
            
      
            { pending && 
              <div> 
                <CircularProgress size={18} thickness={4}/> Loading...
              </div> 
            }
        </Box>


    </AppbarLayout>

  );
};

export default User;
