import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="xdream-tech" content="xdream-tech" />
          <meta name="Description" content="xdream-tech" />
          <meta name="theme-color" content="#001338" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <title>xdream-tech</title>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`{
          .loader {
            position: absolute;
            top: calc(50% - 4em);
            left: calc(50% - 4em);
            width: 6em;
            height: 6em;
            border: 1.1em solid rgba(0, 0, 0, 0.2);
            border-left: 1.1em solid rgb(100, 146, 237);
            border-radius: 50%;
            animation: load8 1.1s infinite linear;
            transition: opacity 0.3s;
          }

          .loader--hide {
            opacity: 0;
            pointer-events: none;
          }

          @keyframes load8 {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }
          }`}
        </style>
      </Html>
    )
  }
}

export default MyDocument