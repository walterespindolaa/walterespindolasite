'use server';

import fs from 'fs';
import path from 'path';

export interface GalleryImage {
    src: string;
    filename: string;
}

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
    const publicDir = path.join(process.cwd(), 'public');
    // Fotos do Walter (/img/walter-*.webp) e telas dos sistemas (/img/shots)
    const sources: { dir: string; base: string; filter?: (f: string) => boolean }[] = [
        { dir: path.join(publicDir, 'img'), base: '/img', filter: (f) => f.startsWith('walter-') },
        { dir: path.join(publicDir, 'img', 'shots'), base: '/img/shots' },
    ];

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const images: GalleryImage[] = [];

    try {
        for (const source of sources) {
            if (!fs.existsSync(source.dir)) continue;
            const files = fs.readdirSync(source.dir);
            files
                .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
                .filter(file => (source.filter ? source.filter(file) : true))
                .forEach(file => {
                    images.push({ src: `${source.base}/${file}`, filename: file });
                });
        }
        return images;
    } catch (error) {
        console.error('Erro ao ler as imagens da galeria:', error);
        return [];
    }
}
