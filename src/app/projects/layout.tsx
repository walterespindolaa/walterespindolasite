import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sistemas',
    description: 'Os SaaS que Walter Espindola construiu do zero, com IA.',
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
