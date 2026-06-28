"use client";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { ButtonX } from "@/components/ui/cvborder";
import { useState } from "react";

function Page() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setErrorMessage(""); // Reset error message

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://getform.io/f/amddegxb", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error submitting the form");
      }

      // Reset form after successful submission
      form.reset();
      setIsSubmitted(false);
    } catch (error) {
      setIsSubmitted(false);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div>
        <BackgroundBeams />
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Connect with Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Hello! 👋 If you'd like to get in touch with me for inquiries, feedback, or potential collaborations, feel free to reach out! I'm here and ready to connect.
        </p>

        {isSubmitted ? (
          <p className="text-center text-blue-500 mt-4">
            Response sent! Please wait for a reply.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="h-10 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2 text-white p-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="h-10 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2 text-white p-3"
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              required
              className="h-20 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 placeholder:p-2 text-white p-3"
            />
            <div style={{ paddingTop: '20px' }}>
              <ButtonX type="submit">Send</ButtonX>
            </div>
          </form>
        )}

        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Page;
