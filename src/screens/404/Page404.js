import { Grid } from "@mui/material";
import "./Page404.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
export default function Page404() {
  let navigate = useNavigate();
  const handleBack = () => {
    navigate("/"); // Use navigate to go back to home page
  };

  //source code :https://codepen.io/hkmtqffr/pen/dVPewm?editors=1111#
  return (
    <Grid container spacing={2}>
      <br />
      <Grid item xs={12}>
        <div class="background-img">
          <div class="space"></div>
          <div class="wrapper">
            <div class="img-wrapper">
              <p class="errormessage">404</p>
              <img
                src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
                class="img"
                alt="Rick&Morty logo"
              />
              <p class="message">
                The page you are trying to search has been moved to another
                universe.
              </p>
            </div>
            <Button onClick={handleBack} label="Go back to Home Page"></Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
