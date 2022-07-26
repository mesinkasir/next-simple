import Head from 'next/head';
import Nav from './widget/nav';
import Footer from './widget/footer';
import data from './data/home.json';
export default function Home() {
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
      <div class="container">
        <Nav />
        <div class="row mt-5">
          <main class="col-md-8 offset-md-2 mt-5">
            <section>
              <h1>
                <strong>
                  <a href="/">{data.title}</a>
                </strong>
              </h1>
              <h2>
                <strong>{data.desc}</strong>
              </h2>
              <p>{data.content}</p>
              <p>{data.text}</p>
              <h3>
                <strong>
                  <a href="/">{data.title1}</a>
                </strong>
              </h3>
              <p>{data.text1}</p>
              <p>{data.text1a}</p>
              <h3>
                <strong>
                  <a href="/">{data.title2}</a>
                </strong>
              </h3>
              <p>{data.text2}</p>
              <h3>
                <strong>
                  <a href="/">{data.title3}</a>
                </strong>
              </h3>
              <p>{data.text3}</p>
              <h3>
                <strong>
                  <a href="/">{data.title4}</a>
                </strong>
              </h3>
              <p>{data.text4}</p>
              <h3>
                <strong>
                  <a href="/">{data.title5}</a>
                </strong>
              </h3>
              <p>{data.text5}</p>
              <h3>
                <strong>
                  <a href="/">{data.title6}</a>
                </strong>
              </h3>
              <p>{data.text6}</p>
              <h3>
                <strong>
                  <a href="/">{data.title7}</a>
                </strong>
              </h3>
              <p>{data.text7}</p>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
