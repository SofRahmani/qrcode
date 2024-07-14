import Container from '@/components/sections/Container'
import GeneratorSection from '@/components/sections/generator_section/GeneratorSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <GeneratorSection />
    </main>
  );
}
