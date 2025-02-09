"use client"
import { TypeAnimation } from "react-type-animation";

const TypeAnimationStyle = () => {
    return (
        <TypeAnimation
          sequence={[
            'A Web Developer',
            1000,
            'MERN Stack Developer',
            1000,
            'Next JS Developer',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        />
    );
};

export default TypeAnimationStyle;