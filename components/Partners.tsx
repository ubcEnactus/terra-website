import Image from 'next/image';

const partners = [
  { src: '/assets/EnactusUBCLogo.png', alt: 'Enactus UBC Logo' },
  { src: '/assets/Feast-Logo.png', alt: 'Feast UBC Dining Hall' },
  { src: '/assets/FoodCycler.png', alt: 'FoodCycler' },
  { src: '/assets/Glocal.png', alt: 'Glocal' },
  { src: '/assets/UBCLogoLong.png', alt: 'UBC' },
  { src: '/assets/ubc-facilities.jpeg', alt: 'UBC Facilities' }
];

const allPartners = [...partners, ...partners];

export default function Partners() {
  return (
    <div id="partners" className="bg-white py-12.5 px-[10%]">
      <h2 className="text-[35px] text-[#2B5C42] font-semibold mb-15">
        We Work With...
      </h2>

      <div className="overflow-hidden">
        <div className="flex w-max animate-scroll">
          {allPartners.map((partner, i) => (
            <Image
              key={i}
              src={partner.src}
              alt={partner.alt}
              width={200}
              height={70}
              className={`w-auto shrink-0 object-contain mr-10 sm:mr-13.75 md:mr-17.5 ${
                partner.src === '/assets/FoodCycler.png'
                  ? 'h-8 sm:h-10 md:h-12'
                  : 'h-12.5 sm:h-15 md:h-17.5'
              }`}
              style={{ width: 'auto' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}