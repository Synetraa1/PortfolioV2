import React, { useState } from 'react';
import { Box, Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        setVisible(scrolled > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: '32px',
                right: '32px',
                zIndex: 1000,
            }}
        >
            <Zoom in={visible}>
                <Fab
                    color="error"
                    size="medium"
                    aria-label="scroll back to top"
                    onClick={scrollToTop}
                    sx={{
                        backgroundColor: '#ff0000',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#b71c1c',
                        }
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Zoom>
        </Box>
    );
};

export default ScrollToTop;