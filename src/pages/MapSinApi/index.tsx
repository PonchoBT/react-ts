import { Paper, Typography } from "@mui/material";

const names = ["Juan", "María", "Luis", "Ana", "Alfonso"];

const demoCode = `const names = ["Juan", "María", "Luis", "Ana", "Alfonso"];

function MapSinApi() {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}`;

function MapSinApi() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
      <Typography variant="h5" gutterBottom>
          Demo
        </Typography>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1 }}>
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
          {demoCode}
          </pre>
          </Paper>
      </div>
    </div>
  );
}

export default MapSinApi;
