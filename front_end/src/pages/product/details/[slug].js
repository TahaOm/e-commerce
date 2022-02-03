import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Layout from '../../../components/layouts';
import { Button, Card, CircularProgress, Grid, List, ListItem, Typography } from '@mui/material';
import NextLink from 'next/link';

export const getStaticPaths = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/list/")
    const data = await res.json()

    const paths = data.map(product => {
        return {
            params: { slug: product.slug.toString() }
        }
    })
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const res = await fetch(`http://127.0.0.1:8000/api/${context.params.slug}`)
    const data = await res.json()

    if (!data.slug) {
        return {
            notFound: true,
        }
    }
    else {
        return {
            props: { data }
        }
    }
}

const Productdetails = ({ data }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <CircularProgress />
    }
    return (
        <Layout title={data.title}>
            <div elevation={0}>
                <NextLink href={`/product/list`} passHref>
                    <Button>
                        <Typography>Back to products</Typography>
                    </Button>
                </NextLink>
            </div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={4}>
                    {data.product_image.map((c) => (
                        <div key={c.id}>
                            <Image
                                alt={data.product_image[0].alt_text}
                                src={data.product_image[0].image}
                                width={200}
                                height={250}
                                layout='responsive' />
                        </div>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <List>
                        <ListItem><h1>Details: </h1></ListItem>
                        <ListItem><Typography>Name: {data.description}</Typography></ListItem>
                        <ListItem><Typography>Category: {data.category}</Typography></ListItem>
                        {/* <ListItem><Typography>Brand: {data.brand}</Typography></ListItem> */}
                        {/* <ListItem><Typography>Rating: {data.rating} Starts ({data.numReview} reviews)</Typography></ListItem> */}
                        {/* <ListItem><Typography>Description: {data.description}</Typography></ListItem> */}
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
                                        <Typography>${data.regular_price}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Status</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {/* <Typography>{data.countInStock > 0 ? 'In stock' : 'Unavailable'}</Typography> */}
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
    );
}

export default Productdetails