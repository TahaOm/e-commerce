import React from 'react';
import Head from 'next/head';
import Container from '@mui/material/Container';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}
