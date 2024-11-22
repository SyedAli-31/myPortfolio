"use client";
import * as React from "react";
import Link from "next/link"; // Import Next.js Link
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" }, // Updated: Added the route for About
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          my: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexGrow: 1,
            justifyContent: "center",
            color: "white",
          }}
        ></Box>
        {/* Circle Profile Image in Drawer */}
        <Box
          component="img"
          src="profile.webp" // Replace with your image path
          alt="User Avatar"
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
            mb: 1,
          }}
          onClick={handleMenuOpen} // Open menu on click
        />
        <Typography variant="h6" className="text-white">
          Syed
        </Typography>
      </Box>

      <Divider />

      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link href={item.href} passHref>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "black" }}>
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexGrow: 1,
              color: "white",
            }}
          >
            {/* Circular Image in Navbar */}
            <Box
              component="img"
              src="profile.png" // Replace with your image path
              alt="User Avatar"
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={handleMenuOpen} // Open menu on click
            />
            <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
              Syed
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 2 }}>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <Button sx={{ color: "white" }}>{item.name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>

      {/* Dropdown Menu for Image Button */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={handleMenuClose}>Primary</MenuItem>
        <MenuItem onClick={handleMenuClose}>Secondary</MenuItem>
        <MenuItem onClick={handleMenuClose}>Transparent</MenuItem>
        <MenuItem onClick={handleMenuClose}>Inherit</MenuItem>
      </Menu>
    </Box>
  );
}
