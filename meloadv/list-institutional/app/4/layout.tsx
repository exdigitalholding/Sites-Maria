export const metadata = {
  title: "LIST — Capítulo IV / Movimento",
  description:
    "Marketing que pensa antes de gritar. Capítulo IV do site da Agência LIST — direção estratégica em movimento.",
};

export default function FourLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bone text-ink" style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
}
