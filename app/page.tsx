import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Sobre } from '@/components/sections/Sobre'
import { Servicos } from '@/components/sections/Servicos'
import { Depoimentos } from '@/components/sections/Depoimentos'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'
import { client } from '@/data/client'

export default function Home() {
  return (
    <>
      <Header
        company={client.company}
        nav={client.nav}
        ctaMessage={client.cta.whatsappMessage}
      />
      <main>
        <Hero data={client.hero} company={client.company} ctaMessage={client.cta.whatsappMessage} />
        <Sobre data={client.sobre} />
        <Servicos data={client.servicos} />
        <Depoimentos data={client.depoimentos} />
        <CTA data={client.cta} company={client.company} />
      </main>
      <Footer data={client.footer} company={client.company} nav={client.nav} />
    </>
  )
}
