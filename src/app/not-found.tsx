import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section>
      <div className="container-site max-w-2xl py-16 lg:py-24">
        <p className="label">Fehler 404</p>
        <h1 className="h-page mt-4">Diese Seite gibt es nicht.</h1>
        <p className="lead mt-5">
          Die Adresse ist falsch oder die Seite wurde verschoben. Über die Startseite finden Sie alle Inhalte, oder Sie
          rufen uns an:{" "}
          <a href={site.phone.href} className="text-link-accent">
            {site.phone.display}
          </a>
          .
        </p>
        <p className="mt-8">
          <Link href="/" className="btn-primary">
            Zur Startseite
          </Link>
        </p>
      </div>
    </section>
  );
}
