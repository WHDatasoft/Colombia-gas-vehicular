import '../styles/globals.css'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

// facebook pixel
import * as fbq from '../lib/fpixel'

// google analitics
import * as ga from '../lib/ga'


function MyApp({ Component, pageProps }) {

    const router = useRouter()

    useEffect(() => {

        // This pageview only triggers the first time (it's important for Pixel to have real information)
        fbq.pageview()

        const handleRouteChange = (url) => {
            fbq.pageview(url)
            ga.pageview(url)
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <>
            {/* Global Site Code Pixel - Facebook Pixel */}
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
                }}
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
