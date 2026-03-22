import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getWhatsappLink } from "@/lib/whatsapp";

const LINKS = [
  { href: "#pain", label: "הבעיה" },
  { href: "#audience", label: "למי מתאים" },
  { href: "#solution", label: "הפתרון" },
  { href: "#how-it-works", label: "איך זה עובד" },
  { href: "#portfolio", label: "פרויקטים" },
  { href: "#demo", label: "דוגמאות" },
  { href: "#faq", label: "שאלות" },
  { href: "#pricing", label: "מחירים" },
] as const;

export function Header() {
  const wa = getWhatsappLink();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4">
        <a href="#top" className="flex min-w-0 shrink-0 items-center gap-2 text-base font-bold tracking-tight text-white sm:text-lg">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent ring-1 ring-accent/25 transition hover:ring-accent/40">
            SD
          </span>
          <span className="truncate">SameerDev</span>
        </a>

        <nav
          className="scrollbar-hide mx-1 hidden min-w-0 max-w-[min(100%,30rem)] flex-1 justify-center overflow-x-auto sm:mx-2 md:flex lg:max-w-none"
          aria-label="ניווט ראשי"
        >
          <ul className="flex items-center gap-1 whitespace-nowrap px-1 text-[13px] text-muted sm:gap-2 sm:text-sm lg:gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-2 py-1.5 transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="md"
          className="shrink-0 gap-1.5 px-3 shadow-glow transition hover:brightness-110 sm:gap-2 sm:px-6"
        >
          <WhatsAppIcon className="h-[1.1rem] w-[1.1rem] sm:h-5 sm:w-5" />
          <span className="hidden sm:inline">דבר איתי</span>
          <span className="sm:hidden">וואטסאפ</span>
        </Button>
      </div>
    </header>
  );
}
