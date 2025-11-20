import Head from "next/head";

export default function Blog() {
    return (
        <>
        <Head>
            <title>Blog | Artículos y Tutoriales</title>
            <meta name="description" content="Lee artículos sobre SEO, Next.js y optimización web." />
            <meta property="og:title" content="Blog - Tutoriales de Desarrollo" />
            <meta property="og:description" content="Contenido actualizado sobre desarrollo y rendimiento." />
            <meta property="og:image" content="/images/seo-image.png" />
        </Head>

        <h1>Blog</h1>
        </>
    );
}
