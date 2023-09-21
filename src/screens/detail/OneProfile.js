import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import RunButton from "../../components/Button";
import classes from "./OneProfile.module.css";
const CardDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  let [fetchedData, updateFetchedData] = useState(null);

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  if (!fetchedData) {
    return null;
  }

  const { name, location, origin, gender, image, status, species } =
    fetchedData;

  const handleBack = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <Container maxWidth="sm" className={classes.Container}>
        <h1 className="text-center mb-3" style={{ textAlign: "center" }}>
          One Character Page
        </h1>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={3}
          mt={5}
        >
          <Typography variant="h4" align="center">
            {name}
          </Typography>
          <Card>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={image}
                  alt={name}
                  className={classes.hoverEffect}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        <strong>Gender:</strong> {gender}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        <strong>Status:</strong> {status}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        <strong>Location:</strong> {location?.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        <strong>Origin:</strong> {origin?.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        <strong>Species:</strong> {species}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <RunButton
          onClick={handleBack}
          label="Go back to Home Page"
          marginTop="2%"
        />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default CardDetails;
