import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AMAZON_URL =
  "https://www.amazon.com/How-Not-Suck-Cybersecurity-Individuals/dp/1968711015";

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Check your inbox
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Your first chapter is on the way.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            If you don&apos;t see it in the next 5 minutes, check your spam
            folder.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Want to buy the full book? Click the button below.
          </p>
          <div className="mt-6">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Buy the Book on Amazon
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
