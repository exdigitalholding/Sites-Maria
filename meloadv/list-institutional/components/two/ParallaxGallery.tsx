import Placeholder from "@/components/Placeholder";

export default function ParallaxGallery() {
  return (
    <section className="scene relative px-6 py-32 sm:px-12 sm:py-40">
      <header className="mx-auto grid max-w-[1500px] grid-cols-12 items-end gap-y-6">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/50">
            (05) — Galeria
          </p>
        </div>
        <h2 className="col-span-12 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-[-0.04em] md:col-span-9">
          Trabalhos com <em className="italic">profundidade</em>.
        </h2>
      </header>

      <div className="relative mx-auto mt-16 grid max-w-[1500px] grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-5" data-parallax="0.08">
          <Placeholder variant="violet" label="gal-01" ratio="aspect-[4/5]" />
        </div>

        <div className="col-span-12 sm:col-span-7 sm:mt-24" data-parallax="-0.12">
          <Placeholder variant="signal" label="gal-02" ratio="aspect-[5/3]" />
        </div>

        <div className="col-span-12 sm:col-span-4 sm:-mt-12" data-parallax="0.16">
          <Placeholder variant="acid" label="gal-03" ratio="aspect-[4/5]" />
        </div>

        <div className="col-span-12 sm:col-span-4" data-parallax="-0.08">
          <Placeholder variant="mauve" label="gal-04" ratio="aspect-square" />
        </div>

        <div className="col-span-12 sm:col-span-4 sm:mt-24" data-parallax="0.12">
          <Placeholder variant="checker" label="gal-05" ratio="aspect-[4/5]" />
        </div>
      </div>
    </section>
  );
}
