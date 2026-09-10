import { Bridge } from "./components/bridge";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Invitar } from "./components/invitar";
import { Manifiesto } from "./components/manifiesto";
import { Nav } from "./components/nav";
import { Preguntas } from "./components/preguntas";
import { Semblanza } from "./components/semblanza";
import { Trabajo } from "./components/trabajo";

export default function Home() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Manifiesto />
        <Semblanza />
        <Trabajo />
        <Bridge />
        <Preguntas />
        <Invitar />
      </main>
      <Footer />
    </>
  );
}
