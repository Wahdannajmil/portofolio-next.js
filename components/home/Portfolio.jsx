import Image from "next/image";
import React from "react";
import OptimaBalita from "../../public/img/OptimaBalita.png"
import GoogleSearch from "../../public/img/GoogleSearch.png";
import Portofolio from "../../public/img/portofolio.png";
import {FaArrowRight } from "react-icons/fa";

function handleSectionClick(event) {
  const githubLink = event.target.getAttribute("data-github-link");
  if (githubLink) {
    console.log("Mengarahkan ke: " + githubLink);
    window.location.href = githubLink;
  }
}


export default function Portfolio() {
  return (
    <section>
      <h3 className="text-left font-mono text-3xl py-1 dark:text-white">Project</h3>
      <div className="lg:flex gap-5">
        <section className="mx-auto container p-5 md:py-20 px-0 md:p-20 md:px-0 antialiased flex-1">
          <section>
            <article
              className="mx-auto max-w-4xl shadow-xl bg-cover bg-center w-96 h-96 md:min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: `url(${OptimaBalita.src})`,
              }}>
              <div className="bg-black bg-opacity-20 w-96 h-96 px-10 flex flex-wrap flex-col pt-20 hover:bg-opacity-75 transform duration-300">
                <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  Optima Balita
                </h1>
                <div className="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 mb-5">
                  OptimaBalita is an application that discusses stunting in toddlers. There are several features, namely articles, nutritional calculators and discussion forums
                </p>
                  <a href="https://stunting-center.netlify.app/" className="text-white hover:underline">
                    <FaArrowRight className="text-xl ml-2" />
                  </a>
              </div>
            </article>
          </section>
        </section>
        <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased flex-1">
          <section>
            <article
              className="mx-auto max-w-4xl shadow-xl bg-cover bg-center w-96 h-96 md:min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: `url(${GoogleSearch.src})`,
              }}
            >
              <div className="bg-black bg-opacity-20 w-96 h-96 px-10 flex flex-wrap flex-col pt-20 hover:bg-opacity-75 transform duration-300">
                <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  Google Search Cloning
                </h1>
                <div className="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 mb-5">
                  This website is a clone of Google Search and uses the API from Google developers
                </p>
                  <a href="https://google-clone-wahdan.netlify.app/" className="text-white hover:underline">
                    <FaArrowRight className="text-xl ml-2" />
                  </a>
              </div>
            </article>
          </section>
        </section>
        <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased flex-1">
          <section>
            <article
              className="mx-auto max-w-4xl shadow-xl bg-cover bg-center w-96 h-96 md:min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                backgroundImage: `url(${Portofolio.src})`,
              }}
            >
              <div className="bg-black bg-opacity-20 w-96 h-96 px-10 flex flex-wrap flex-col pt-20 hover:bg-opacity-75 transform duration-300">
                <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  My Portofolio
                </h1>
                <div className="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 mb-5">
                  This is my portofolio website and this website build with next.js framework
                </p>
                  <a href="https://myporto-wahdan-nf.netlify.app/" className="text-white hover:underline">
                    <FaArrowRight className="text-xl ml-2" />
                  </a>
              </div>
            </article>
          </section>
        </section>
      </div>
    </section>
  );
}
