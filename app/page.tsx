'use client'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image'
import Link from 'next/link'
import { Ref, useEffect, useRef, useState } from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Home() {
  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observers = []
    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    }

    Object.entries(refs).forEach(([key, ref]) => {
      if (!ref.current) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (key === 'contact') {
              setActiveSection(null) // clears active when contact is visible
            } else {
              setActiveSection(key)
            }
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -60% 0px' },
      )

      observer.observe(ref.current)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollToRef = (ref) => {
    if (ref === contactRef) {
      ref.current?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    const offset = 60
    const top =
      ref.current?.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
  const [floating, setFloating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setFloating(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useScrollAnimation()
  return (
    <div className="bg-white">
      <header
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
    ${
      floating
        ? 'top-4 w-[60%] rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-gray-200/50'
        : 'w-full border-b border-gray-200 bg-white'
    }`}
      >
        <div
          className={`flex flex-row justify-between items-center max-w-7xl mx-auto transition-all duration-300
    ${floating ? 'px-6 py-2' : 'p-4'}
  `}
        >
          <Link
            href={'/'}
            className="text-xl font-bold hover:opacity-80"
            onClick={() => {
              scrollToRef(homeRef)
            }}
          >
            <p>Diego Baca</p>
          </Link>
          <nav className="hidden md:flex flex-1 justify-center items-center z-9">
            <div className="bg-gray-100 rounded-full px-1.5 py-1.5 flex items-center gap-2">
              <div
                className={`flex items-center justify-center py-1 w-28 rounded-full gap-1.5 text-gray-600 cursor-pointer ${
                  activeSection === 'home'
                    ? 'bg-white text-gray-900 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => {
                  scrollToRef(homeRef)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#4b5563"
                  viewBox="0 0 256 256"
                >
                  <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>
                </svg>

                <span className="">Home</span>
              </div>
              <div
                className={`flex items-center justify-center py-1 w-28 rounded-full gap-1.5 text-gray-600 cursor-pointer ${
                  activeSection === 'projects'
                    ? 'bg-white text-gray-900 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => {
                  scrollToRef(projectsRef)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="#4b5563"
                  viewBox="0 0 256 256"
                >
                  <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>
                </svg>
                <p className="">Projects</p>
              </div>
              <div
                className={`flex items-center justify-center py-1 w-28 rounded-full gap-1.5 text-gray-600 cursor-pointer ${
                  activeSection === 'about'
                    ? 'bg-white text-gray-900 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => {
                  scrollToRef(aboutRef)
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#4b5563"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                </svg>
                <span className="">About</span>
              </div>
            </div>
          </nav>
          <div className="hover:opacity-70 ">
            <button
              className="flex flex-row items-center justify-center gap-1.5 bg-black px-3 py-2 rounded-full cursor-pointer"
              onClick={() => {
                scrollToRef(contactRef)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#ffff"
                viewBox="0 0 256 256"
              >
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
              </svg>

              <span className="text-white">Get in Touch</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center">
        {/* Home */}
        <section
          ref={homeRef}
          className="scroll-section items-center min-h-[83vh] flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-20"
        >
          <h1 className="text-6xl sm:text-7xl font-bold mb-4">{`Hi, I'm Diego`}</h1>
          <h2 className="text-2xl text-gray-700 mb-8">
            Full Stack Web Developer | Product Engineer
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            I help non-technical founders turn product ideas into working MVPs
            so they can launch faster, validate their idea, and attract early
            users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
              onClick={() => {
                scrollToRef(projectsRef)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>
              </svg>
              View Projects
            </button>
          </div>
          {/* AGREGAR FLECHA QUE SENALE HACIA ABAJO Y QUE BRILLE Y SE APAGUE */}
        </section>
        {/* Projects */}
        <section
          ref={projectsRef}
          className="scroll-section w-full flex flex-col py-15 px-40 mb-20"
        >
          <h2 className="flex text-2xl font-medium mb-6">Projects</h2>

          <div className=" w-full border-t border-gray-300 pt-10 mb-50">
            <div className="flex flex-row gap-4">
              <p className="text-3xl text-gray-600">01</p>
              <h3 className="mb-8 text-6xl font-semibold">
                Flou – Personal Finance App
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-10 w-full">
              <div className="relative w-full aspect-[16/10]  border border-gray-200 overflow-hidden">
                <Image
                  src="/img/flou-hero.png"
                  alt="Flou app"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>
              <div>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit sit nemo fugiat iure consequatur in ad itaque
                  expedita quam voluptates et, fuga, beatae sed possimus
                  exercitationem, incidunt nulla! Nisi, optio. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quas, est tempora,
                  repudiandae totam aspernatur quo eligendi sed reprehenderit
                  dicta obcaecati quasi quidem, blanditiis pariatur et a. A,
                  soluta magnam. Ut.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full border-t border-gray-300 pt-10">
            <div className="flex flex-row gap-4">
              <p className="text-3xl text-gray-600">02</p>
              <h3 className="mb-8 text-6xl font-semibold">
                INDUPSA – Sales Dashboard
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-10 w-full">
              <div className="relative w-full aspect-[16/10] border border-gray-200 overflow-hidden">
                <Image
                  src="/img/flou-hero.png"
                  alt="Flou app"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>
              <div>
                <p className="text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit sit nemo fugiat iure consequatur in ad itaque
                  expedita quam voluptates et, fuga, beatae sed possimus
                  exercitationem, incidunt nulla! Nisi, optio. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quas, est tempora,
                  repudiandae totam aspernatur quo eligendi sed reprehenderit
                  dicta obcaecati quasi quidem, blanditiis pariatur et a. A,
                  soluta magnam. Ut.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* About me */}
        <section
          ref={aboutRef}
          className="scroll-section w-full flex flex-col py-15 px-40"
        >
          <h2 className="flex text-2xl font-medium mb-6">About me</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit sit nemo fugiat iure consequatur in ad itaque expedita
            quam voluptates et, fuga, beatae sed possimus exercitationem,
            incidunt nulla! Nisi, optio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quas, est tempora, repudiandae totam aspernatur
            quo eligendi sed reprehenderit dicta obcaecati quasi quidem,
            blanditiis pariatur et a. A, soluta magnam. Ut.
          </p>
        </section>

        {/* Contact */}
        <section
          ref={contactRef}
          className="scroll-section items-center min-h-[100vh] flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-20"
        >
          <h1 className="text-6xl sm:text-7xl font-bold mb-10">{`Let's Work Together`}</h1>

          <form
            className="flex flex-col gap-0.5"
            action="https://formspree.io/f/meerkvan"
            method="POST"
          >
            <label className="text-left font-medium text-gray-700">
              First Name
            </label>
            <input
              className="rounded-lg border-[1.5px] border-gray-300 h-10 mb-2 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              name="name"
              id="name"
              type="text"
            />
            <label className="text-left font-medium text-gray-700">Email</label>
            <input
              className="rounded-lg border-[1.5px] border-gray-300 h-10 mb-2 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              name="email"
              id="email"
              type="email"
            />
            <label className="text-left font-medium text-gray-700">
              What are you building?
            </label>
            <input
              className="rounded-lg border-[1.5px] border-gray-300 h-10 mb-2 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              name="q1"
              id="q1"
              type="text"
            />
            <label className="text-left font-medium text-gray-700">
              Where are you right now?
            </label>
            <select
              className="rounded-lg border-[1.5px] border-gray-300 h-10 mb-2 p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              name="q2"
              id="q2"
            >
              <option value="idea">Just an idea</option>
              <option value="prototype">Already have a prototype</option>
              <option value="concept">Validated concept</option>
              <option value="users">Have paying users</option>
            </select>

            <div className="flex flex-col gap-1 mt-4">
              <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                </svg>
                Get in Touch
              </button>
            </div>
            <p className="text-gray-400 text-sm italic">
              I typically respond within 24 hours
            </p>
          </form>
        </section>
      </main>
      <style jsx>{`
        .scroll-section {
          opacity: 0;
          transform: translateY(10px);
        }
        .scroll-section.animate {
          animation: fade-in 0.4s ease-out 0s 1 normal forwards running;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {/* <footer className="w-full max-w-7xl mx-auto px-4 py-8 text-center text-sm text-gray-500 font-outfit">
        <p>© 2026 Diego Baca. All rights reserved.</p>
      </footer> */}
    </div>
  )
}
