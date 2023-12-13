import React from "react";
import OptimaBalita from "../../public/img/OptimaBalita.png";
import GoogleSearch from "../../public/img/GoogleSearch.png";
import Portofolio from "../../public/img/portofolio.png";
import Netflix from "../../public/img/netflix-clone.png";
import { FaArrowRight } from "react-icons/fa";
import Ecom from "../../public/img/simplecom.png";

export default function Portfolio() {
  return (
    <section>
      <h3 className="text-left font-mono text-3xl py-1 dark:text-white mb-5 mt-5">Project</h3>
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {[
          {
            image: OptimaBalita,
            title: "Optima Balita",
            description: "OptimaBalita is an application that discusses stunting in toddlers",
            link: "https://google-clone-wahdan.netlify.app/",
          },
          {
            image: GoogleSearch,
            title: "Google Search Cloning",
            description: "This website is a clone of Google Search and uses the API from Google developers",
            link: "https://google-clone-wahdan.netlify.app/",
          },
          {
            image: Portofolio,
            title: "My Portofolio",
            description: "This is my portfolio website and this website is built with Next.js framework",
            link: "https://myporto-wahdan-nf.netlify.app/",
          },
          {
            image: Netflix,
            title: "Netflix Clone",
            description: "This is a Netflix clone project built with React.js",
            link: "https://netflix-clone-wahdan.netlify.app",
          },
          {
            image: Ecom,
            title: "Simple E-commerce",
            description: "This is a website that I created to improve my skills, and I use React.js",
            link: "https://simple-commerce-wahdan.netlify.app",
          },
        ].map((project, index) => (
          <article
            key={index}
            className="max-w-4xl shadow-xl bg-cover bg-center w-96 h-96 md:w-96 md:h-96 transform duration-500 hover:-translate-y-2 cursor-pointer group"
            style={{ backgroundImage: `url(${project.image.src})` }}
          >
            <div className="bg-black bg-opacity-20 w-96 h-96 md:w-96 md:h-96 px-6 md:px-10 flex flex-wrap flex-col pt-16 hover:bg-opacity-75 transform duration-300">
              <h1 className="text-white text-2xl md:text-3xl mb-3 md:mb-5 transform translate-y-16 group-hover:translate-y-0 duration-300">
                {project.title}
              </h1>
              <div className="w-12 h-2 bg-red-500 rounded-full mb-3 md:mb-5 transform translate-y-16 group-hover:translate-y-0 duration-300"></div>
              <p className="opacity-0 text-white text-lg md:text-xl group-hover:opacity-80 mb-3 md:mb-5">
                {project.description}
              </p>
              <div className="flex flex-grow"></div>
              <div className="flex justify-start pb-3 md:pb-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-2 text-sm md:text-md text-blue-100 bg-red-500 rounded shadow"
                  style={{ alignSelf: "flex-end" }}
                >
                  <FaArrowRight className="text-xl ml-2" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
