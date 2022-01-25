import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react';
import Layout from '../../components/layouts';
import NextLink from 'next/link';
// import data from '../../utils/data';

function products({ data }) {

    return (
        <Layout title='Products'>
            <main>
                {/* {console.log(data)} */}
                <h1>Welcome to My store page!!</h1>
                <h2>Products</h2>
                <Grid container spacing={3}>
                    {data.map((product) => (
                        <Grid item xs={6} sm={4} md={3} key={product.description}>
                            <Card>
                                <NextLink key={data.id} href={`/product/details/${encodeURIComponent(product.slug)}`} passHref>
                                    <CardActionArea>
                                        <CardMedia component='img' title={product.description} image={product.product_image[0].image} />
                                        <CardContent>
                                            <Typography>
                                                {product.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </NextLink>
                                <CardActions>
                                    <Typography>${product.regular_price}</Typography>
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

export async function getStaticProps() {
    const res = await fetch("http://127.0.0.1:8000/api/list/")
    const data = await res.json()

    return {
        props: { data }
    }
}

export default products