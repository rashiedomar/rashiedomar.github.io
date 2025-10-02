import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

// Section links (scroll) + one external link (Articles)
const ARTICLES_URL = "https://simpleml.hashnode.dev/";
const NAV_SECTIONS: { label: string; id?: string; href?: string }[] = [
  { label: "Expertise", id: "expertise" },
  { label: "History", id: "history" },
  { label: "Projects", id: "projects" },
  { label: "Articles", href: ARTICLES_URL }, // external
  { label: "Contact", id: "contact" },
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (!navbar) return;
      setScrolled(window.scrollY > navbar.clientHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <p className="mobile-menu-top"><ListIcon />Menu</p>
      <Divider />
      <List>
        {NAV_SECTIONS.map((item) => (
          <ListItem key={item.label} disablePadding>
            {item.href ? (
              <ListItemButton component="a" href={item.href} target="_blank" rel="noreferrer" sx={{ textAlign: "center" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ) : (
              <ListItemButton sx={{ textAlign: "center" }} onClick={() => item.id && scrollToSection(item.id)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}>
        <Toolbar className="navigation-bar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {mode === "dark" ? (
            <LightModeIcon role="button" aria-label="Switch to light mode" onClick={() => modeChange()} />
          ) : (
            <DarkModeIcon role="button" aria-label="Switch to dark mode" onClick={() => modeChange()} />
          )}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {NAV_SECTIONS.map((item) =>
              item.href ? (
                <Button key={item.label} component="a" href={item.href} target="_blank" rel="noreferrer" sx={{ color: "#fff" }}>
                  {item.label}
                </Button>
              ) : (
                <Button key={item.label} onClick={() => item.id && scrollToSection(item.id)} sx={{ color: "#fff" }}>
                  {item.label}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
