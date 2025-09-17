import React from "react";
import Carousel from "./Carousel";
import type { CarouselItem } from "./Carousel";
import "../styles/testimonials.css";
import { FiStar } from "react-icons/fi";

const REVIEWS: CarouselItem[] = [
  {
    id: 1,
    title: "Marie Dupont",
    description:
      "The classes are excellent — I regained flexibility and calm in just a few weeks.",
    icon: <FiStar className="h-[16px] w-[16px] text-white" />,
  },
  {
    id: 2,
    title: "Ahmed",
    description:
      "Warm atmosphere and attentive teachers. Recommended for all levels.",
    icon: <FiStar className="h-[16px] w-[16px] text-white" />,
  },
  {
    id: 3,
    title: "Sofia",
    description:
      "Tailored program and visible progress. Very happy with the small-group sessions.",
    icon: <FiStar className="h-[16px] w-[16px] text-white" />,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section py-5">
      <div className="container testimonials">
        <h3 className="text-center mb-4">What our clients say</h3>
        <Carousel items={REVIEWS} baseWidth={900} autoplay pauseOnHover loop />
      </div>
    </section>
  );
};

export default Testimonials;
