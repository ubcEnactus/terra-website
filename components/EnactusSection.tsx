import Image from 'next/image';

export default function EnactusSection() {
  return (
    <>
      <h2 className="px-[10%] py-[20px] text-[35px] text-[#2B5C42] font-semibold">
        About Enactus UBC
      </h2>

      <div className="bg-white px-[10%] py-[20px] flex flex-nowrap justify-center items-start">

        <div className="flex-[1_1_50%] max-w-[50%] pr-[35px]">
          <Image
            src="/assets/regional.png"
            alt="Enactus UBC Team"
            width={600}
            height={400}
            className="max-w-full h-auto rounded-[10px]"
          />
        </div>

        <div className="flex-[1_1_50%] max-w-[50%] p-[10px]">
          <h2 className="text-[#2B5C42] my-[10px] text-[25px]">What is Enactus?</h2>
          <p className="text-[#2B5C42] font-extralight text-[18px]">
            Enactus is a global, student-led organization dedicated to enacting positive social
            change through the lens of entrepreneurship. Core to the Enactus mission is a focus
            on youth empowerment, sustainability, and community-building.
          </p>

          <h2 className="text-[#2B5C42] my-[10px] text-[25px]">What about Enactus UBC?</h2>
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
    </>
  );
}