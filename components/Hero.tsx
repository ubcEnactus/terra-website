export default function Hero() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat flex"
      style={{ backgroundImage: "url('/assets/heroBG.png')" }}
    >
      <div className="pl-[6%] pt-[110px] max-w-[88%] sm:pl-[8%] sm:pt-[140px] sm:max-w-[70%] md:pl-[10%] md:pt-[170px] md:max-w-[55%]">
        <h1 className="text-[56px] sm:text-[84px] md:text-[120px] text-[#2B5C42] font-extrabold leading-none">
          Terra
        </h1>
        <p className="text-[15px] sm:text-[18px] md:text-[23px] text-[#2B5C42] mt-[5px] font-light pl-[5px]">
          A student-run sustainability initiative closing the loop on food waste
        </p>
        <p className="text-[13px] sm:text-[15px] md:text-[18px] text-[#2B5C42] mt-[30px] pl-[5px] font-light">
          An{" "}
          <a href="https://enactusubc.ca/" target="_blank" rel="noopener noreferrer"
            className="font-semibold text-[#2B5C42] no-underline">
            Enactus UBC
          </a>{" "}
          project
        </p>
      </div>
    </div>
  );
}