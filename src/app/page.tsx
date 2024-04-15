// Page.tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero';
import Card from '@/components/Card'
import Mission from '@/components/Mission';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Nav />
      <Hero />
      <Card />
      <Mission />
    </main>
  );
}
