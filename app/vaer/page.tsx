
export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-yellow-100">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-8 py-16">
        {/* Hero */}
        <section className="space-y-6">
         
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/hifzameh/vaerbuddy"
              className="rounded-lg bg-black px-5 py-3 text-white transition hover:opacity-90"
            >
             View source code
            </a>

            
          </div>
        </section>

        {/* About */}
       


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