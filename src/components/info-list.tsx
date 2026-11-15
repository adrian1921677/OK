import type { ReactNode } from "react";

export type InfoItem = {
  label: string;
  value: ReactNode;
};

/** Bezeichnung-Wert-Paare, z. B. Firmensitz und Region. */
export function InfoList({ items }: { items: InfoItem[] }) {
  return (
    <dl className="divide-y divide-line">
      {items.map(({ label, value }) => (
        <div key={label} className="grid gap-x-6 gap-y-0.5 py-4 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr]">
          <dt className="text-[0.9375rem] text-muted">{label}</dt>
          <dd className="font-semibold text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
