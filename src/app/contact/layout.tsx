import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contato',
    description: 'Assessoria, sistemas ou mentoria: fale com Walter Espindola.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
