import React from "react";
import Logo from "../LazyRouter/logo.png";
import { Grid, Typography, Paper } from "@mui/material";

const codeString = `
import React from "react";
import Logo from "../LazyRouter/logo.png";

const Imagen: React.FC = () => {
  return (
    <div>
      <img src={Logo} alt="Mi imagen"/>
    </div>
  );
};

export default Imagen;
`;

const Imagen: React.FC = () => {
  return (
    <Grid container spacing={4}>
      {/* Demo Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom>
          Demo
        </Typography>
        <div>
          <img src={Logo} alt="Mi imagen"/>
        </div>
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
};

export default Imagen;











