import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json: Post[]) => setData(json));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <Grid container spacing={2}>
        {data.map((post) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
            <Card sx={{ maxWidth: 345, height: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
