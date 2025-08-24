import React from "react";
import Link from "next/link";
import OptimizedImage from "../OptimizedImage";

const ProjectCard = ({
  name,
  description,
  image,
  technologies = [],
  url,
  targetBlank,
}) => {
  return (
    <li className="mb-12">
      <div className="group relative flex flex-col gap-4 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-r lg:group-hover:from-slate-800/50 lg:group-hover:to-slate-700/50 lg:group-hover:shadow-xl lg:group-hover:backdrop-blur-sm"></div>
        <div className="w-full">
          <div className="relative group w-full">
            <OptimizedImage
              alt={name}
              src={image}
              width={600}
              height={240}
              className="rounded-xl border-2 border-slate-200/10 transition-all duration-300 group-hover:border-teal-400/30 group-hover:scale-105
               w-full h-60 object-cover shadow-md"
              priority={false}
              key={`${name}-${image}`}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        <div className="z-10">
          <h3>
            <Link
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              href={`${url}`}
              target={targetBlank ? "_blank" : "_self"}
              rel="noreferrer noopener"
              aria-label={name}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="inline-flex items-center leading-tight font-medium text-slate-200 text-sm mr-2 mb-2"
              >
                <span className="mt-2">
                  <div className="flex items-center rounded-full bg-gradient-to-r from-teal-400/20 to-blue-400/20 px-3 py-1 text-xs font-medium leading-5 text-teal-300 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-200">
                    {technology}
                  </div>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
