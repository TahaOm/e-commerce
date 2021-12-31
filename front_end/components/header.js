import * as React from 'react';
import { AppBar, IconButton, Typography, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from '../utils/styles';

export default function Header() {
    const classes = useStyles();
    return (
        <nav>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" color="inherit" component="div">
                        LOGO
                    </Typography>
                </Toolbar>
            </AppBar>
        </nav>
    )
}