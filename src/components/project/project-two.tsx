"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const project_data = [
  {
    id: 1,
    img: "/assets/img/home-02/project/1.png",
    subtitle: "Concept",
    title: "High Lights",
  },
  {
    id: 2,
    img: "/assets/img/home-02/project/2.png",
    subtitle: "Branding",
    title: "Fashion",
  },
  {
    id: 3,
    img: "/assets/img/home-02/project/3.png",
    subtitle: "Concept",
    title: "Branding",
  },
  {
    id: 4,
    img: "/assets/img/home-02/project/4.png",
    subtitle: "Concept",
    title: "High Lights",
  },
  {
    id: 5,
    img: "/assets/img/home-02/project/5.png",
    subtitle: "Concept",
    title: "High Lights",
  },
  {
    id: 6,
    img: "/assets/img/home-02/project/6.png",
    subtitle: "Branding",
    title: "Fashion",
  },
  {
    id: 7,
    img: "/assets/img/home-02/project/7.png",
    subtitle: "Concept",
    title: "Branding",
  },
];

export default function ProjectTwo() {
  return (
    <section className="tp-project-2-area tpproject">
      <div className="panels p-relative fix">
        <h1 className="text-center">
          Endorsed by The Pioneers in Sustainability
        </h1>
        <div className="panels-container d-flex">
          {project_data.map((item) => (
            <div key={item.id} className="panel">
              <div className="tp-project-2-item  p-relative">
                <div className="tp-project-2-thumb">
                  <Image
                    src={item.img}
                    alt="p-img"
                    width={890}
                    height={700}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
                {/* <div className="tp-project-2-content">
                  <span>{item.subtitle}</span>
                  <h4 className="tp-project-2-title-sm">
                    <Link href="/portfolio-details-1">{item.title}</Link>
                  </h4>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
