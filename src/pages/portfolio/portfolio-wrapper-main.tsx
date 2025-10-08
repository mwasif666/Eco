"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ProjectFour from "@/components/project/project-four";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";

const PortfolioWrapperMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectThreeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio hero */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <h4 className="tm-hero-title tp-char-animation">
                        From Vision To Impact, Our Projects
                      </h4>
                    </div>
                    <div className="tm-hero-text">
                      <p className="tp_title_anim">
                        We strategically Implement our carbon projects in
                        developing regions, partnering with local communities
                        and governments to maximize both environmental and
                        social value. Our focus currently is on four primary
                        types of projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}

            {/* portfolio area */}
            <ProjectFour style_2={true} />
            {/* portfolio area */}
          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioWrapperMain;
