export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/80 px-4 py-10 text-center sm:px-6">
      <p className="text-sm text-muted">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-slate-300">SameerDev</span>
        . כל הזכויות שמורות.
      </p>
    </footer>
  );
}
