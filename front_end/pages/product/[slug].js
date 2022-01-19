import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Image from 'next/image'
import Layout from '../../components/layouts';
import { Button, Card, Grid, List, ListItem, Paper, Typography } from '@mui/material';
import NextLink from 'next/link';

export default function Productdetails() {
    const router = useRouter();
    const { slug } = router.query;
    const product = data.Products.find(a => a.slug === slug);

    if (!product) {
        return <Layout><h1>product not found</h1></Layout>
    }
    return (
        <Layout title={product.name}>
            <div elevation={0}>
                <NextLink href={`/product/list`} passHref>
                    <Button>
                        <Typography>Back to products</Typography>
                    </Button>
                </NextLink>
            </div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={4}>
                    <Image
                        alt={product.name}
                        src={product.img}
                        width={200}
                        height={300}
                        layout='responsive' />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <List>
                        <ListItem><h1>Details: </h1></ListItem>
                        <ListItem><Typography>Name: {product.name}</Typography></ListItem>
                        <ListItem><Typography>Category: {product.category}</Typography></ListItem>
                        <ListItem><Typography>Brand: {product.brand}</Typography></ListItem>
                        <ListItem><Typography>Rating: {product.rating} Starts ({product.numReview} reviews)</Typography></ListItem>
                        <ListItem><Typography>Description: {product.description}</Typography></ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Price</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>${product.price}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Status</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button fullWidth variant='contained' color='primary'>Add to cart</Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}
