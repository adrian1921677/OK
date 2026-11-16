import Link from "next/link";
import { site } from "@/lib/site";

type CtaPanelProps = {
  title: string;
  text: string;
  action?: string;
};

/** Abschluss der Unterseiten: ein begrenztes dunkles Panel statt eines vollflächigen Bandes. */
export function CtaPanel({ title, text, action = "Unverbindlich anfragen" }: CtaPanelProps) {
  return (
    <section className="pb-14 lg:pb-20">
      <div className="container-site">
        <div
          className="panel-deep flex flex-wrap items-end justify-between gap-x-12 gap-y-7 p-6 sm:p-10 lg:p-12"
          data-reveal
        >
          <div>
            <h2 className="h-section max-w-[18ch]">{title}</h2>
            <p className="mt-4 max-w-[32rem] text-white/70">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/kontakt" className="btn-light">
              {action}
            </Link>
            <a href={site.phone.href} className="btn-ghost-light">
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
