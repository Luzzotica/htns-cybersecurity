import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EmailForm } from "@/components/EmailForm";

export default function Home() {
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
            priority
          />
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Suck Less at Cybersecurity With This Book
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            During a targeted exercise in the U.S. Air Force we "shut down" a
            chemical plant by blowing it up. Not with a plane. But with a
            laptop. I'll tell you all about it in the first chapter.
          </p>
          <div className="mx-auto mt-10 max-w-sm">
            <EmailForm variant="first-chapter" />
          </div>

          <section className="mt-20 flex flex-col items-center gap-6">
            <Image
              src="/VinceRomney.png"
              alt="Vincent Romney"
              width={160}
              height={160}
              className="shrink-0 rounded-full object-cover"
            />
            <div className="text-center">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Hi, I'm Vince Romney
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                I&apos;m a cybersecurity executive with a slightly unhealthy
                obsession for solving hard problems, aligning strategy with
                execution, and calling out tech buzzword bingo when I see it.
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                My journey started in the mid-90s founding a software dev firm,
                which ran parallel to a 23-year career in the U.S. Air Force
                (where I bounced between IT, InfoSec, and Cyber Warfare), and
                has since spanned telecom, retail, defense, and now the wellness
                industry—because attackers don&apos;t care what you sell, just
                how you secure it.
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Currently Deputy CISO and Enterprise Security Architect at Nu
                Skin Enterprises, I lead global security strategy, architecture,
                and AI risk management. I also lead a team at Digital Defense
                Security who serve clients with the best knowledge, skill, and
                understanding in the business. CISSP, CCSP, CSSLP, and former
                President of the ISC2 Utah Chapter.
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                I wrote this book because no one else wrote the damn thing. It's
                a guide for living people, like you, to avoid losing all your
                photos or becoming the next headline.
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Because security isn't someone else's job anymore. It's yours.
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Stay safe, stay snarky.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
