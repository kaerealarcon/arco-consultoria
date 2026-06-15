import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { ClientConfig } from '@/data/client'

interface DepoimentosProps {
  data: ClientConfig['depoimentos']
}

function StarRating({ count }: { count: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`Avaliação: ${count} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          style={{ color: i < count ? 'rgb(var(--accent))' : 'rgb(63 63 70)' }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Depoimentos({ data }: DepoimentosProps) {
  return (
    <section id="depoimentos" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-accent mb-5">
            {data.badge}
          </span>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-[-0.025em] text-white">
            {data.headline}
          </h2>
        </AnimatedSection>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.items.map((item, i) => (
            <AnimatedSection key={`${item.name}-${i}`} delay={i * 0.08}>
              <figure className="h-full flex flex-col p-8 rounded-xl border border-white/10 bg-white/[0.02]">
                <StarRating count={item.rating} />

                <blockquote className="mt-5 flex-1">
                  <p className="text-zinc-300 text-sm leading-[1.9]">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </blockquote>

                <figcaption className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  {/* Avatar com inicial */}
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0 bg-accent/20"
                  >
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-medium text-white block">
                      {item.name}
                    </cite>
                    <span className="text-xs text-zinc-500">{item.role}</span>
                  </div>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
