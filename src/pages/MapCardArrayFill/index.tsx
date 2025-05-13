import React from "react";
import { Grid, Card, CardContent, Typography, Link, Paper } from "@mui/material";

const cardContent = "Card content";
const linkUrl = "https://www.example.com";
const linkText = "Example link";

const names = Array(5).fill("");

const codeString = `
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
`;

function MapCardArrayFill() {
  return (
    <Grid container spacing={4}>
      {/* Demo Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom>
          Demo
        </Typography>
        <Grid container spacing={3}>
          {names.map((name, index) => (
            <Grid item xs={12} sm={6} lg={6} key={index}>
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
      </Grid>

      {/* Code Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom>
          Code
        </Typography>
        <Paper 
          elevation={3}
          sx={{ 
            p: 2,
            backgroundColor: '#f5f5f5',
            maxHeight: '600px',
            overflow: 'auto'
          }}
        >
          <pre style={{ 
            margin: 0,
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word'
          }}>
            {codeString}
          </pre>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default MapCardArrayFill;
