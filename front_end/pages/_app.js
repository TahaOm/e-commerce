import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import '../styles/globals.scss';
import '../styles/globals.css'
// import

function MyApp({ Component, pageProps }) {
  // UIkit.use(Icons);
  React.useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js');
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp