import React from "react";
import { Link } from "react-router-dom";
import { Grid, CardMedia, Typography } from "@mui/material";
import CircularProgress from "../../components/CircularProgress";
import styles from "./Card.module.css";

const getStatusColorClass = (status) => {
  if (status === "Dead") {
    return styles.dead;
  } else if (status === "Alive") {
    return styles.alive;
  }
  return styles.unknown;
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};
const CardComponent = ({ loading, results }) => {
  return (
    <div className="container mt-3">
      <Grid container spacing={2}>
        {loading && <CircularProgress />}
        {results ? (
          results.map((character) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
              <div className={styles.container}>
                <div
                  className={`${styles.box} ${getStatusColorClass(
                    character.status
                  )}`}
                >
                  <div className={styles.imgBx}>
                    <CardMedia
                      component="img"
                      height="auto"
                      image={character.image}
                      alt={character.name}
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.content}>
                    <div>
                      <h2>
                        <Link
                          to={`character/${character.id}`}
                          style={linkStyle}
                        >
                          {character.name}
                        </Link>
                      </h2>
                      <p>Specie: {character.species}</p>
                      <p>Status: {character.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No Characters Found :/</Typography>
        )}
      </Grid>
    </div>
  );
};

export default CardComponent;
