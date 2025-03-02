import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Mini-Site</Typography>
        <Button color="inherit" component={Link} to="/">Users</Button>
        <Button color="inherit" component={Link} to="/albums">Albums</Button>
        <Button color="inherit" component={Link} to="/images">Images</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
