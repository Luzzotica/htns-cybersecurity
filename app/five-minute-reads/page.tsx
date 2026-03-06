import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmailForm } from "@/components/EmailForm";

export default function FiveMinuteReadsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Get Smarter in 5 Minutes a Week
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Every week I&apos;ll send you a five-minute read on cybersecurity
            that&apos;s prescriptive, educational, and designed to help you get
            better without burning hours.
          </p>
          <div className="mx-auto mt-10 max-w-sm">
            <EmailForm variant="newsletter" submitLabel="Subscribe" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
