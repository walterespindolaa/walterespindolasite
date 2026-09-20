// Todas as imagens do site, em um lugar só.
// Troque o arquivo em /public/img/... mantendo o nome, ou mude o caminho aqui.
// "min" = tamanho mínimo recomendado (px). Formato: WebP ou JPG, qualidade 85.

export const IMG = {
  // ABERTURA da home: imagem do monitor (poster, 16:9) + vídeo em loop (mp4, 16:9, ~5s, sem áudio).
  hero: { src: "/img/hero.webp", pos: "50% 50%" },
  heroVideo: "/img/hero.mp4",

  // Capítulo 01 (Zephyr), foto larga abaixo do texto. Panorâmica, 21:9 no desktop.
  // min 2400×1000. Pode ser você no escritório, reunião, ambiente.
  zephyr: { src: "/img/zephyr.webp", pos: "50% 40%" },

  // Capítulo 03 (Trajetória), foto vertical ao lado da lista. 4:5.
  // min 1200×1500. Retrato, olhando pra câmera ou de lado, fundo limpo.
  trajetoria: { src: "/img/trajetoria.webp", pos: "50% 20%" },

  // Telas dos sistemas (capítulo 02 + capas dos artigos). 16:10, min 1920×1200.
  // Print limpo da tela principal, sem barra do navegador.
  atlas: "/img/shots/atlas.webp",
  atlas1: "/img/shots/atlas1.webp",
  zephyrApp: "/img/shots/zephyr.webp",
  zephyrApp1: "/img/shots/zephyr1.webp",
  cria: "/img/shots/cria.webp",
  cria1: "/img/shots/cria1.webp",

  // Retratos verticais (capas dos artigos). 2:3, min 1333×2000.
  retrato1: "/img/retrato-1.webp",
  retrato2: "/img/retrato-2.webp",
  retrato3: "/img/retrato-3.webp",
  retrato4: "/img/retrato-4.webp",
  retrato5: "/img/retrato-5.webp",
  retrato6: "/img/retrato-6.webp",

  // Logo da navegação (branco, fundo transparente). PNG ou SVG, ~200px de largura.
  logo: "/img/logo-we2-white.png",
} as const;
