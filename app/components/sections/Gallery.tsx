"use client";
import { storageCdn } from "@/app/storage/storage";
import "swiper/css/navigation";
import "swiper/css";
import { CardSlider, PropsCardSlider } from "../cards/CardSlider";
export const Gallery = () => {
  const cards: PropsCardSlider[] = [
    {
      images: [
        storageCdn.projects.project10,
        storageCdn.projects.project11,
        storageCdn.projects.project12,
      ],
      content: {
        title: "Noteworthy technology acquisitions 2021",
        description: `Here are the biggest enterprise technology acquisitions of 2021
                  so far, in reverse chronological order.`,
      },
    },
    {
      images: [
        storageCdn.projects.project20,
        storageCdn.projects.project21,
        storageCdn.projects.project22,
      ],
      content: {
        title: "Noteworthy technology acquisitions 2021",
        description: `Here are the biggest enterprise technology acquisitions of 2021
                  so far, in reverse chronological order.`,
      },
    },
    {
      images: [
        storageCdn.projects.project30,
        storageCdn.projects.project31,
        storageCdn.projects.project32,
      ],
      content: {
        title: "Noteworthy technology acquisitions 2021",
        description: `Here are the biggest enterprise technology acquisitions of 2021
                  so far, in reverse chronological order.`,
      },
    },
    {
      images: [
        storageCdn.projects.project40,
        storageCdn.projects.project41,
        storageCdn.projects.project42,
      ],
      content: {
        title: "Noteworthy technology acquisitions 2021",
        description: `Here are the biggest enterprise technology acquisitions of 2021
                  so far, in reverse chronological order.`,
      },
    },
  ];

  return (
    <section className="bg-white  py-10">
      <div className="container max-w-screen-xl mx-auto ">
        <h1 className="font-semibold text-gray-900 text-4xl text-center mb-10">
          Our Projects
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 px-1">
          {cards.map((card, index) => (
            <CardSlider key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};
