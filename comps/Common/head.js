import Head from 'next/head';
import { data } from './metaTagsData';

function PageMeta(props) {
  return (
    <div>
      <Head>
        <title>{`norm title ${props.title}`}</title>
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta property={`description`} content={`normal comp${props.description}`} />
        <meta property="twitter:title" content={`twi title${props.title}`} />
        <meta property={`twitter:card`} content={`${props.title}`} />
        <meta property={`twitter:site`} content="@gojektech" />
        <meta property={`twitter:image`} content="/img/og-img.jpg" />
        <meta property="twitter:description" content={`twi desc ${props.description}`} />
        <meta property="og:title" content={`of title ${props.title}`} key="title" />
        <meta property="og:url" content="https://gojek.io" />
        <meta property="og:image" content="/img/og-img.jpg" />
        <meta property="og:description" content={`og comp${props.description}`} />
        <meta property="og:type" content={'website'} />
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon " />
        <link rel="icon" href="/img/favicon.png" type="image/x-icon" />
      </Head>
    </div>
  );
}

export default PageMeta;
