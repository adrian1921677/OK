import { HeaderNav } from "./header-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="container-site relative">
        <HeaderNav />
      </div>
    </header>
  );
}
