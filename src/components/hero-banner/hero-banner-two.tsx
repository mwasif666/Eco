"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Leaf } from "../svg";
import hero_bg from "@/assets/img/Circle.svg";

const HeroBannerTwo = () => {
  return (
    <div className="tp-hero-2-area tp-hero-2-pt">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-2-wrapper-main">
              <div className="tp-hero-2-wrapper d-flex align-items-center p-relative">
                <div className="tp-hero-2-bg tp-gsap-bg tp-hero-bg-single">
                  <Image src={hero_bg} alt="hero-bg" />
                </div>
                <div className="tp-hero-2-content-wrap p-relative">
                  <div className="tp-hero-2-title-box">
                    <h2 className="tp-hero-2-title text-1 z-index-5">
                      Closing The Net Zero Gap <br /> With Trust, Tech and
                      Impact
                    </h2>
                    {/* <h2 className="tp-hero-2-title text-2">
                      <span>& Branding</span>
                    </h2> */}
                  </div>
                  <div className="tp-hero-2-content d-flex align-items-center justify-content-between flex-wrap ">
                    <div>
                      <p>
                        We delivers high-integrity, verifiable carbon credits
                        through nature-based projects powered by advanced
                        digital measurement, reporting, and verification (dMRV).
                      </p>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-4">
                      <Link
                        className="tp-btn-white"
                        style={{
                          backgroundColor: "#00db69",
                        }}
                        href="#"
                      >
                        Partner With Us <span>→</span>
                      </Link>
                      <Link className="tp-btn-white" href="#">
                        Explore Solutions <span>↓</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerTwo;
