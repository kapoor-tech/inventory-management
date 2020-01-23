import Head from 'next/head';
import Header from './Header';

const Layout = props => (
  <div>
    <Head><link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" /></Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;