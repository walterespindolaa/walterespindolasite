export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    category: string;
    tags: string[];
    author: { name: string; avatar: string };
    readTime: string;
}
