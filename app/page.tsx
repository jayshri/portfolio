export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Jayshri Aher
          </h1>

          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            Software Engineer • React • Next.js • TypeScript • Tailwind CSS • JAVA
          </p>

          {/* Primary actions */}
          <div className="grid gap-3 pt-2 sm:flex sm:flex-wrap sm:items-center">
            <a
              className="w-full rounded-md bg-black px-4 py-2.5 text-center text-sm font-medium text-white sm:w-auto"
              href="https://job-application-tracker-alpha-wine.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo: Job Application Tracker
            </a>

            <a
              className="w-full rounded-md border px-4 py-2.5 text-center text-sm font-medium sm:w-auto"
              href="https://github.com/jayshri/job-application-tracker"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </a>

            <a
              className="w-full rounded-md border px-4 py-2.5 text-center text-sm font-medium sm:w-auto"
              href="/Jayshri_Aher_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume (PDF)
            </a>
          </div>
        </header>

        {/* Featured Project */}
        <section className="mt-10 space-y-4 sm:mt-12">
          <h2 className="text-lg font-semibold sm:text-xl">Featured Project</h2>

          <div className="rounded-lg border p-4 sm:p-5">
            <h3 className="text-base font-semibold sm:text-lg">
              Job Application Tracker / Career Dashboard
            </h3>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
              <li>
                Built a career dashboard using Next.js App Router, TypeScript,
                and Tailwind CSS
              </li>
              <li>
                Implemented full CRUD flow to add, edit, view, and delete job
                applications
              </li>
              <li>
                Added search, status filtering, and sorting by recently updated
              </li>
              <li>
                Designed dashboard statistics for application pipeline visibility
              </li>
              <li>Used browser LocalStorage for persistence without a backend</li>
            </ul>

            <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
              <a
                className="w-full rounded-md bg-black px-4 py-2.5 text-center text-sm font-medium text-white sm:w-auto"
                href="https://job-application-tracker-alpha-wine.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Open Live App
              </a>

              <a
                className="w-full rounded-md border px-4 py-2.5 text-center text-sm font-medium sm:w-auto"
                href="https://github.com/jayshri/job-application-tracker"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mt-10 space-y-3 sm:mt-12">
          <h2 className="text-lg font-semibold sm:text-xl">About</h2>

          <div className="space-y-3 text-sm leading-relaxed text-gray-700 sm:text-base">
            <p>
              I am an experienced Software Engineer with a strong background in
              building scalable, user-facing applications and over 10 years of
              industry experience, including at Workday. I have worked across
              the stack, with deep expertise in frontend development using
              React, JavaScript, TypeScript, and modern frameworks, along with
              solid experience collaborating on backend systems in Java-based
              environments.
            </p>

            <p>
              After taking a career break to care for my young children, I am
              actively re-entering the workforce with a renewed focus on
              building high-quality, well-structured software and contributing
              to impactful products as part of a collaborative engineering team.
            </p>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer className="mt-12 border-t pt-6 text-sm text-gray-600 sm:mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
            <span className="font-medium text-gray-700">Contact</span>

            <a className="underline" href="mailto:jayshri.aher@gmail.com">
              jayshri.aher@gmail.com
            </a>

            <span className="hidden sm:inline">•</span>

            <a
              className="underline"
              href="https://www.linkedin.com/in/jayshri-aher-6a15b317/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <span className="hidden sm:inline">•</span>

            <a
              className="underline"
              href="https://github.com/jayshri"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}