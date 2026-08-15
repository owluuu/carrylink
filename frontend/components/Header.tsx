import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-900"
        >
          CarryLink
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/browse" className="transition hover:text-gray-900">
            Browse
          </Link>
          <Link href="/offer" className="transition hover:text-gray-900">
            Offer Baggage Space
          </Link>
        </nav>
      </div>
    </header>
  );
}
