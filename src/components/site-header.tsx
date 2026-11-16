import { HeaderNav } from "./header-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 pt-3 sm:pt-4">
      <div className="container-site">
        <HeaderNav />
      </div>
    </header>
  );
}
