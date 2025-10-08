import React from "react";
import Image from "next/image";

import { ProjectShape, RightArrow } from "../svg";
// images
import port_1 from "@/assets/img/home-02/portfolio/1A.png";
import port_2 from "@/assets/img/home-02/portfolio/1B.png";
import port_3 from "@/assets/img/home-02/portfolio/2A.png";
import port_4 from "@/assets/img/home-02/portfolio/2B.png";
import port_5 from "@/assets/img/home-02/portfolio/3A.png";
import port_6 from "@/assets/img/home-02/portfolio/3B.png";
import port_7 from "@/assets/img/home-02/portfolio/4A.png";
import port_8 from "@/assets/img/home-02/portfolio/4B.png";
import icon1 from "@/assets/img/home-02/portfolio/1.svg";
import icon2 from "@/assets/img/home-02/portfolio/2.svg";
import icon3 from "@/assets/img/home-02/portfolio/3.svg";
import icon4 from "@/assets/img/home-02/portfolio/4.svg";
import Link from "next/link";

// portfolio data
const project_data = [
  {
    id: 1,
    img_1: port_1,
    img_2: port_2,
    icon: icon1,
    meta: "Afforestation, reforestation, and land restoration to capture CO2. Carbon sequestration, biodiversity, ecosystem restoration, community empowerment.",
    title: "Green Projects",
  },
  {
    id: 2,
    img_1: port_3,
    img_2: port_4,
    icon: icon2,
    meta: "Renewable energy and distributed clean energy systems Emissions avoidance, energy access, local economic growth",
    title: "Yellow Projects",
  },
  {
    id: 3,
    img_1: port_5,
    img_2: port_6,
    icon: icon3,
    meta: "Mangrove and coastal ecosystem projects focused on blue carbon Shoreline protection, carbon capture in marine environments, sustainable fisheries",
    title: "Blue Projects",
  },
  {
    id: 4,
    img_1: port_7,
    img_2: port_8,
    icon: icon4,
    meta: "Advisory services that enable effective climate action and high-integrity carbon strategies. Carbon accounting, MRV (monitoring, reporting, verification), ESG alignment, capacity building",
    title: "Consultancy Projects",
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-3-area ${
        style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"
      }`}
    >
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Latest <span>Projects</span>
                </h4>
                <div className="tp-project-3-btn-box">
                  <Link
                    className="tp-btn-zikzak p-relative"
                    href="/portfolio-wrapper"
                  >
                    <span className="zikzak-content">
                      See <br /> All Project
                      <RightArrow clr="#19191A" />
                    </span>
                    <ProjectShape />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item, i) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_1}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <Image
                        src={item.icon}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                      <h4 className="tp-project-3-title-sm">
                        <Link href="/portfolio-details-1">{item.title}</Link>
                      </h4>
                      <div className="tp-project-3-border color-1 text-center">
                        <span></span>
                      </div>
                      <span
                        className=""
                        style={{
                          fontSize: "16px",
                          width: "70%",
                        }}
                      >
                        {item.meta}{" "}
                      </span>
                      <p>
                        <Link
                          className="tp-btn-project-sm"
                          href="/portfolio-details-1"
                          style={{
                            marginTop: "20px",
                            backgroundColor: "#00db69",
                            color: "white",
                          }}
                        >
                          See Project
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_2}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
