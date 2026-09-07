import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Trajetória',
    description: 'Empresário, construtor de sistemas e assessor de investimentos.',
};

export default function ExperienceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
