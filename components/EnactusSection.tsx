import Image from 'next/image';

export default function EnactusSection() {
  return (
    <div className='bg-white'>
      <h2 className="px-[10%] py-5 text-[35px] text-[#2B5C42] font-bold">
        About Enactus UBC
      </h2>

      <div className="bg-white px-[10%] py-5 flex flex-col md:flex-nowrap md:flex-row justify-center items-start gap-6 md:gap-0">

        <div className="w-full md:flex-[1_1_50%] md:max-w-[50%] md:pr-8.75">
          <Image
            src="/assets/regional.png"
            alt="Enactus UBC Team"
            width={600}
            height={400}
            className="max-w-full h-auto rounded-[10px]"
          />
        </div>

        <div className="w-full md:flex-[1_1_50%] md:max-w-[50%] p-2.5">
          <h2 className="text-[#2B5C42] my-2.5 text-[25px] font-bold">What is Enactus?</h2>
          <p className="text-[#2B5C42] font-extralight text-[18px]">
            Enactus is a global, student-led organization dedicated to enacting positive social
            change through the lens of entrepreneurship. Core to the Enactus mission is a focus
            on youth empowerment, sustainability, and community-building.
          </p>

          <h2 className="text-[#2B5C42] my-[10px] text-[25px] font-bold">What about Enactus UBC?</h2>
          <p className="text-[#2B5C42] font-extralight text-[18px]">
            Enactus UBC is home to a team of over 100 undergraduate students who collaborate to
            create new and unique projects that serve our campus and community. Learn more on our{' '}
            <a
              href="https://enactusubc.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2B5C42] underline font-medium transition-all duration-300 hover:text-[#4dac79]"
            >
              Enactus UBC website
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}