import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmailForm } from "@/components/EmailForm";

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Free Resources
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Download checklists, excerpts, and guides. Enter your email to get
            access.
          </p>

          <div className="mt-12 space-y-10">
            <section className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Top 10 Cyber Mistakes
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                The mistakes people like you tend to make—and how to avoid them.
              </p>
              <div className="mt-4 max-w-sm">
                <EmailForm
                  variant="resource"
                  resourceType="top-10-mistakes"
                  submitLabel="Get the PDF"
                  successMessage="Check your email for the Top 10 Cyber Mistakes PDF."
                />
              </div>
            </section>

            <section className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Chapter Excerpts
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Sample passages from the book to get a feel for the content.
              </p>
              <div className="mt-4 max-w-sm">
                <EmailForm
                  variant="resource"
                  resourceType="excerpts"
                  submitLabel="Get Excerpts"
                  successMessage="Check your email for the chapter excerpts."
                />
              </div>
            </section>

            <section className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Cyber Checklist
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                A practical checklist to shore up your personal or work
                security.
              </p>
              <div className="mt-4 max-w-sm">
                <EmailForm
                  variant="resource"
                  resourceType="checklist"
                  submitLabel="Get the Checklist"
                  successMessage="Check your email for the cyber checklist."
                />
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
