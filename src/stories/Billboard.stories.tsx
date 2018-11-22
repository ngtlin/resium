import React from "react";
import { Cartesian3, Color, Transforms } from "cesium";
import { storiesOf } from "@storybook/react";

import Viewer from "../Viewer";
import Billboard from "../Billboard";
import BillboardCollection from "../BillboardCollection";

const center = Cartesian3.fromDegrees(-75.59777, 40.03883);
import exampleImg from "./assets/example.jpg";

export default () => {
  storiesOf("Billboard", module).add("default", () => (
    <Viewer full>
      <BillboardCollection modelMatrix={Transforms.eastNorthUpToFixedFrame(center)}>
        <Billboard
          color={Color.ORANGE}
          position={new Cartesian3(0.0, 0.0, 0.0)}
          image={exampleImg}
          scale={0.1}
        />
        <Billboard
          color={Color.YELLOW}
          position={new Cartesian3(1000000.0, 0.0, 0.0)}
          image={exampleImg}
          scale={0.1}
        />
        <Billboard
          color={Color.GREEN}
          position={new Cartesian3(0.0, 1000000.0, 0.0)}
          image={exampleImg}
          scale={0.1}
        />
        <Billboard
          color={Color.CYAN}
          position={new Cartesian3(0.0, 0.0, 1000000.0)}
          image={exampleImg}
          scale={0.1}
        />
      </BillboardCollection>
    </Viewer>
  ));
};