import React, { useState, useEffect } from "react";
import { Box, ButtonGroup, Button, Typography } from '@mui/material';
import content from './Typography.json';
import { scroller } from 'react-scroll';

const Navbar = () => {
    const [navTransparent, setNavTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setNavTransparent(window.scrollY < 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (target) => {
        scroller.scrollTo(target, {
            duration: 700,
            smooth: 'easeInOutQuint',
            offset: -80,
            spy: true,
            exact: true,
        });
    };

    const buttonStyle = {
        color: '#fff',
        border: '1px solid #ff0000',
        '&:hover': {
            backgroundColor: '#b71c1c',
            border: '1px solid #fff',
        }
    };

    return (
        <Box
            component="nav"
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: navTransparent ? 'transparent' : '#000',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
                boxSizing: 'border-box',
                transition: 'background-color 0.2s ease'
            }}
        >
            <Box>
                <Typography sx={{ fontSize: '18px', color: '#fff' }}>{content.Navbar.portfolio}</Typography>
            </Box>
            <ButtonGroup
                color="error"
                orientation="horizontal"
                size="large"
                sx={{ gap: '2px' }}
            >
                <Button sx={buttonStyle}><Typography>{content.Navbar.cv}</Typography></Button>
                <Button onClick={() => handleScrollTo("Projects1")} sx={buttonStyle}>
                    <Typography>{content.Navbar.projects}</Typography>
                </Button>
                <Button onClick={() => handleScrollTo("Resume")} sx={buttonStyle}>
                    <Typography>{content.Navbar.resume}</Typography>
                </Button>
            </ButtonGroup>
        </Box>
    );
};

export default Navbar;