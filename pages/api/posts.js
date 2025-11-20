export default function handler(req, res) {
    const posts = [
        { id: 1, slug: "primer-post" },
        { id: 2, slug: "guia-nextjs" },
        { id: 3, slug: "optimizacion-seo" }
    ];

    res.status(200).json(posts);
}
