export default function Contact() {
  return (
    <div className="bg-white">
      <p className="text-[#2B5C42] font-extralight text-[25px] text-center">
        Interested in chatting? Email us at{' '}
        <a href="mailto:terraubc@gmail.com" className="font-semibold no-underline text-[#2B5C42]">
          terraubc@gmail.com
        </a>
      </p>

      <a href="/Contact" className="no-underline">
        <button className="px-[35px] py-[25px] border border-[#2B5C42] rounded-[5px] cursor-pointer text-[#2B5C42] bg-white text-center block mx-auto mt-[35px] text-[30px] font-[inherit] transition-all duration-300 hover:bg-[#2B5C42] hover:text-white">
          CONTACT
        </button>
      </a>
    </div>
  );
}