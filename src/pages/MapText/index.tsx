import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';


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

  const codeString = `
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';


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
      ) : (
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
      )}
    </div>
  );
}

export default App;

  `;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Posts
      </Typography>
      
      <Grid container spacing={4}>
        {/* Columna del Demo */}
        <Grid item xs={12} md={6}>
         
            <Typography variant="h6" gutterBottom>
              Demo
            </Typography>
            <Grid container spacing={2}>
              {data.map((post) => (
                <Grid item xs={12} sm={6} key={post.id}>
                  <Card sx={{ height: 'auto' }}>
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

        </Grid>

        {/* Columna del Código */}
        <Grid item xs={12} md={6}>
      
            <Typography variant="h6" gutterBottom>
              Code
            </Typography>
            <pre style={{ 
              background: '#f5f5f5', 
              padding: '15px', 
              borderRadius: '5px',
              overflow: 'auto',
              maxHeight: '1500px'
            }}>
              <code>{codeString}</code>
            </pre>

        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
