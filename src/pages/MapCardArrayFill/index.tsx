import React from "react";
import { Grid, Card, CardContent, Typography, Link } from "@mui/material";

const cardContent = "Card content";
const linkUrl = "https://www.example.com";
const linkText = "Example link";

const names = Array(5).fill("");

function MapCardArrayFill() {
  return (
    <Grid container spacing={3}>
      {names.map((name, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Card Title {index + 1}
              </Typography>
              <Typography color="textSecondary">
                Card Subtitle
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

export default MapCardArrayFill;
