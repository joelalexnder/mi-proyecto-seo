const BASE_URL = "https://mi-proyecto-seo-xi.vercel.app";

export default async function handler(req, res) {
    const posts = await fetch(`${BASE_URL}/api/posts`).then((res) => res.json());
    const staticPages = ["/", "/blog", "/contacto"];
    const dynamicPages = posts.map((post) => `/blog/${post.slug}`);

    const allPages = [...staticPages, ...dynamicPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPages
        .map((url) => {
            return `<url><loc>${BASE_URL}${url}</loc></url>`;
        })
        .join("")}
    </urlset>`;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
}

