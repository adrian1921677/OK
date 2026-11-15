import { HeaderNav } from "./header-nav";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper">
      <div className="container-site relative flex h-16 items-center justify-between gap-4 sm:h-18">
        <Wordmark />
        <HeaderNav />
      </div>
    </header>
  );
}
