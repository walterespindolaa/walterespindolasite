import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Competências',
    description: 'O que Walter Espindola usa pra cuidar de patrimônio e construir sistemas.',
};

export default function SkillsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
