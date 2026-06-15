import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ClientConfig } from '@/data/client'

interface HeroProps {
  data: ClientConfig['hero']
  company: ClientConfig['company']
  ctaMessage: string
}

export function Hero({ data, company, ctaMessage }: HeroProps) {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(ctaMessage)}`

  return (
    <section
      id="hero"
      aria-label={`${company.name} — ${data.headline} ${data.subheadline}`}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-24 overflow-hidden"
    >
      {/* Grid de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* Glow da cor de destaque */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[480px] w-[700px] rounded-full blur-3xl opacity-[0.12] bg-accent"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <AnimatedSection delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
            {data.badge}
          </div>
        </AnimatedSection>

        {/* Título principal */}
        <AnimatedSection delay={0.08}>
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-semibold tracking-[-0.03em] leading-[1.06] mb-6">
            <span className="text-white">{data.headline}</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgb(var(--accent)) 0%, rgba(255,255,255,0.55) 100%)',
              }}
            >
              {data.subheadline}
            </span>
          </h1>
        </AnimatedSection>

        {/* Descrição */}
        <AnimatedSection delay={0.16}>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            {data.description}
          </p>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection delay={0.22}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-accent hover:opacity-90 active:scale-[0.97] transition-all duration-150 min-w-[200px]"
              aria-label={`${data.cta.primary.label} — abre o WhatsApp`}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {data.cta.primary.label}
            </a>

            <Link
              href={data.cta.secondary.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-zinc-300 border border-white/10 bg-white/5 hover:bg-white/10 active:scale-[0.97] transition-all duration-150 min-w-[200px]"
            >
              {data.cta.secondary.label}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* Stats */}
        {data.stats.length > 0 && (
          <AnimatedSection delay={0.3}>
            <dl className="mt-20 pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
              {data.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dt className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                    {stat.value}
                  </dt>
                  <dd className="text-sm text-zinc-500 mt-1">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
