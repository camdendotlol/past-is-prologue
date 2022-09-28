import React from "react";
import { BannerContainer } from "./Banner.styled";

interface BannerProps {
  animated?: boolean;
  imagePath?: string;
  subtitle?: string;
  title?: string;
}

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <BannerContainer>
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
    </BannerContainer>
  )
}

export default Banner
