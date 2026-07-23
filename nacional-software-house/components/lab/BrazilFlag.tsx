/* ================================================================== *
 * Bandeira do Brasil em SVG + sombreado de tecido (vinheta, dobras,
 * cetim) para evocar aquele ar dramático da foto de referência.
 * Preenche o container (slice) e ondula de forma suave.
 *
 * Para usar a FOTO real no lugar do SVG: salve em /public (ex.:
 * /brasil.jpg) e passe `photo="/brasil.jpg"`.
 * ================================================================== */

// Estrelas espalhadas dentro do círculo azul (aproximação estética).
const STARS = [
  [320, 300, 2.2], [352, 322, 1.6], [388, 306, 2.6], [300, 262, 1.4],
  [336, 268, 2.0], [372, 278, 1.7], [408, 258, 2.3], [318, 232, 1.5],
  [354, 226, 2.8], [392, 236, 1.6], [340, 200, 1.8], [378, 206, 2.1],
  [300, 300, 1.3], [420, 288, 1.5], [412, 320, 1.9], [286, 240, 1.4],
  [360, 344, 2.2], [430, 232, 1.6], [332, 342, 1.5], [400, 336, 1.7],
  [312, 210, 1.3], [432, 262, 1.8],
] as const;

export function BrazilFlag({
  className = "",
  waving = true,
  photo,
}: {
  className?: string;
  waving?: boolean;
  photo?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden>
      <div className={waving ? "flag-wave absolute inset-0" : "absolute inset-0"}>
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <svg
            viewBox="0 0 720 504"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
          >
            <rect width="720" height="504" fill="#009c3b" />
            <polygon points="360,61 659,252 360,443 61,252" fill="#ffdf00" />
            <circle cx="360" cy="252" r="124" fill="#002776" />

            {/* estrelas */}
            {STARS.map(([cx, cy, r], i) => (
              <circle key={i} cx={cx} cy={cy} r={r} fill="#fff" />
            ))}

            {/* faixa branca "Ordem e Progresso" */}
            <path
              id="brasil-band"
              d="M 250 302 A 158 158 0 0 1 470 214"
              fill="none"
              stroke="#fff"
              strokeWidth="21"
            />
            <text
              fill="#009c3b"
              fontSize="15.5"
              fontWeight={700}
              letterSpacing="2.4"
              fontFamily="Georgia, 'Times New Roman', serif"
            >
              <textPath href="#brasil-band" startOffset="7%">
                ORDEM E PROGRESSO
              </textPath>
            </text>
          </svg>
        )}
      </div>

      {/* dobras do tecido (ondulam) */}
      {waving && <div className="flag-folds pointer-events-none absolute inset-0" />}

      {/* vinheta + iluminação diagonal = ar dramático da foto */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_38%,transparent_38%,rgba(0,0,0,0.6))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_28%,rgba(0,0,0,0.14)_62%,rgba(0,0,0,0.5))]" />

      {/* brilho de cetim atravessando */}
      {waving && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="flag-sheen absolute inset-y-0 -left-1/2 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] blur-md" />
        </div>
      )}
    </div>
  );
}
