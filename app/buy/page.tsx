import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AMAZON_URL =
  "https://www.amazon.com/How-Not-Suck-Cybersecurity-Individuals/dp/1968711015";

export default function BuyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Image
            src="/cover.jpg"
            alt="How to Not Suck at Cybersecurity book cover"
            width={240}
            height={360}
            className="mx-auto rounded-lg shadow-lg"
          />
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Buy the Book
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            How to Not Suck at Cybersecurity gives you practical, actionable
            advice you can use today—whether you&apos;re an executive, a team
            lead, or someone who just wants to stop clicking suspicious links.
          </p>
          <div className="mt-12">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
            >
              Buy on Amazon
            </a>
          </div>
          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-500">
            QR-code friendly for book signings and events.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
