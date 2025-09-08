import { useState } from "react";
import Button from "../../general/Button";
import { sendContactForm } from "../../../api/contactForm";
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceOfInterest: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceOfInterest: "",
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formData.name || !formData.email || !formData.serviceOfInterest) {
      setError("Please fill in name, email and service of interest.");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.serviceOfInterest,
    };

    setLoading(true);
    try {
      await sendContactForm(payload);
      setSuccess("Thanks — your message was sent. We will get back to you shortly.");
      resetForm();
    } catch (err) {
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        {/* Full Name Input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none text-gray-800 placeholder-gray-500 text-xs md:text-sm transition-all duration-200"
            required
          />
        </div>

        {/* Email Address Input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none text-gray-800 placeholder-gray-500 text-xs md:text-sm transition-all duration-200"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none text-gray-800 placeholder-gray-500 text-xs md:text-sm transition-all duration-200"
          />
        </div>

        {/* Company/Startup Input */}
        <div className="relative">
          <input
            type="text"
            name="company"
            placeholder="Company / Startup (Optional)"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none text-gray-800 placeholder-gray-500 text-xs md:text-sm transition-all duration-200"
          />
        </div>

        {/* Service of Interest Textarea */}
        <div className="relative">
          <textarea
            name="serviceOfInterest"
            placeholder="Service of Interest"
            rows="4"
            value={formData.serviceOfInterest}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-transparent focus:border-primary focus:outline-none text-gray-800 placeholder-gray-500 text-xs md:text-sm resize-none transition-all duration-200"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <div className="flex items-center justify-center">
            <div className="relative group">
              <Button
                text={loading ? "Sending..." : "Get a Quote"}
                type="button"
                bg="green"
                disabled={loading}
              />
            </div>
          </div>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="flex gap-2 text-black font-medium text-sm bg-primary p-3">
            <FaCircleCheck className="min-w-4 min-h-4" />
            <span>
              {success}
            </span>
          </div>
        )}

        {error && (
          <div className="flex gap-2 text-black font-medium text-sm bg-red-300 p-3">
            <FaCircleExclamation className="min-w-4 min-h-4" />
            <span>
              {error}
            </span>
          </div>
        )}
      </form>
    </>
  );
};
