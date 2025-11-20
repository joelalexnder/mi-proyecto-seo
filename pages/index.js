import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
    <Head>
        <title> Inicio | Mi Proyecto </title>
        <meta name="description" content="Pagina principal optimizada con Next.js y SEO avazando."></meta>
        <meta property="og:description" content="Aprende a optimizar tu sitio con meta tags y Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
    </Head>

    <h1>Home</h1>
    </>
    
  );
}
