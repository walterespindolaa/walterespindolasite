import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Conquistas',
    description: 'Números, marcos e reconhecimentos de Walter Espindola.',
};

export default function AchievementsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
