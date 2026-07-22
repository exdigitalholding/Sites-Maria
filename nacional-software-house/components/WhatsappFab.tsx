"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappHref, wa } from "@/lib/site";

/** Floating WhatsApp button, appears after the hero. */
export default function WhatsappFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0 }
    );
    const hero = document.getElementById("top");
    if (hero) io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={whatsappHref(wa.projeto)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-green text-[#04120b] shadow-[0_14px_40px_-8px_rgba(18,183,106,0.6)] transition-all duration-500 hover:bg-green-bright ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MessageCircle size={28} fill="currentColor" strokeWidth={0} />
    </a>
  );
}
