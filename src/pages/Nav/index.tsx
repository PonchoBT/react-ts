import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./nav.css";
function Nav() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Mi aplicación</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/" className="nav-link">
          Inicio
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/lazy-hola" className="nav-link">
          Lazy Hola
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/padres-hijos" className="nav-link">
          Padres y hijos
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/map-card" className="nav-link">
          Map Card
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/map-card-axios" className="nav-link">
          Map Card Axios
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/map-sin-api" className="nav-link">
          Map sin API
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/map-text" className="nav-link">
          Map Text
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/contador-suma" className="nav-link">
          Contador Suma
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/contador-limite" className="nav-link">
          Contador Límite
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/wsj" className="nav-link">
          WSJ
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/video-background" className="nav-link">
          Video Background
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/lazyrouter" className="nav-link">
        Lazy Router imagen
        </Link>
      </Grid>
    </Grid>
  );
}

export default Nav;
