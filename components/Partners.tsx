import Image from 'next/image';

const partners = [
  { src: '/assets/EnactusUBCLogo.png', alt: 'Enactus UBC Logo' },
  { src: '/assets/AMSLogo.png', alt: 'AMS UBC Logo' },
  { src: '/assets/UBCLogoLong.png', alt: 'UBC Logo' },
  { src: '/assets/UBCFoodHub.png', alt: 'UBC Food Hub Logo' },
  { src: '/assets/earthApple.png', alt: 'Earth Apple Logo' },
  { src: '/assets/AMSFoodbank.png', alt: 'AMS Food Bank Logo' },
  { src: '/assets/secondHarvest.png', alt: 'Second Harvest Logo' },
  { src: '/assets/greendaleAcres.webp', alt: 'Greendale Acres Logo' },
];

const allPartners = [...partners, ...partners];

export default function Partners() {
  return (
    <div id="partners" className="bg-white py-[50px] px-[10%]">
      <h2 className="text-[35px] text-[#2B5C42] font-semibold mb-[60px]">
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
              className="h-[50px] mr-[40px] sm:h-[60px] sm:mr-[55px] md:h-[70px] md:mr-[70px] w-auto shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}