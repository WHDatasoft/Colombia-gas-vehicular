import Document, { Html, Head, Main, NextScript } from 'next/document'

const NEXT_PUBLIC_GOOGLE_ANALYTICS = 'G-FZN3FKWWPT'

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Colombia Gas Vehicula",
    "url": "https://www.colombiagasvehicular.co/",
    "sameAs": [
        "https://www.instagram.com/colombiagas_vehicular/?hl=es",
        "https://www.facebook.com/colombiagasvehicular.parati",
        "https://twitter.com/VehicularGas"
    ]
}
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="es-co">
                <Head>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
                    <link rel="alternate" href="https://www.colombiagasvehicular.co/es/" hreflang="es-co" />
                    <meta httpEquiv="content-language" content="es-co" />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}