import { HeaderNav } from "./header-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-[10px]">
      <div className="container-site">
        <HeaderNav />
      </div>
    </header>
  );
}
