import Head from 'next/head';
import Nav from './widget/nav';
import Footer from './widget/footer';
import Contact from './widget/contact';
import data from './data/page.json';
let title = 'about';
function Download() {
  return (
    <div>
      <Head>
        <meta content={data.gst} name="google-site-verification" />
        <title>{data.download}</title>
        <meta content={data.download} property="og:title" />
        <meta content={data.download} name="facebook:title" />
        <meta content={data.download} name="twitter:title" />
        <meta content={data.download} name="keywords" />
        <meta content={data.download} property="og:site_name" />
        <meta content={data.downloaddesc} name="description" />
        <meta content={data.downloaddesc} name="twitter:description" />
        <meta content={data.downloaddesc} name="facebook:description" />
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
                <a href={data.downloadurl}>{data.download}</a>
              </h1>
              <h3>{data.downloaddesc}</h3>
              <div className="text-center p-3">
                <embed src={data.downloadlink} width="440px" height="800px" />
              </div>
              <div className="p-3 text-center">
                <a
                  href={data.downloadlink}
                  className="btn btn-dark btn-lg text-light"
                >
                  {data.downloadbtn}
                </a>
              </div>
            </section>
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Download;
