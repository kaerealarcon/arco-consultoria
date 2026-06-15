# Site Institucional — Template

Template de site institucional em Next.js 14 + Tailwind CSS.  
Design dark, editorial, animações com Framer Motion. Pronto para deploy na Vercel.

---

## Trocar para um novo cliente

**Edite apenas um arquivo:** `data/client.ts`

Todos os textos, cores, links e configurações ficam ali. Nenhum componente precisa ser tocado.

### 1. Dados da empresa

```ts
company: {
  name: "Nome do Cliente",
  whatsapp: "5511999999999",   // código do país + DDD + número, sem espaços
  email: "contato@cliente.com.br",
  website: "https://cliente.com.br",
  foundedYear: 2019,
  locale: "pt-BR",
},
```

### 2. SEO

```ts
seo: {
  title: "Cliente — O que o cliente faz",   // máx 60 chars
  description: "Meta description para o Google.",  // máx 160 chars
  keywords: ["palavra-chave 1", "palavra-chave 2"],
  ogImage: "/og-image.png",       // adicione o arquivo em /public/
  twitterHandle: "@cliente",
},
```

### 3. Cor de destaque

```ts
theme: {
  accentRgb: "99 102 241",   // valores RGB separados por espaço (sem vírgula)
},
```

Referência de cores prontas:

| Cor             | Valor RGB         |
|-----------------|-------------------|
| Indigo 500      | `99 102 241`      |
| Violet 500      | `139 92 246`      |
| Sky 500         | `14 165 233`      |
| Emerald 500     | `16 185 129`      |
| Rose 500        | `244 63 94`       |
| Amber 500       | `245 158 11`      |

Para qualquer cor hex → RGB: [color-name.com](https://www.color-name.com/hex-to-rgb.color)

### 4. Conteúdo de cada seção

Cada seção tem sua entrada no arquivo. Os campos são auto-explicativos — veja os comentários inline em `data/client.ts`.

**Para ocultar a barra de stats do Hero:**
```ts
hero: {
  stats: [],   // array vazio remove o elemento
}
```

**Para remover redes sociais ou links legais no rodapé:**
```ts
footer: {
  social: [],
  legalLinks: [],
}
```

---

## Imagens necessárias

Adicione em `/public/`:

| Arquivo         | Dimensões    | Onde é usado              |
|-----------------|--------------|---------------------------|
| `og-image.png`  | 1200 × 630px | Open Graph (redes sociais) |
| `favicon.ico`   | 32 × 32px    | Aba do browser            |

---

## Instalação e desenvolvimento

```bash
# Clone ou copie a pasta do template
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

---

## Deploy na Vercel

1. Faça push do projeto para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com) → "Add New Project"
3. Importe o repositório — a Vercel detecta Next.js automaticamente
4. Clique em "Deploy"

> Não é necessário `vercel.json`. As configurações padrão da Vercel funcionam.

Após o deploy, atualize `company.website` em `data/client.ts` com a URL real e faça um novo deploy para que o sitemap e as meta tags fiquem corretos.

---

## Estrutura do projeto

```
├── app/
│   ├── globals.css         # Reset, CSS variables da cor de destaque
│   ├── layout.tsx          # Metadata, fonte Inter, injeção do --accent
│   ├── page.tsx            # Monta as seções em ordem
│   ├── sitemap.ts          # Sitemap automático (/sitemap.xml)
│   └── robots.ts           # robots.txt automático
│
├── components/
│   ├── ui/
│   │   └── AnimatedSection.tsx   # Wrapper de animação (fade + slide)
│   └── sections/
│       ├── Header.tsx      # Navegação fixa com CTA
│       ├── Hero.tsx        # Seção de abertura com stats
│       ├── Sobre.tsx       # Missão, visão, valores
│       ├── Servicos.tsx    # Cards de serviços com entregáveis
│       ├── Depoimentos.tsx # Depoimentos com avaliação em estrelas
│       ├── CTA.tsx         # Call-to-action com link WhatsApp
│       └── Footer.tsx      # Rodapé com navegação e redes sociais
│
├── data/
│   └── client.ts           # ← EDITE APENAS ESTE ARQUIVO
│
└── public/
    ├── og-image.png        # Adicione manualmente (1200×630px)
    └── favicon.ico         # Adicione manualmente
```

---

## Checklist para novo cliente

- [ ] Preencher todos os campos em `data/client.ts`
- [ ] Adicionar `public/og-image.png` (1200×630px)
- [ ] Adicionar `public/favicon.ico`
- [ ] Criar repositório no GitHub
- [ ] Fazer deploy na Vercel
- [ ] Atualizar `company.website` com a URL real do deploy
- [ ] Fazer novo deploy (para atualizar sitemap e canonical)
- [ ] Testar no [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Stack

- **Next.js 14** — App Router, Server Components
- **Tailwind CSS 3** — utilitários, sem CSS customizado
- **Framer Motion 11** — animações de entrada (fade + slide)
- **Inter** — tipografia via `next/font/google` (zero layout shift)
