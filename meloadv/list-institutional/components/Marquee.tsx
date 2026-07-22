import { ReactNode } from "react";

type Props = {
  items: ReactNode[];
  reverse?: boolean;
  className?: string;
  separator?: ReactNode;
};

export default function Marquee({ items, reverse, className = "", separator }: Props) {
  const Sep =
    separator ??
    (
      <span aria-hidden className="inline-block size-3 rounded-full bg-current opacity-60" />
    );

  const track = (
    <div className="marquee__track" aria-hidden>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-16">
          <span>{item}</span>
          <span>{Sep}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${reverse ? "marquee--reverse" : ""} ${className}`} role="marquee">
      {track}
      {track}
    </div>
  );
}
