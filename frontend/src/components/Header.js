import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import './Header.css';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar className="header-toolbar">
                <IconButton edge="start" color="inherit" aria-label="person">
                    <PersonIcon />
                </IconButton>
                <Typography variant="h6" className="header-title">
                    Mi aplicación de citas
                </Typography>
                <IconButton edge="end" color="inherit" aria-label="chat">
                    <ChatIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;