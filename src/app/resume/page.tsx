import { redirect } from 'next/navigation';

// Não existe currículo pra baixar. Quem quiser falar comigo vai pro contato.
export default function ResumePage() {
    redirect('/contact');
}
