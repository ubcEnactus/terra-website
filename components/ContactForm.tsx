"use client";

import { useState } from "react";

const contactComponents = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "John Doe",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "xyz@gmail.com",
    type: "email",
  },
  {
    name: "message",
    label: "Your Message",
    placeholder: "The quick brown fox jumped over the lazy dog",
    type: "textarea",
  },
];

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const formData = new FormData(event.currentTarget);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-6"
    >
      {contactComponents.map((component) => (
        <div key={component.name} className="flex flex-col gap-2">
          <label
            htmlFor={component.name}
            className="text-sm font-medium text-[#1C3026]"
          >
            {component.label}
          </label>

          {component.type === "textarea" ? (
            <textarea
              id={component.name}
              name={component.name}
              placeholder={component.placeholder}
              rows={6}
              required
              className="w-full resize-none rounded-md border border-[#B8C5BA] bg-[#F7F8F4] px-4 py-3 text-[#1C3026] outline-none placeholder:text-[#7A877D] transition focus:border-[#4F725B] focus:ring-2 focus:ring-[#4F725B]/20"
            />
          ) : (
            <input
              id={component.name}
              name={component.name}
              type={component.type}
              placeholder={component.placeholder}
              required
              className="w-full rounded-md border border-[#B8C5BA] bg-[#F7F8F4] px-4 py-3 text-[#1C3026] outline-none placeholder:text-[#7A877D] transition focus:border-[#4F725B] focus:ring-2 focus:ring-[#4F725B]/20"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-fit rounded-md bg-[#31543E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#254431] disabled:cursor-not-allowed disabled:opacity-60 hover:cursor-pointer"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-[#31543E]">
          Message sent successfully. Thanks for reaching out!
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}