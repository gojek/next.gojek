import Head from 'next/head';

function PageMeta(props) {
  return (
    <div>
      <Head>
        <title>Gojek: On-Demand Services for Transport, Payment, Food Delivery, etc.</title>
        <meta
          property="og:title"
          content="Gojek: On-Demand Services for Transport, Payment, Food Delivery, etc."
          key="title"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta
          property={`description`}
          content="Gojek is a Super App. It's one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia's first and fastest growing unicorn building an on-demand empire."
        />
        <meta
          property="twitter:title"
          content="Gojek: On-Demand Services for Transport, Payment, Food Delivery, etc."
        />
        <meta
          property={`twitter:card`}
          content="Gojek: On-Demand Services for Transport, Payment, Food Delivery, etc."
        />
        <meta property={`twitter:site`} content="@gojektech" />
        <meta property={`twitter:image`} content="/img/og-img.jpg" />
        <meta
          property="twitter:description"
          content="Gojek is a Super App. It's one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia's first and fastest growing unicorn building an on-demand empire."
        />
        <meta
          property="og:title"
          content="Gojek: On-Demand Services for Transport, Payment, Food Delivery, etc."
        />
        <meta property="og:url" content="https://gojek.io" />
        <meta property="og:image" content="/img/og-img.jpg" />
        <meta
          property="og:description"
          content="Gojek is a Super App. It's one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia's first and fastest growing unicorn building an on-demand empire."
        />
        <meta property="og:type" content={'website'} />
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon " />
        <link rel="icon" href="/img/favicon.png" type="image/x-icon" />
      </Head>
    </div>
  );
}

export default PageMeta;
