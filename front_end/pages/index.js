import * as React from 'react';
import Layout from '../components/layouts';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import data from '../utils/data';
import NextLink from 'next/link';

export default function Home() {

  return (
    <Layout title='index'>
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
