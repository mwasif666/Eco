"use client";
import React, { useState } from "react";
import { Leaf } from "../svg";

const VideoTwo = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tp-video-area">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-video-wrap p-relative">
              {/* 🔹 Background Video */}
              <div className="tp-video-bg">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/_GZIBA68s20?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=_GZIBA68s20"
                  title="Background Video"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>

              {/* 🔹 Center Play Button */}
              <div className="tp-video-content text-center">
                <button
                  className="tp-play-btn"
                  onClick={() => setShowModal(true)}
                  aria-label="Play Video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Modal for YouTube Video */}
      {showModal && (
        <div className="tp-video-modal" onClick={() => setShowModal(false)}>
          <div
            className="tp-video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/_GZIBA68s20?autoplay=1&mute=0&controls=1&modestbranding=1"
              title="YouTube Modal Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            <button
              className="tp-modal-close"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ✅ Original Clean Styling */}
      <style jsx>{`
        .tp-video-area {
          position: relative;
          z-index: 1;
          overflow: hidden;
          border-radius: 12px;
        }

        .tp-video-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }

        .tp-video-bg {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 12px;
        }

        .tp-video-bg iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .tp-video-content {
          position: absolute;
          top: 50%;
          left: 50%;
          right: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .tp-play-btn {
          width: 100px;
          height: 100px;
          border: 2px solid white;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .tp-play-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        /* 🔹 Modal Styles */
        .tp-video-modal {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .tp-video-modal-content {
          position: relative;
          width: 90%;
          max-width: 900px;
          aspect-ratio: 16 / 9;
        }

        .tp-video-modal-content iframe {
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }

        .tp-modal-close {
          position: absolute;
          top: -45px;
          right: -10px;
          background: transparent;
          border: none;
          color: white;
          font-size: 32px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .tp-modal-close:hover {
          color: #ff6b6b;
        }
      `}</style>
    </div>
  );
};

export default VideoTwo;
