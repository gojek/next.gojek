import Document, { Html, Head, Main, NextScript } from 'next/document';
import favicon from '~/../../static/favicon.png';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const name = 'Gojek';
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: ` MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmddyyso++//////++++osyhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmhyo+///////+++oooooo+++///////+sydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMNdyo+////+osyhdmNNNNNNMMMNNNNNmdhyo+////++ydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMmhs+////oshmNNMMMMMMMMMMMMMMMMMMMMMMMMNNdyo+///+sdNMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMy+///oydNNMMMMMMMMMNNmmdddddddmmmNMMMMMMMMMMNdy+///+yMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMNyshmNMMMMMMMMmdhso++///////////+++sydmNMMMMMMMNmy++sMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmds++//+osyhdmmmmmmmmdhyoo+//+ohmMMMMMMMNNMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMmyo//+oydmNMMMMMMMMMMMMMMMMMNNmyo+//oymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMd+/oydNMMMMMMMMMMMNNNNNNMMMMMMMMMMNds+//yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMmmMMMMMMMMMNmhysoooooooosydmNMMMMMMMNhhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmho++osyddmmmmdhys++oymNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmo+oydNMMMMMMMMMMMMMMmho/+hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNdmMMMMMMMMMMMMMMMMMMMMMmyhMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmysssydMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMs///////oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMh/////////sMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMh/////////yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMy+////////yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMy//////shmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMs////////+yNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMs////////+///ohMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMs////////dMdy+///ymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMs////////hMMMMMNdyo++yhdmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMs////////yMMMMMMMMMMMNdh//dMMMNmdNMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMd/////////hMMMNmdhyysoooo//oso+///yMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMNdhhhhhhhho/////////ys+////////////////////yMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMNo//////////////////////////////////////////yMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMs////////////////////////////////////////ohhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMmhyo/////////////////////////////////////oy///dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMdo+//////////////////////////////////////+hNMh///dNmmddmmNMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMmo/////////////////////////////////////hmmmNMMMMh///+//////+oymMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMy///////oydmmy//+///////////////////////mMMMMMMMh+////+yyyys+///odMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMNo/////smMMMNN+/+Nms/////////////////////NMMMMMNo///so//dMMMMNms///sNMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMNNN////hMMMho++//yMMMy///////////////////:MMMMMMo///hMNo//sydNMMMd///sMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMmsso////ssso///////syhy///////////////////oMMMMMd///sMMN+/////+mMMMh///mMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMNNd///+mmm+///////oddh////sssssssssssssydNMMMMMh///hMMh///////yMMMd///dMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMM+///hMMmo/////omMMy///oMMMMMMMMMMMMmmmmmmmmMm///oMMNs+////oNMMMs///NMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMd////yNMMmdhdmMMms////mMMMMMMMMMMMMMMMMMMMMMMs///omMMmdddmMMMNs///yMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMd+////ohdmmmdyo////omMMMMMMMMMMNNNNNNNNNNNNMMy////sdNNNNNNds+///hMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMNh+/////////////ohMMMMMMMMNNNNNNNmmmmmmmmmNNMms+////++++////+smMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMmhso++/++oshmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNdyo+///++oydNMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
          If you're looking, we're hiring :) - work+source@go-jek.com`,
            }}
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.0/css/all.css"
            integrity="sha384-aOkxzJ5uQz7WBObEZcHvV5JvRW3TUc2rNPA7pe3AwnsUohiw1Vj2Rgx2KSOkF5+h"
            crossorigin="anonymous"
          />
          {/* Allow installing the app to the homescreen */}
          <meta name="application-name" content={name} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={name} />
          {/* <meta name="msapplication-config" content="/icons/icon-512x512.png" /> */}
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-tap-highlight" content="no" />
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-512x512.png" /> */}
          <link rel="shortcut icon" type="image/x-icon" href={favicon} />
          {/* Adding Manifest json */}
          <link rel="manifest" href="/manifest.json" />
          {/* Social media tags */}
          {/* <meta name="description" content={description} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={name} />
          <meta property="og:url" content={url} /> */}
          {/* <meta property="og:image" content="/icons/icon-152x152.png"></meta> */}
          {/* PWA primary color */}
          <meta name="theme-color" content={'#f7ce55'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
