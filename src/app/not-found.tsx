import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-site max-w-2xl">
        <p className="lettering text-5xl text-brand-strong">404</p>
        <h1 className="h-page mt-4">Diese Seite gibt es nicht</h1>
        <p className="lead mt-6">
          Die Adresse ist falsch oder die Seite wurde verschoben. Über die Startseite finden Sie alle Inhalte, oder Sie
          rufen uns direkt an:{" "}
          <a href={site.phone.href} className="link">
            {site.phone.display}
          </a>
          .
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Zur Startseite
        </Link>
      </div>
    </section>
  );
}
