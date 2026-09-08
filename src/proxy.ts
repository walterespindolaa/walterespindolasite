import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// O template redirecionava celulares pra outra URL. Aqui não faz nada.
export function proxy(_request: NextRequest) {
    return NextResponse.next();
}

export const config = {
    matcher: ['/nunca-executa-nada'],
};
