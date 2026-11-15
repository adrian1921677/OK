import { HeaderNav } from "./header-nav";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="container-site">
        <div className="glass glass-nav glass-sheen relative flex h-[3.75rem] items-center justify-between gap-4 px-4 shadow-[0_8px_30px_rgba(47,143,216,0.08)] sm:h-[4.25rem] sm:px-5" data-sheen="on">
          <Wordmark />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}
