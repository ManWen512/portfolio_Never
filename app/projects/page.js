// app/blog/page.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function ProjectListPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8"> Projects </h1>
      <div className="grid grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="block border rounded p-4 hover:shadow-lg transition "
          >
            <h2 className="text-2xl font-semibold text-center mb-2">
              {project.title}
            </h2>
            <div className="grid grid-cols-1 "> 
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="rounded"
              />
              <p className="mt-2 text-white grid grid-cols-2 gap-1">
                <span className="font-bold flex justify-end">
                  Release Date:{" "}
                </span>
                <span> {project.releaseDate}</span>
              </p>
              <p className="mt-2 text-white grid grid-cols-2 gap-1">
                <span className="font-bold flex justify-end">Platforms: </span>
                <span> {project.platforms}</span>
              </p>
              <p className="mt-2 text-white grid grid-cols-2 gap-1">
                <span className="font-bold flex justify-end">
                  Programming Languages:{" "}
                </span>
                <span> {project.language}</span>
              </p>

              <p className="mt-2 text-white">{project.snippet}</p>
              <p className="mt-2 text-indigo-600 font-medium text-center">
                More Info
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
