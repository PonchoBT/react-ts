import { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, Link } from "@mui/material";

function MapCardAxios() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/12")
      .then((response) => response.json())
      .then((data) => setDogs(data.message));
  }, []);

  return (
    <Grid container spacing={3}>
      {dogs.map((dog) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={dog}>
          <Card>
            <img src={dog} alt="Dog" style={{ height: "250px", width: "100%" }} />
            <CardContent>
              <Typography variant="h6">A dog</Typography>
              <Link href={dog}>View full size</Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MapCardAxios;

    
    
