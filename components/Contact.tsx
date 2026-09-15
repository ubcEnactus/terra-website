export default function Contact() {
  return (
    <div className="bg-white">
      <p className="text-[#2B5C42] font-extralight text-[18px] sm:text-[22px] md:text-[25px] text-center px-[5%]">
        Interested in chatting? Email us at{' '}
        <a href="mailto:terraubc@gmail.com" className="font-semibold no-underline text-[#2B5C42]">
          terraubc@gmail.com
        </a>
      </p>
      {/* TO BE: /Contact for contact form page */}
      <a href="mailto:terraubc@gmail.com" className="no-underline">
        <button className="px-6 py-4 sm:px-8.75 sm:py-6.25 border border-[#2B5C42] rounded-[5px] cursor-pointer text-[#2B5C42] bg-white text-center block mx-auto mt-8.75 text-[20px] sm:text-[26px] md:text-[30px] font-[inherit] transition-all duration-300 hover:bg-[#2B5C42] hover:text-white">
          CONTACT
        </button>
      </a>
    </div>
  );
}