import FaqSection from '@/components/sections/faq_section/FaqSection'
import GeneratorSection from "@/components/sections/generator_section/GeneratorSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 max-lg:pt-10 lg:px-24">
      <GeneratorSection />
      <FaqSection />
    </main>
  );
}
