export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-8 py-16">
        {/* Hero Section */}
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            
          </h1>

          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-black px-5 py-3 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              View Projects
            </a>

            <a
              href="mailto:himea003@gmail.com"
              className="rounded-lg border border-zinc-300 px-5 py-3 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* About */}
        <section className="mt-24" id="about">
          <h2 className="mb-4 text-2xl font-semibold">About</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            
          </p>
        </section>

        {/* Projects */}
        <section className="mt-24" id="projects">
          <h2 className="mb-8 text-2xl font-semibold">Projects</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="text-xl font-medium">Project One</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                
              </p>
            </div>

            <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h3 className="text-xl font-medium">Project Two</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
               
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 flex gap-6 text-sm text-zinc-500">
          <a href="https://github.com/hifzameh">GitHub</a>
          <a href="https://linkedin.com/in/hifzameh">LinkedIn</a>
          <a href="mailto:himea003@gmail.com">Email</a>
        </footer>
      </main>
    </div>
  );
}