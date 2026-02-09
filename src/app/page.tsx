import Contacts from "./contacts/contacts";


export default function Home() {
  return (
    <div>
      <main>
        <div className="grid gap-1 m-2.5 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 
                        grid-flow-row auto-rows-fr leading-4 max-w-[1680px]">
          <div className="grid-item-1 bg-sky-400 bg-[url('/comics_blue_base.jpg')]
                          text-white text-center uppercase font-bold text-2xl p-2.5
                          [text-shadow:_1px_1px_2px_black]">
            <div>Hi! My name is Margarita Orlova</div>
          </div>
          <div className="grid-item-2 bg-sky-400 bg-[url('/comic_blue_revert.jpg')]">
            <div className="speech-bubble">I am an experienced Frontend Developer
              with a demonstrated history of working in the
              computer software industry.</div>
          </div>
          <div className="grid-item-3 bg-sky-400 bg-[url('/comic_blue.jpg')] md:col-span-2 lg:col-span-2 xl:col-span-2">
            <div className="speech-bubble">
              I have studied Information Managment at the University Of Latvia and participated in the ERASMUS
              exchange studies
              in the University of Boras (Sweden) Information Science faculty.<br /><br />
              I have worked as a Frontend Developer in <br />
              eLaikmets (2014), <br />
              Diatom Enterprises (2016-2019), <br />
              ABC Software (2019-2020) <br />
              and Web World (2020-2021).
            </div>
          </div>
          <div className="grid-item-4 bg-red-500 bg-[url('/comics_wow.jpg')]"></div>
          <div className="grid-item-5 bg-violet-900 bg-[url('/comic_purple_base.jpg')]
                          text-white text-center uppercase font-bold text-5xl p-2.5">
            <div>SKILLS</div>
          </div>
          <div className="grid-item-6 bg-violet-900 bg-[url('/comic_purple.jpg')]">
            <div className="skills-container">
              <div className="skills-header">Languages</div>
              <div className="skills">
                <div>
                  <div className="skill">HTML/CSS</div>
                  <div className="skill">JavaScript</div>
                  <div className="skill">TypeScript</div>
                  <div className="skill">Java</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item-7 bg-violet-900 bg-[url('/comic_purple.jpg')]">
            <div className="skills-container">
              <div className="skills-header">Frameworks/Libraries</div>
              <div className="skills">
                <div>
                  <div className="skill">React</div>
                  <div className="skill">Angular</div>
                  <div className="skill">jQuery</div>
                  <div className="skill">Redux</div>
                  <div className="skill">Next.js</div>
                  <div className="skill">Tailwind</div>
                  <div className="skill">Bootstrap</div>
                  <div className="skill">SASS</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item-8 bg-white bg-[url('/comic_pow.jpg')] bg-contain"></div>
          <div className="grid-item-9 bg-orange-600 bg-[url('/comic_yellow_base.jpg')]
                          text-white text-center uppercase font-bold text-5xl p-2.5
                          [text-shadow:_1px_1px_2px_black]">
            <div>Tech</div>
          </div>
          <div className="grid-item-10 bg-orange-600 bg-[url('/comic_orange.jpg')]">
            <div className="skills-container">
              <div className="skills-header">Technologies</div>
              <div className="skills">
                <div>
                  <div className="skill">GraphQL</div>
                  <div className="skill">REST</div>
                  <div className="skill">Git/GitHub</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item-11 bg-orange-600 bg-[url('/comic_orange.jpg')]">
            <div className="skills-container">
              <div className="skills-header">Miscellaneous</div>
              <div className="skills">
                <div>
                  <div className="skill">Scrum</div>
                  <div className="skill">Jira</div>
                  <div className="skill">Agile</div>
                  <div className="skill">TFS</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item-12 bg-lime-400 bg-[url('/comic_green_base.jpg')] xl:col-span-2 2xl:col-span-1
                          text-white text-center uppercase font-bold text-5xl p-2.5
                          [text-shadow:_1px_1px_2px_black]">
            <div>Projects</div>
          </div>
          <div className="grid-item-13 bg-lime-400 bg-[url('/comic_green.jpg')] lg:col-span-3 xl:col-span-4 2xl:col-span-2">
            <div className="skills-container">
              <div className="skills-header">WEB SOLUTIONS FOR BUSINESS MANAGEMENT</div>
              <div className="skills">
                <div>
                  <div className="skill">The design and development of various value-added modules for business management
                    systems including financial reports and accounting, HR management, real estate and other operations. <br />
                    <i>Project Technologies: Angular, React, HTML/CSS, SASS, Bootstrap, C#, REST, Agile, Scrum, TFS, Azure</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item-14 bg-lime-400 bg-[url('/comic_green.jpg')] lg:col-span-2 xl:col-span-3 2xl:col-span-1">
            <div className="skills-container">
              <div className="skills-header">HEALTHCARE INFORMATIONAL SYSTEM</div>
              <div className="skills">
                <div>
                  <div className="skill">
                    The implementation of informational system for storing medical records,
                    making an appointment and online consulting.<br />
                    <i>Project Technologies: Angular, HTML/CSS, SASS, Bootstrap, C#, REST, Agile, Scrum, TFS, Azure</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item-15 bg-lime-400 bg-[url('/comic_green.jpg')] lg:col-span-2 xl:col-span-3 2xl:col-span-2">
            <div className="skills-container">
              <div className="skills-header">NATIONAL INFORMATION SYSTEMS INTEGRATOR</div>
              <div className="skills">
                <div>
                  <div className="skill">The development of national e-Government informational system for
                    storing, organizing and retrieving sensitive data.<br />
                    <i>Project Technologies: React, Redux, HTML/CSS, Bootstrap, Java, GraphQL, Agile, Scrum, Jira
                      Docker, Kubernetes, Microservices</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item-16 bg-sky-500 bg-[url('/comic_footer.jpg')] md:col-span-2 lg:col-span-4 xl:col-span-6 text-white">
            <Contacts></Contacts>
          </div>
        </div>
      </main>
    </div>
  );
}
