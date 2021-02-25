import React from "react";
import { render } from "react-dom";
import { Timeline, Tween } from "react-gsap";

const Target = React.forwardRef((ref, targets: any) => (
  <g id="elevation_cubes" ref={group => targets.set("elevationCubes", group)}>
    <g id="back_cube" ref={group => targets.set("backCube", group)}>
      <polygon
        style={{ fill: "#65D972" }}
        points="126.38,153.41 126.38,113.45 94.74,97.23 94.74,137.98"
      />
      <polygon
        style={{ fill: "#9BF29D" }}
        points="159.22,137.58 126.38,153.41 126.38,113.45 159.22,97.63"
      />
      <polygon
        style={{ fill: "#CFF8CC" }}
        points="126.38,82.59 94.74,97.23 126.38,113.45 159.22,97.63"
      />
    </g>
    <g id="left_cube" ref={group => targets.set("leftCube", group)}>
      <polygon
        style={{ fill: "#65D972" }}
        points="95.14,167.78 95.14,127.82 63.49,111.6 63.49,152.35"
      />
      <polygon
        style={{ fill: "#9BF29D" }}
        points="127.98,151.96 95.14,167.78 95.14,127.82 127.98,112"
      />
      <polygon
        style={{ fill: "#CFF8CC" }}
        points="95.14,96.97 63.49,111.6 95.14,127.82 127.98,112"
      />
    </g>
    <g id="right_cube" ref={group => targets.set("rightCube", group)}>
      <polygon
        style={{ fill: "#65D972" }}
        points="158.63,168.44 158.63,128.48 126.98,112.26 126.98,153.01"
      />
      <polygon
        style={{ fill: "#9BF29D" }}
        points="191.46,152.62 158.63,168.44 158.63,128.48 191.46,112.66"
      />
      <polygon
        style={{ fill: "#CFF8CC" }}
        points="158.63,97.63 126.98,112.26 158.63,128.48 191.46,112.66"
      />
    </g>
    <g id="front_cube" ref={group => targets.set("frontCube", group)}>
      <polygon
        style={{ fill: "#92DDF3" }}
        points="127.38,142.33 127.38,182.29 159.43,168.04 159.63,128.48"
      />
      <polygon
        style={{ fill: "#C7F1F9" }}
        points="127.98,112 95.14,127.82 127.38,142.33 159.63,128.48"
      />
      <polygon
        style={{ fill: "#58B7DC" }}
        points="95.14,167.78 95.14,127.82 127.38,142.33 127.38,182.29"
      />
    </g>
  </g>
));

const Illustration = () => {
  return (
    <div style={{ maxWidth: 400, display: "flex", margin: "0 auto" }}>
      <svg
        id="home_illustration"
        viewBox="0 0 255.63 379.4"
        style={{ width: "100%" }}
      >
        <g id="base">
          <polygon
            style={{ fill: "#003064" }}
            points="0.07,220.58 0.07,181.29 127.98,239.84 127.38,279.4"
          />
          <polygon
            style={{ fill: "#004178" }}
            points="255.63,181.29 127.98,239.84 127.38,279.4 255.63,220.58"
          />
          <polygon
            style={{ fill: "#00548C" }}
            points="127.98,122.47 0.07,181.29 127.98,239.84 255.63,181.29"
          />
        </g>
        <Timeline target={<Target />}>
          <Tween to={{ y: -60 }} target="elevationCubes" position={0} />
          <Tween to={{ y: -50 }} target="frontCube" position={1} />
          <Tween to={{ x: -10, y: 10 }} target="leftCube" position={1} />
          <Tween to={{ x: 10, y: 10 }} target="rightCube" position={1} />
          <Tween to={{ y: 25 }} target="backCube" position={1} />
        </Timeline>
        <g id="yellow_cube">
          <polygon
            style={{ fill: "#F4AC02" }}
            points="159.22,168.04 159.22,127.96 222.61,157.05 222.65,196.41"
          />
          <polygon
            style={{ fill: "#F8C73F" }}
            points="255.48,143.25 222.61,157.05 222.65,196.41 255.63,181.29"
          />
          <polygon
            style={{ fill: "#FBD865" }}
            points="192.46,112.66 159.22,127.96 222.61,157.05 255.48,143.25"
          />
        </g>
        <g id="pink_cube">
          <polygon
            style={{ fill: "#D62A5E" }}
            points="0.07,181.71 0,140.67 63.69,171.53 63.69,210.49"
          />
          <polygon
            style={{ fill: "#E65B77" }}
            points="127.38,182.29 63.69,210.49 63.69,171.53 127.38,142.33"
          />
          <polygon
            style={{ fill: "#F27D8A" }}
            points="63.49,111.6 0,140.67 63.69,171.53 127.38,142.33"
          />
        </g>
        <Tween from={{ y: -200 }} ease="bounce.out">
          <circle r="10" cx="128" cy="210" fill="#66136f" />
        </Tween>
      </svg>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Illustration />
    </div>
  );
};

render(<App />, document.getElementById("root"));
