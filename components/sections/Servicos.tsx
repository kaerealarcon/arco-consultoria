import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ClientConfig } from '@/data/client'

interface ServicosProps {
  data: ClientConfig['servicos']
}

export function Servicos({ data }: ServicosProps) {
  return (
    <section id="servicos" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho da seção */}
        <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-accent mb-5">
            {data.badge}
          </span>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-[-0.025em] text-white mb-4">
            {data.headline}
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">{data.description}</p>
        </AnimatedSection>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <article className="group h-full flex flex-col p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                {/* Número do serviço */}
                <div
                  aria-hidden="true"
                  className="w-9 h-9 mb-6 rounded-lg flex items-center justify-center bg-accent/10 group-hover:bg-accent/15 transition-colors"
                >
                  <span className="text-xs font-mono font-semibold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-lg mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                {/* Lista de entregáveis */}
                <ul className="space-y-2" role="list" aria-label={`Entregáveis de ${item.title}`}>
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-500">
                      <svg
                        className="w-4 h-4 text-accent shrink-0 mt-0.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
