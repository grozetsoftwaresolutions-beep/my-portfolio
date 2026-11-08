import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-white p-6 font-mono text-center">
      <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-secondary mb-4 text-2xl font-bold">
        404
      </div>
      <h1 className="text-2xl font-bold mb-2">Module Not Found</h1>
      <p className="text-sm text-muted max-w-sm mb-6">
        The requested test module or route does not exist in The Test Lab.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity"
      >
        Return to Safety
      </Link>
    </div>
  );
}

