import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./nav.css";

function Nav() {
  return (
    <div className="nav-container">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" className="nav-title">
            My Application
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/lazy-hola" className="nav-link">
            Lazy Hello
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/padres-hijos" className="nav-link">
            Parents and Children
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/map-card" className="nav-link">
          Map Card Array Fill
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/map-card-axios" className="nav-link">
            Map Card Axios
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/map-sin-api" className="nav-link">
            Map without API
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/map-text" className="nav-link">
            Map Text
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/contador-suma" className="nav-link">
            Counter Sum
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/contador-limite" className="nav-link">
            Counter Limit
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
            Lazy Router Image
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Nav;
