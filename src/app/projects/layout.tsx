import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sistemas',
    description: 'Os sistemas que Walter Espindola construiu do zero.',
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
