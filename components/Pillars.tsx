'use client';

import { useState } from 'react';

const pillars = [
  { title: 'DIVERT', text: 'EVERY WEEK, WE RESCUE PRE-CONSUMER FOOD WASTE FROM CAMPUS DINING HALLS', image: '/assets/divert.jpg' },
  { title: 'TRANSFORM', text: 'WE TURN FOOD WASTE INTO NUTRIENT-RICH SLOW-RELEASE FERTILIZER PODS: BLOOM PODS', image: '/assets/transform.png' },
  { title: 'GROW', text: 'WE HELP OUR COMMUNITY GROW HEALTHIER PLANTS AND GARDENS', image: '/assets/grow.jpg', position: 'center 55%', overlay: true },
];

function PillarCard({ pillar }: { pillar: typeof pillars[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`w-[95%] rounded-[10px] my-6.25 cursor-pointer bg-cover transition-all duration-300 overflow-hidden ${
        hovered ? 'h-50' : 'h-37.5'
      }`}
      style={{
        backgroundImage: pillar.overlay
          ? `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('${pillar.image}')`
          : `url('${pillar.image}')`,
        backgroundPosition: pillar.position ?? 'center',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-white pt-4.5 sm:pt-6.5 md:pt-8.75 ml-[5%] text-[28px] sm:text-[38px] md:text-[50px]">
        {pillar.title}
      </h3>
      <p className="text-white ml-[5%] mt-1.25 max-w-[80%] text-[13px] sm:text-sm md:text-base">
        {pillar.text}
      </p>
    </div>
  );
}

export default function Pillars() {
  return (
    <div className="bg-white py-12.5 px-[10%]">
      <h2 className="text-[35px] text-[#2B5C42] font-semibold mb-15">
        Our 3 Pillars
      </h2>
      {pillars.map((p) => <PillarCard key={p.title} pillar={p} />)}
    </div>
  );
}