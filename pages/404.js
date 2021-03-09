import Head from 'next/head';
import Navbar from '~/../../comps/Navbar';

function ErrorPage() {
  return (
    <div className="text-center ">
      <Head>
        <title>Gojek | 404 not found</title>
      </Head>
      <Navbar whiteNav />
      <div className="errorPage">
        <img src="./img/404.png" className="img-fluid" />
      </div>
    </div>
  );
}

export default ErrorPage;
