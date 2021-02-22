import Head from 'next/head';
import { data } from './metaTagsData';

function PageMeta(props) {
  const image = props.img ?? '/img/og-img.jpg';
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta property={`description`} content={`${props.description}`} />
        <meta property="twitter:title" content={`${props.title}`} />
        <meta property={`twitter:card`} content={`${props.title}`} />
        <meta property={`twitter:site`} content="@gojektech" />
        <meta property={`twitter:image`} content={image} />
        <meta property="twitter:description" content={`${props.description}`} />
        <meta property="og:title" content={`${props.title}`} key="title" />
        <meta property="og:url" content="https://gojek.io" />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={`${props.description}`} />
        <meta property="og:type" content={'website'} />
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon " />
        <link rel="icon" href="/img/favicon.png" type="image/x-icon" />
      </Head>
    </div>
  );
}

export default PageMeta;
