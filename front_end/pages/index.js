import * as React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layouts';
import useStyles from '../utils/styles';

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Layout>
        <main className={classes.main}>
          <h1>Welcome to My store page!!</h1>
        </main>
      </Layout>
      <Footer />
    </>

  )
}
