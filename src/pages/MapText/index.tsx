import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import PreviewIcon from '@mui/icons-material/Preview';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [data, setData] = useState<Post[]>([]);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json: Post[]) => setData(json));
  }, []);

  const codeString = `
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  `;

  return (
    <div>
      <h1>Posts</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowCode(!showCode)}
        startIcon={showCode ? <PreviewIcon /> : <CodeIcon />}
        sx={{
          marginBottom: '20px',
          borderRadius: '28px',
          padding: '10px 24px',
          textTransform: 'none',
          boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 10px 4px rgba(0, 0, 0, .1)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {showCode ? 'Ver Demo' : 'Ver Código'}
      </Button>

      {showCode ? (
        <pre style={{ background: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
          <code>{codeString}</code>
        </pre>
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
