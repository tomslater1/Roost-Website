import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {APP_NAME} · {year}
        </p>
        <p className="text-sm text-muted-foreground text-center sm:text-right">
          Your data lives in your own private database.{" "}
          <span className="text-muted-foreground/60">
            No tracking, no ads, no third parties.
          </span>
        </p>
      </div>
    </footer>
  );
}
