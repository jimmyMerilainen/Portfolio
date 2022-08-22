import React from 'react'

import {
  BadgeCheckIcon,
  ChipIcon,
  AcademicCapIcon,
  IdentificationIcon,
  UserIcon,
  UserCircleIcon,
  MailIcon,
  DeviceMobileIcon,
} from '@heroicons/react/solid'

export const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <IdentificationIcon className="text-emerald-400 w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Kontakt
          </h1>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-s">
              E-POST
            </h2>
            <button
              className="mt-1 text-emerald-400  leading-relaxed text-decoration-line: underline"
              onClick={() => (window.location = 'mailto:merilainen@live.se')}
            >
              merilainen@live.se
            </button>
            <h2 className="title-font font-semibold text-white tracking-widest text-s mt-4">
              TELEFON
            </h2>
            <a
              className="text-emerald-400  leading-relaxed text-decoration-line: underline"
              href="tel:+46762753414"
            >
              +46 76-275 34 14
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-s mt-4">
              LINKEDIN
            </h2>
            <a
              className="mt-1 text-emerald-400  leading-relaxed text-decoration-line: underline"
              href="https://www.linkedin.com/in/jimmy-meril%C3%A4inen-120078206/"
            >
              Jimmy Meriläinen
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-s mt-4">
              GITHUB
            </h2>
            <a
              className="mt-1 text-emerald-400  leading-relaxed text-decoration-line: underline"
              href="https://github.com/jimmyMerilainen"
            >
              Jimmy Meriläinen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
