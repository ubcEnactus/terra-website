const contactComponents = [
  {
    name: 'name',
    label: 'Full Name',
    placeholder: 'John Doe',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'xyz@gmail.com',
    type: 'email',
  },
  {
    name: 'message',
    label: 'Your Message',
    placeholder: 'The quick brown fox jumped over the lazy dog',
    type: 'textarea',
  },
];

export default function ContactForm() {
  return (
    <form className="flex w-full max-w-2xl flex-col gap-6">
      {contactComponents.map((component) => (
        <div key={component.name} className="flex flex-col gap-2">
          <label
            htmlFor={component.name}
            className="text-sm font-medium text-[#1C3026]"
          >
            {component.label}
          </label>

          {component.type === 'textarea' ? (
            <textarea
              id={component.name}
              name={component.name}
              placeholder={component.placeholder}
              rows={6}
              className="w-full resize-none rounded-lg border border-[#B8C5BA] bg-[#F7F8F4] px-4 py-3 text-[#1C3026] outline-none placeholder:text-[#7A877D] focus:border-[#4F725B] focus:ring-2 focus:ring-[#4F725B]/20"
            />
          ) : (
            <input
              id={component.name}
              name={component.name}
              type={component.type}
              placeholder={component.placeholder}
              className="w-full rounded-lg border border-[#B8C5BA] bg-[#F7F8F4] px-4 py-3 text-[#1C3026] outline-none placeholder:text-[#7A877D] focus:border-[#4F725B] focus:ring-2 focus:ring-[#4F725B]/20"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-fit rounded-lg bg-[#31543E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#254431] active:scale-[0.98]"
      >
        Send Message
      </button>
    </form>
  );
}