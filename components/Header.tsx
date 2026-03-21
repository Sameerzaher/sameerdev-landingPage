import { Button } from "@/components/Button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getWhatsappLink } from "@/lib/whatsapp";

export function Header() {
  const wa = getWhatsappLink();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2 text-base font-bold tracking-tight text-white sm:text-lg">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent ring-1 ring-accent/30">
            SD
          </span>
          <span className="truncate">SameerDev</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex" aria-label="ניווט ראשי">
          <a href="#pain" className="transition hover:text-white">
            הבעיה
          </a>
          <a href="#audience" className="transition hover:text-white">
            למי זה מתאים
          </a>
          <a href="#solution" className="transition hover:text-white">
            הפתרון
          </a>
          <a href="#demo" className="transition hover:text-white">
            דוגמאות
          </a>
          <a href="#pricing" className="transition hover:text-white">
            מחירים
          </a>
        </nav>
        <Button
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="md"
          className="shrink-0 gap-1.5 px-3 sm:gap-2 sm:px-6"
        >
          <WhatsAppIcon className="h-[1.1rem] w-[1.1rem] sm:h-5 sm:w-5" />
          <span className="hidden sm:inline">דבר איתי</span>
          <span className="sm:hidden">וואטסאפ</span>
        </Button>
      </div>
    </header>
  );
}
