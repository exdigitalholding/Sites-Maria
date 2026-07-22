import {
  CalendarCheck,
  RefreshCw,
  Eye,
  Code,
  FileText,
  type LucideIcon as Icon
} from "lucide-react";
import { guarantees } from "@/lib/site";

const icons: Icon[] = [CalendarCheck, RefreshCw, Eye, Code, FileText];

export default function Guarantees() {
  return (
    <section className="relative border-b border-line bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 className="reveal max-w-2xl font-display text-[clamp(1.8rem,3.8vw,3rem)] font-semibold leading-[1.08] tracking-tight text-text">
          O que você pode esperar de nós,{" "}
          <span className="text-brand-gradient">sempre.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((g, i) => {
            const Ico = icons[i];
            return (
              <div
                key={g.title}
                className="reveal flex gap-4"
                data-delay={`${i * 60}`}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-line bg-surface text-green-bright">
                  <Ico size={20} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-text">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-text-dim">
                    {g.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
