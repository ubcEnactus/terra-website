'use client';

import { useState } from 'react';

const pillars = [
  { title: 'DIVERT', text: 'EVERY WEEK, WE RESCUE PRE-CONSUMER FOOD WASTE FROM CAMPUS DINING HALLS', image: '/assets/1.png' },
  { title: 'TRANSFORM', text: 'WE TURN FOOD WASTE INTO NUTRIENT-RICH SLOW-RELEASE FERTILIZER PODS: BLOOM PODS', image: '/assets/2.png' },
  { title: 'GROW', text: 'WE HELP OUR COMMUNITY GROW HEALTHIER PLANTS AND GARDENS', image: '/assets/3.png' },
];

function PillarCard({ pillar }: { pillar: typeof pillars[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`w-[95%] rounded-[10px] my-[25px] cursor-pointer bg-cover bg-center transition-all duration-300 overflow-hidden ${
        hovered ? 'h-[200px]' : 'h-[150px]'
      }`}
      style={{ backgroundImage: `url('${pillar.image}')` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-white pt-[18px] sm:pt-[26px] md:pt-[35px] ml-[5%] text-[28px] sm:text-[38px] md:text-[50px]">
        {pillar.title}
      </h3>
      <p className="text-white ml-[5%] mt-[5px] max-w-[80%] text-[13px] sm:text-sm md:text-base">
        {pillar.text}
      </p>
    </div>
  );
}

export default function Pillars() {
  return (
    <div className="bg-white py-[50px] px-[10%]">
      <h2 className="text-[35px] text-[#2B5C42] font-semibold mb-[60px]">
        Our 3 Pillars
      </h2>
      {pillars.map((p) => <PillarCard key={p.title} pillar={p} />)}
    </div>
  );
}