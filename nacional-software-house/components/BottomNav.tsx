"use client";

import { Home, Sparkles, Layers, MessageCircle } from "lucide-react";
import { whatsappHref, wa } from "@/lib/site";

export default function BottomNav() {
  const navItems = [
    { label: "Home", href: "#top", icon: Home },
    { label: "O que fazemos", href: "#capacidades", icon: Sparkles },
    { label: "Processo", href: "#processo", icon: Layers },
    {
      label: "Contato",
      href: whatsappHref(wa.mobile),
      icon: MessageCircle,
      external: true,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pointer-events-none pb-4 px-4 flex justify-center">
      <nav className="flex w-full max-w-sm items-center justify-between rounded-full border border-line/80 bg-ink/70 px-6 py-3 backdrop-blur-xl pointer-events-auto">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <a
              key={i}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-1 text-text-dim transition-colors hover:text-green-bright"
            >
              <Icon className="size-[22px]" strokeWidth={2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
