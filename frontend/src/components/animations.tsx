import React from "react";
import Lottie from "lottie-react";

//Props da animação
type AnimationItem = {
  id: number;
  data: object; // o JSON da animação
  style?: React.CSSProperties;
  loop?: boolean;
};

type AnimationsProps = {
  animations: AnimationItem[];
};

export default function Animations({ animations }: AnimationsProps) {
  return (
    <div className="animationsContainer">
      {animations.map(anim => (
        <Lottie
          key={anim.id}
          animationData={anim.data}
          loop={anim.loop ?? true}
          style={anim.style ?? { width: 200, height: 200 }}
        />
      ))}
    </div>
  );
}