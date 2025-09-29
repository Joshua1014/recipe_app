import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BookIcon from '@mui/icons-material/Book';
import {Link} from 'react-router-dom';



const Header = () => {
    return (
        <>
                <Box sx={{ flexGrow: 1, p: 0, m: 0 }}>
                    <AppBar position="sticky">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <BookIcon />
                            </IconButton>
                            <Typography variant="h6" component="div">
                                <Button color="inherit" component={Link} to="/">Hansensmith Cook Book</Button>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
        </>
    )
}

export default Header