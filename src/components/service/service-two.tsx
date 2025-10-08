"use client";
import React, { useState } from "react";
import { Leaf } from "../svg";
import Image from "next/image";
// service icon
import ser_1 from "@/assets/img/home-02/service/1.svg";
import ser_2 from "@/assets/img/home-02/service/2.svg";
import ser_3 from "@/assets/img/home-02/service/3.svg";
import ser_4 from "@/assets/img/home-02/service/4.svg";
// dummy images for left side (replace with your real ones)
import img1 from "@/assets/img/home-02/service/1.png";
import img2 from "@/assets/img/home-02/service/2.png";
import img3 from "@/assets/img/home-02/service/3.png";
import img4 from "@/assets/img/home-02/service/4.png";

const service_accordion = [
  {
    id: 1,
    icon: ser_1,
    title: "Identify",
    desc: "We pinpoint high-potential carbon removal opportunities in critical regions, focusing on scalable projects with significant environmental and social co-benefits.",
    img: img1,
  },
  {
    id: 2,
    icon: ser_2,
    title: "Verify",
    desc: "Our proprietary Digital Measurement, Reporting and Verification (DMRV) solution uses advance technology like satellite imagery, drones and smart sensors alongside A.I Driven analysis to ensure unparalleled accuracy and transparency. This provides real-time audit ready data for every project.",
    img: img2,
  },
  {
    id: 3,
    icon: ser_3,
    title: "Monetize",
    desc: "We provide a secure and efficient platform for monetizing carbon assets, connecting project developers with corporate partners seeking high integrity, verified carbon credits.",
    img: img3,
  },
  {
    id: 4,
    icon: ser_4,
    title: "Impact",
    desc: "We deliver measurable climate benefits and sustainable value. Our projects go beyond carbon removal by creating jobs, fostering biodiversity and supporting community well-being, directly contributing to the United Nations' Sustainable Development Goals (SDGs).",
    img: img4,
  },
];

export default function ServiceTwo() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div
      className="tp-service-2-area tp-service-2-pt pb-150 z-index-5"
      style={{
        marginTop: "370px",
      }}
    >
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-2-title-box mb-70">
              <div className="row">
                <div className="col-xl-4">
                  <span className="tp-section-subtitle-3">
                    <span>
                      <Leaf />
                    </span>
                    SERVICES
                  </span>
                </div>
                <div className="col-xl-8">
                  <h4 className="tp-section-title-24">
                    Our Carbon Intelligence platform helps organizations
                    measure, verify, and optimize their carbon footprint. By
                    combining Nature-Based projects with AI-Powered digital
                    monitoring, we turn climate ambition into measurable &
                    verifiable action.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image + Accordion */}
        <div className="row align-items-center">
          {/* Left Side Image */}
          <div className="col-xxl-6 col-xl-4 col-lg-4">
            <div className="tp-service-2-shape-img text-center text-lg-start position-relative">
              <div
                className="fade-image-wrapper"
                style={{ position: "relative", minHeight: "400px" }}
              >
                {service_accordion.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      opacity: activeId === item.id ? 1 : 0,
                      transition: "opacity 0.6s ease-in-out",
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Accordion */}
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="tp-service-2-accordion-box">
              <div className="accordion" id="accordionExample">
                {service_accordion.map((s) => (
                  <div key={s.id} className="accordion-items">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-buttons ${
                          activeId === s.id ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${s.id}`}
                        aria-expanded={activeId === s.id}
                        aria-controls={`collapse-${s.id}`}
                        onClick={() => setActiveId(s.id)}
                      >
                        <span>
                          <Image src={s.icon} alt="icon" />
                        </span>
                        {s.title}
                        <span className="accordion-icon"></span>
                      </button>
                    </h2>
                    <div
                      id={`collapse-${s.id}`}
                      className={`accordion-collapse collapse ${
                        activeId === s.id ? "show" : ""
                      }`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
