import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar className={styles.toolbar}>
        <IconButton edge="start" className={styles.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" className={styles.title}>
          TechGiants
        </Typography>
        <Box className={styles.iconGroup}>
          <IconButton className={styles.icon}>
            <SearchIcon />
          </IconButton>
          <IconButton className={styles.icon}>
            <NotificationsIcon />
          </IconButton>
          <IconButton className={styles.icon}>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton className={styles.icon}>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
