import Head from 'next/head';
import Nav from './widget/nav';
import Footer from './widget/footer';
import data from './data/page.json';
function Demo() {
  return (
    <div>
      <Head>
        <meta content={data.gst} name="google-site-verification" />
        <title>{data.title}</title>
        <meta content={data.title} property="og:title" />
        <meta content={data.title} name="facebook:title" />
        <meta content={data.title} name="twitter:title" />
        <meta content={data.title} name="keywords" />
        <meta content={data.title} property="og:site_name" />
        <meta content={data.desc} name="description" />
        <meta content={data.desc} name="twitter:description" />
        <meta content={data.desc} name="facebook:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://twitter.com/hockeycomp"
          property="twitter:author"
        />
        <meta
          content="https://www.facebook.com/mesinkasircomplete"
          property="facebook:author"
        />
        <meta
          content="https://www.youtube.com/c/bakoelraksupermarketMesinKasir"
          property="youtube:chanel"
        />
        <meta content="@hockeycomp" name="twitter:site" />
        <meta
          content="https://github.githubassets.com/favicons/favicon.svg"
          name="facebook:image"
        />
        <meta
          content="https://github.githubassets.com/favicons/favicon.svg"
          name="twitter:image"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://github.githubassets.com/favicons/favicon.svg"
        />
        <meta content="Mesin Kasir" property="og:author" />
        <meta content="website" property="og:type" />
        <meta content="index, follow" name="robots" />
      </Head>
      <div className="container">
        <Nav />
        <div className="row mt-5">
          <main className="col-md-8 offset-md-2 mt-5">
            <section>
              <h1>
                <strong>
                  <a href="/">{data.title}</a>
                </strong>
              </h1>
              <h2>
                <a href="/demo">{data.content}</a>
              </h2>
              <h3>
                <a href="/demo">{data.pos}</a>
              </h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src={data.posvideo}
                  title={data.pos}
                  allowFullScreen
                ></iframe>
              </div>
              <h3>
                <a href="/demo">{data.android}</a>
              </h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src={data.androidvideo}
                  title={data.android}
                  allowFullScreen
                ></iframe>
              </div>
              <h3>
                <a href="/demo">{data.register}</a>
              </h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src={data.registervideo}
                  title={data.register}
                  allowFullScreen
                ></iframe>
              </div>
              <h3>
                <a href="/demo">{data.retail}</a>
              </h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src={data.retailvideo}
                  title={data.retail}
                  allowFullScreen
                ></iframe>
              </div>
              <h3>
                <a href="/demo">{data.resto}</a>
              </h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src={data.restovideo}
                  title={data.resto}
                  allowFullScreen
                ></iframe>
              </div>
              <h3>
                <a href="/demo">{data.bonus}</a>
              </h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src={data.bonusvideo}
                  title={data.bonus}
                  allowFullScreen
                ></iframe>
              </div>
              <h3>
                <a href="/demo">{data.barcode}</a>
              </h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src={data.barcodevideo}
                  title={data.barcode}
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Demo;
