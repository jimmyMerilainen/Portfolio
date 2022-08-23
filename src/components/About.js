import React from 'react'

export const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Jimmy Meriläinen
            <br className="hidden lg:inline-block" />- Applikationsutvecklare
          </h1>
          <p className="mb-8 leading-relaxed">
            Jag är i början på en ny karriär som applikationsutvecklare med två
            års erfarenhet av programmering i projektarbeten och på
            praktikplatser. Nu vill jag vara med och utveckla framtidens
            användarvänliga applikationer för mobila enheter. Det här vill jag
            göra hos ett företag som delar min vision för innovativa lösningar
            och kreativitet.
          </p>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./IMG_0091.JPG"
          />
        </div>
      </div>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Om mig
          </h1>
          <p className="mb-8 leading-relaxed">
            Jag brinner för skapandet och att skapa tillsammans, för jag tror på
            att succé bygger på ett gott samarbete, något jag värderar i mitt
            framtida team.
            <br className="hidden lg:inline-block" />
            <br className="hidden lg:inline-block" />
            Som applikationsutvecklare vill jag hjälpa ditt företag att nå ut
            med din vision genom att möta de digitala behoven för dina kunder.
            Genomgående under utbildningen har jag fått lära mig att en bra app
            ska inte bara fungera buggfritt, den ska också ha en design och
            funktionaliteter som gör den enkel för användaren. Däremot är jag
            ödmjuk inför att utveckling av digitala lösningar också bygger på
            egenutveckling och ett fortsatt lärande - jag vill lära mig mer
            tillsammans med er.
          </p>
        </div>
      </div>
    </section>
  )
}
