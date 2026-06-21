import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-rose-100 to-purple-200">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-8 py-16">
        {/* Hero */}
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-zinc-600">
            Software Engineer
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Hifza Mehmood
          </h1>

          <p className="max-w-2xl text-lg text-zinc-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Maxime reprehenderit beatae nostrum saepe dolorem?
            Consequuntur sed ipsa consequatur nulla et.
            Pariatur maxime perspiciatis ad quos qui vel natus itaque necessitatibus.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-black px-5 py-3 text-white transition hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="mailto:himea003@gmail.com"
              className="rounded-lg border border-zinc-300 px-5 py-3 transition hover:bg-zinc-100"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* About */}
        <section className="mt-24" id="about">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900">
            About
          </h2>

          <p className="max-w-3xl text-zinc-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Maxime reprehenderit beatae nostrum saepe dolorem?
            Consequuntur sed ipsa consequatur nulla et.
            Pariatur maxime perspiciatis ad quos qui vel natus itaque necessitatibus.
          </p>
        </section>

        <section className="mt-24" id="projects">
          <h2 className="mb-8 text-2xl font-semibold text-zinc-900">
            Projects
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">



            <Link
              href="/vaer"
              target="_blank"
              className="block rounded-xl border border-zinc-200 bg-white/60 p-6 backdrop-blur transition hover:scale-[1.02] hover:bg-white/80"
            >
              <h3 className="text-xl font-medium text-zinc-900">
                VærBuddy
              </h3>

              <p className="mt-2 text-zinc-700">
                A weather application built with Kotlin that provides forecasts,
                weather insights, and a clean user-friendly interface.
              </p>
            </Link>

            <div className="rounded-xl border border-zinc-200 bg-white/60 p-6 backdrop-blur">
              <h3 className="text-xl font-medium text-zinc-900">
                Lorem Ipsum
              </h3>

              <p className="mt-2 text-zinc-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maxime reprehenderit beatae nostrum saepe dolorem?
                Consequuntur sed ipsa consequatur nulla et.
                Pariatur maxime perspiciatis ad quos qui vel natus itaque necessitatibus.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 flex gap-6 text-sm text-zinc-600">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:himea003@gmail.com">Email</a>
        </footer>
      </main>
    </div>
  );
}