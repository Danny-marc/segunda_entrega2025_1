import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import './Header.css'

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#F29F05' }}>
            <Toolbar sx={{ justifyContent: 'center', flexDirection: 'column' }}>
                <Box
                    component="img"
                    src="https://www.pngarts.com/files/4/Dragon-Ball-Z-Logo-PNG-Image-Background.png"
                    alt="Logo"
                    sx={{ height: 130, maxWidth: '100%' }}
                />
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Orbitron, sans-serif',
                        color: '#1a181a',
                        mt: 1,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: { xs: 24, sm: 40 } // responsive font size
                    }}
                >
                    The Dragon Ball Z API
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;