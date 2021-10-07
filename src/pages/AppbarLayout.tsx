import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';

import { useContext } from 'react';
import { useHistory } from 'react-router';
import { AppContext } from '../contexts';
import { useTheme } from '@mui/material/styles';
import { Flare, NightsStay } from '@mui/icons-material';
import { ThemeModeContext } from '../contexts';
import { LIGHT_MODE_THEME } from '../config/constants';

type mProps = {
  // title: string,
  children: JSX.Element;
};

const AppbarLayout = ({ children }: mProps) => {
  const theme = useTheme();
  const history = useHistory();
  const { toggleThemeMode } = useContext(ThemeModeContext);
  const context = useContext(AppContext);
  
  const logout = () => {
    localStorage.setItem('LOGEDIN', 'false');
    context.setAppData({isLogedIn: false});
    history.push("/login")
  }

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            {theme.palette.mode === LIGHT_MODE_THEME ? <NightsStay onClick={toggleThemeMode} /> : <Flare onClick={toggleThemeMode} />}
          </IconButton>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: "100vh",
          bgcolor: "#b3b3b3",
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AppbarLayout;
