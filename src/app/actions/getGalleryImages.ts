'use server';

export interface GalleryImage {
    src: string;
    filename: string;
}

// Lista estática (evita leitura de filesystem no build da Vercel).
const FILES = [
    '/img/walter-hero.webp',
    '/img/walter-historia.webp',
    '/img/walter-mood.webp',
    '/img/walter-alt.webp',
    '/img/shots/atlas.webp',
    '/img/shots/atlas1.webp',
    '/img/shots/zephyr.webp',
    '/img/shots/zephyr1.webp',
    '/img/shots/cria.webp',
    '/img/shots/cria1.webp',
    '/img/shots/cria2.webp',
];

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
    return FILES.map((src) => ({ src, filename: src.split('/').pop() || src }));
}
