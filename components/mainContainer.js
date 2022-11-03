
import Head from 'next/head';
import { useRouter } from 'next/router';
import {useState, useEffect} from "react";
import Header from "./header";
import Footer from "./footer";


export default function MainContainer(props){
    const [mounted, setMounted] = useState(false);

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    const {children, ...customMeta} = props;
    const router = useRouter();
    const meta = {
        title: 'Narciso Avalos | @coffe67Chicho – Developer, Entrepreneur, Creator, Freelance',
        description: `Backend developer, Frontend developer, Python, Django, DRF, API Rest, 
        JavaScript, React JS, Web3, Blockchain, Smart Contracts, Tailwind CSS, 
        Bootstrap, Postgresql, VPS Linode, EC2 AWS, S3 AWS, Cloudflare`,
        image: 'https://simplestcode.com/static/images/selfie.png',
        type: 'website',
        ...customMeta
    };
    return <>
        <Head>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index"/>
            <meta content={meta.description} name="description"/>
            <meta property="og:url" content={`https://simplestcode.com${router.asPath}`}/>
            <link rel="canonical" href={`https://simplestcode.com${router.asPath}`}/>
            <meta property="og:type" content={meta.type}/>
            <meta property="og:site_name" content="Narciso Avalos"/>
            <meta property="og:description" content={meta.description}/>
            <meta property="og:title" content={meta.title}/>
            <meta property="og:image" content={meta.image}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@coffe67Chicho"/>
            <meta name="twitter:title" content={meta.title}/>
            <meta name="twitter:description" content={meta.description}/>
            <meta name="twitter:image" content={meta.image}/>
            {meta.date && (
                <meta property="article:published_time" content={meta.date}/>
            )}
        </Head>
        <div className="bg-cultured w-full h-screen overflow-scroll">
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    </>
}