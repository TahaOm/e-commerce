import React, { useContext } from 'react';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';
import { Container } from '@mui/material';
import useStyles from '../utils/styles';

export default function Layout({ title, children }) {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>{title ? `${title}` : 'undefined'}</title>
            </Head>
            <Header />
            <Container className={classes.main} >
                {children}
            </Container>
            <Footer />
        </>
    )
}
