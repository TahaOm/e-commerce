import React, { useContext, useEffect, useState } from 'react';
import { AppBar, IconButton, Typography, Toolbar, Link, Switch, useTheme } from '@mui/material';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import ColorModeContext from "../utils/ColorModeContext";

export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const { darkMode, setDarkMode } = useContext(ColorModeContext);

    return (
        <nav>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <NextLink href='/' passHref>
                        <Link underline="hover">
                            <Typography className={classes.brand}>LOGO</Typography>
                        </Link>
                    </NextLink>
                    <Typography component="div" sx={{ flexGrow: 1 }} />
                    {/* <Switch /> */}
                    <IconButton sx={{ ml: 1 }} onClick={() => setDarkMode(!darkMode)} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </nav>
    )
}