import * as React from "react";
import Box from "@mui/material/Box";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import bgImage from "../assets/Background.png";

import { useContext } from 'react';
import { AppContext } from '../contexts';

interface State {
  userId: string;
  password: string;
  showPassword: boolean;
}

const LoginPage = () => {
  const history = useHistory();
  const context = useContext(AppContext);
  
  const textTwoRef = React.useRef<HTMLInputElement | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const [values, setValues] = React.useState<State>({
    userId: "",
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const loginButton = () => {
    if(values.userId === '9587970735' && values.password === 'arit@123'){
      localStorage.setItem('LOGEDIN', 'true');
      context.setAppData({isLogedIn: true});
      history.push("/users")
    } else {
      alert("User or Password is invalid!!")
    }
  };

  return (
    <Box
      component="form"
      sx={{
        // bgcolor: "#b3b3b3",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Paper
        sx={{
          height: "450px",
          width: "30%",
          minWidth: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.4)",
        }}
      >
        <Box
          sx={{
            height: "15%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PersonIcon
            sx={{
              border: "4px solid black",
              borderRadius: "100%",
              height: "80%",
              width: "10%",
              minWidth: "50px",
            }}
          />
        </Box>
        <TextField
          id="outlined-basic"
          sx={{ width: "70%", color: "white", textDecorationColor: "white" }}
          inputProps={{
            style: {
              textDecorationColor: "white",
            },
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e?.code === "Enter" ? textTwoRef.current?.focus() : null
          }
          onChange={handleChange("userId")}
          label="ID"
          variant="filled"
        />
        <FormControl sx={{ m: 1, width: "70%" }} variant="filled">
          <InputLabel>Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            sx={{ color: "white" }}
            inputProps={{
              style: {
                color: "white",
                textDecorationColor: "white",
              },
            }}
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              e?.code === "Enter" ? buttonRef.current?.focus() : null
            }
            onChange={handleChange("password")}
            inputRef={textTwoRef}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Box
          sx={{
            height: "20%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{}}
            onClick={loginButton}
            ref={buttonRef}
            variant="contained"
          >
            Go
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
