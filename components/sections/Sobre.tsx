import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ClientConfig } from '@/data/client'

interface SobreProps {
  data: ClientConfig['sobre']
}

export function Sobre({ data }: SobreProps) {
  return (
    <section id="sobre" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Coluna esquerda — texto */}
          <div>
            <AnimatedSection>
              <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-accent mb-5">
                {data.badge}
              </span>
              <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-[-0.025em] leading-tight text-white mb-8">
                {data.headline}
              </h2>
            </AnimatedSection>

            <div className="space-y-5">
              {data.paragraphs.map((paragraph, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <p className="text-zinc-400 text-base leading-[1.8]">{paragraph}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Coluna direita — valores */}
          <div className="space-y-3 lg:mt-16">
            {data.values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <article className="group p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300">
                  <h3 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="inline-block w-1 h-4 rounded-full bg-accent opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
