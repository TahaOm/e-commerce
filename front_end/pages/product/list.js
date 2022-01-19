import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react';
import Layout from '../../components/layouts';
import NextLink from 'next/link';
import data from '../../utils/data';

export default function products() {

    return (
        <Layout title='Products'>
            <main>
                <h1>Welcome to My store page!!</h1>
                <h2>Products</h2>
                <Grid container spacing={3}>
                    {data.Products.map((product) => (
                        <Grid item xs={6} sm={4} md={3} key={product.name}>
                            <Card>
                                <NextLink href={`/product/${product.slug}`} passHref>
                                    <CardActionArea>
                                        <CardMedia component='img' title={product.name} image={product.img} />
                                        <CardContent>
                                            <Typography>
                                                {product.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </NextLink>
                                <CardActions>
                                    <Typography>${product.price}</Typography>
                                    <Button size='small' color='primary' >Add to cart</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </main>
        </Layout>
    )
}
