/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-white">
      <header className="flex flex-row justify-between items-center max-w-7xl mx-auto p-4">
        <a className="text-xl font-bold hover:opacity-80" href="/">
          Diego Baca
        </a>
        <nav className="hidden md:flex flex-1 justify-center items-center">
          <div className="bg-gray-100 rounded-full px-1.5 py-1.5 flex items-center gap-2">
            <div className="flex items-center justify-center py-1 w-28 rounded-full gap-1.5 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#4b5563"
                viewBox="0 0 256 256"
              >
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
              <span className="font-medium">About</span>
            </div>
            <div className="flex items-center justify-center py-1 w-28 rounded-full gap-1.5 text-gray-600">
              Projects
            </div>
            <div className="flex items-center justify-center py-1 w-28 rounded-full gap-1.5 text-gray-600">
              Contact
            </div>
          </div>
        </nav>
        <div>
          <div>G</div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center">
        {/* About */}
        <section className="flex flex-col items-center">
          <h1 className="text-6xl font-bold">{`Hi, I'm Diego`}</h1>
          <h2>Full Stack Web Developer | Product Engineer</h2>
          <p>
            I help non-technical founders turn product ideas into working MVPs
            so they can launch, validate, and attract early users.
          </p>
          <div>
            <button>View Projects</button>
          </div>
        </section>
        {/* Projects */}
        <section>
          <div>
            <h3>Flou - Personal Finance App</h3>
          </div>
        </section>
        {/* Contact */}
        <section></section>
      </main>
    </div>
  )
}
