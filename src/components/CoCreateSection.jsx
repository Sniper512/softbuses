import React, { useState, useEffect } from "react";
import Bar from "./Bar";
import Button from "./Button";
import { SectionHeading } from "./SectionHeading";
import { sendContactForm } from "../api/contactForm";

export const CoCreateSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [serviceOfInterest, setServiceOfInterest] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);


  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name || !email || !serviceOfInterest) {
      setError("Please fill in name, email and service of interest.");
      return;
    }

    const payload = {
      name,
      email,
      phone,
      company,
      message: serviceOfInterest,
    };

    setLoading(true);
    try {
      await sendContactForm(payload);
      setSuccess("Thanks — your message was sent.");
      setShowToast(true);
      // setName("");
      // setEmail("");
      // setPhone("");
      // setCompany("");
      // setServiceOfInterest("");
    } catch (err) {
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  }

  // auto-hide success toast after 5 seconds
  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 5000);
    return () => clearTimeout(t);
  }, [showToast]);

  return (
    <>
      <section id="co-create" className="py-20">
        <div className="w-full mx-auto max-w-[1660px] ~/xl:~px-6/40 flex flex-col items-center justify-center">
          <div className="w-full mt-8">
            <SectionHeading firstTitle="Co-create " secondTitle="with us" />
          </div>
          <div className="w-full flex flex-col  md:flex-row-reverse bg-white/5 border-[1px] border-primary/25 gap-y-8  mt-8 md:mt-12 md:px-4 md:py-8">
            {/* First half */}
            <div className="w-full md:w-1/2 p-4">
              <div className="mb-8">
                <h4 className=" ~sm/xl:~text-2xl/4xl text-primary font-semibold mb-4">
                  Ready to Get a Quote?
                </h4>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                  Let's bring your digital vision to life! Whether you need a
                  sleek web app, cutting-edge AI integration, intuitive UI/UX, or
                  powerful automation tools—our expert team is ready to
                  collaborate and build something remarkable with you.
                </p>
              </div>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {/* Full Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none  text-gray-800 placeholder-gray-500 text-xs md:text-sm transition-all duration-200"
                    required
                  />
                </div>

                {/* Email Address Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none  text-gray-800 placeholder-gray-500 text-xs md:text-sm transition-all duration-200"
                    required
                  />
                </div>

                {/* Phone Number Input */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none  text-gray-800 placeholder-gray-500 text-xs md:text-sm transition-all duration-200"
                  />
                </div>

                {/* Company/Startup Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company / Startup (Optional)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none  text-gray-800 placeholder-gray-500 text-xs md:text-sm transition-all duration-200"
                  />
                </div>

                {/* Service of Interest Textarea */}
                <div className="relative">
                  <textarea
                    name="serviceOfInterest"
                    placeholder="Service of Interest"
                    rows="4"
                    value={serviceOfInterest}
                    onChange={(e) => setServiceOfInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none  text-gray-800 placeholder-gray-500 text-xs md:text-sm resize-none transition-all duration-200"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end ">
                  <div className="flex items-center justify-center">
                    <div className="relative group ">
                      <Button text={loading ? "Sending..." : "Get a Quote"} type="button" bg="green" />
                    </div>
                  </div>
                </div>

                {error && (
                  <p className="text-red-400 text-sm bg-red-900/30 p-2 rounded">{error}</p>
                )}
              </form>
            </div>

            {/* Second half */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-2 py-12 md:py-2">
              <img
                src="coCreateIcon.svg"
                alt="Co-create with us"
                className="w-full h-auto max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Success toast */}
      {showToast && success && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-4 z-50 flex items-center gap-3 bg-primary-dark text-white px-4 py-3 rounded-full shadow-lg"
        >
          <div className="text-sm">{success}</div>
          <button
            aria-label="Close"
            onClick={() => setShowToast(false)}
            className="text-white/80 hover:text-white"
          >
            ✕
          </button>
        </div>
      )}

      <Bar />
    </>
  );
};
