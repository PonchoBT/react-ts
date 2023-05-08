import React from "react";
import { Grid, Card, CardContent, Typography, Link } from "@mui/material";

const cardContent = "Contenido de la tarjeta";
const linkUrl = "https://www.ejemplo.com";
const linkText = "Enlace de ejemplo";

const names = Array(5).fill("");

function MapCardArrayFiil() {
  return (
    <Grid container spacing={3}>
      {names.map((name, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Título de la tarjeta {index + 1}
              </Typography>
              <Typography color="textSecondary">
                Subtítulo de la tarjeta
              </Typography>
              <Typography variant="body2" component="p">
                {cardContent}
              </Typography>
              <Link href={linkUrl}>{linkText}</Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MapCardArrayFiil;
