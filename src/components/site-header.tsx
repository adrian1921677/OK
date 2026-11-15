import { HeaderNav } from "./header-nav";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-[2px]">
      <div className="container-site relative flex h-[4.25rem] items-center justify-between gap-6 sm:h-[4.75rem]">
        <Wordmark />
        <HeaderNav />
      </div>
    </header>
  );
}
