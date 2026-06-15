import Link from 'next/link'
import { ClientConfig } from '@/data/client'

interface FooterProps {
  data: ClientConfig['footer']
  company: ClientConfig['company']
  nav: ClientConfig['nav']
}

export function Footer({ data, company, nav }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const copyrightRange =
    company.foundedYear === currentYear
      ? String(currentYear)
      : `${company.foundedYear}–${currentYear}`

  return (
    <footer
      role="contentinfo"
      className="border-t border-white/10 px-6 py-14"
    >
      <div className="max-w-6xl mx-auto">
        {/* Linha principal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">
          {/* Marca + descrição */}
          <div className="max-w-xs">
            <p className="text-white font-semibold text-base tracking-tight mb-2">
              {company.name}
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">{data.description}</p>
          </div>

          {/* Navegação */}
          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-3" role="list">
              {nav.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes sociais */}
          {data.social.length > 0 && (
            <nav aria-label="Redes sociais">
              <ul className="flex gap-5" role="list">
                {data.social.map((item) => (
                  <li key={item.platform}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-500 hover:text-white transition-colors duration-150"
                      aria-label={`${company.name} no ${item.platform}`}
                    >
                      {item.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {/* Linha inferior — copyright + legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {copyrightRange} {company.name}. Todos os direitos reservados.
          </p>

          {data.legalLinks.length > 0 && (
            <nav aria-label="Links legais">
              <ul className="flex gap-5" role="list">
                {data.legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </footer>
  )
}
