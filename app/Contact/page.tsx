import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F7F8F4] px-6 py-12 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <section className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#4F725B]">
            Get in touch
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-[#1C3026] md:text-6xl">
            Let's build something.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5F6D63]">
            Whether you have an opportunity, a project idea, or just want to
            connect, I'd love to hear from you.
          </p>
        </section>

        <section className="w-full max-w-2xl">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}