import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import DiscoverBtn from "../../components/DiscoverButton";
const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          src="https://stordis.com/wp-content/uploads/elementor/thumbs/Stordis_Logoslogan-600ppi-pfuz61gtf5633nwnrgosnma83943rgivumukzgf4e8.png"
          width={75}
          alt="stordis logo"
        />
      </Typography>
      <Divider />
      <List>
        <ListItem key="discover" disablePadding>
          <DiscoverBtn />
        </ListItem>
        <ListItem key="home" disablePadding>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem key="about" disablePadding>
          <Link to="/devices">About</Link>
        </ListItem>
        <ListItem key="users" disablePadding>
          <Link to="/discover">Users</Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/">
              <img
                src="https://stordis.com/wp-content/uploads/elementor/thumbs/Stordis_Logoslogan-600ppi-pfuz61gtf5633nwnrgosnma83943rgivumukzgf4e8.png"
                width={75}
                alt="stordis logo"
              />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/">Home</Link>
            &nbsp;&nbsp;
            <Link to="/devices">Devices</Link>
            &nbsp;&nbsp;
            <Link to="/discover">Discover</Link>
            &nbsp;&nbsp;
            <DiscoverBtn />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default NavBar;
