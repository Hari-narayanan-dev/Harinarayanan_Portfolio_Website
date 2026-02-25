import { useState } from "react";
import "./NixieClock.css";

export default function NixieClock() {
  const [isOn, setIsOn] = useState(true);

  return (
    <>
      {/* Noise SVG */}
      <svg id="noise-svg">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.5"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect id="noise-rect" filter="url(#noiseFilter)" />
      </svg>

      {/* Clock */}
      <div className={`clock ${isOn ? "" : "off"}`}>
        <div className="shadow" />

        <div className="base-container">
          <div className="base">
            <div />
          </div>
        </div>

        <div className="small-outer-pipe">
          <div className="small-inner-pipe" />
        </div>

        <div className="outer-pipe">
          <div className="inner-pipe" />
        </div>

        <div className="pipe-accents">
          <div className="top-tube" />
          <div className="tube-holders">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} />
            ))}
          </div>
          <div className="top" />
          <div className="topinset" />
          <div className="left">
            <div /><div /><div />
          </div>
          <div className="right">
            <div /><div /><div />
          </div>
          <div className="bottom-left" />
          <div className="bottom-right" />
        </div>

        {/* Display */}
        <div className="display">
          {[0, 1, 2, 3, 4, 5].map(row => (
            <div className="row" key={row}>
              {[0, 1].map(col => (
                <div className="col" key={col}>
                  <div>8</div>
                  <div>0</div>
                  <div>0</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="glass-tube" />
        <div className="hex">
          <div className="overlay" />
        </div>

        <div className="tube-base-container">
          <div className="wires">
            <div /><div />
          </div>
          <div className="tube-base" />
          <div className="rods">
            <div className="left-rod" />
            <div className="center-rod" />
            <div className="right-rod" />
          </div>
          <div className="tube-btm" />
        </div>

        {/* Power Button */}
        <div
          className="button"
          onClick={() => setIsOn(prev => !prev)}
        >
          <div />
        </div>
      </div>
    </>
  );
}
