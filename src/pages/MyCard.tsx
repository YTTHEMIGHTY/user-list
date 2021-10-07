import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IUser } from "../store/user/types";
import { useHistory } from "react-router";


type mProps = {
  userData: IUser
}

const MyCard = (props: mProps) => {
  const history = useHistory();

  return (
    <Card
      sx={{ margin: "10px", minWidth: "250px", width: "30%" }}
      onClick={() => history.push(`/userdetails/${props.userData.id}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.userData.picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.userData.firstName} {props.userData.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MyCard;
