import React from "react";
import { Fade } from "react-awesome-reveal";

function Counter() {
  return (
    <div className="performance">
      <div className="performance_box container">
        <div className="performance_content">
          <div className="sections">
            <ul className="d_grid">
              <Fade cascade triggerOnce direction="down" damping={0.5}>
                <li>
                  <span>3,092+</span>
                  <h5>Safe Cargo</h5>
                </li>
                <li>
                  <span>592+</span>
                  <h5>Ware House</h5>
                </li>
                <li>
                  <span>152+</span>
                  <h5>Operating Coutries</h5>
                </li>
                <li>
                  <span>300+</span>
                  <h5>Representative Office</h5>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
