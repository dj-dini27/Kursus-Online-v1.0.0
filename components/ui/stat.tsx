interface StatProps {
  value: string;
  label: string;
  className?: string;
}

/** Item statistik editorial: angka serif besar + label kapital. */
export function Stat({ value, label, className = "" }: StatProps) {
  return (
    <div className={className}>
      <p className="font-display text-4xl leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {value}
      </p>
      <p className="mt-2 text-meta font-semibold uppercase tracking-label text-muted-foreground sm:mt-3">
        {label}
      </p>
    </div>
  );
}
