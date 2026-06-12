"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Button from "../ui/Button";

interface FormData {
  fullName: string;
  parentName: string;
  age: string;
  mobile: string;
  email: string;
  experience: string;
  message: string;
}

const INITIAL_STATE: FormData = {
  fullName: "",
  parentName: "",
  age: "",
  mobile: "",
  email: "",
  experience: "Beginner",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!formData.fullName || !formData.age || !formData.mobile || !formData.email) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    const ageNum = parseInt(formData.age);
    if (isNaN(ageNum) || ageNum < 5 || ageNum > 30) {
      setError("Admission is open for age groups between 5 and 30 years.");
      setIsSubmitting(false);
      return;
    }

    if (ageNum < 18 && !formData.parentName) {
      setError("Parent's name is required for players under 18.");
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData(INITIAL_STATE);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-[#0D1F0F] border border-[#2D6A4F]/30 p-3 text-white text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-200 placeholder:text-white/30";

  if (isSubmitted) {
    return (
      <div className="bg-[#1B4332] border border-gold/30 p-10 text-center space-y-5 shadow-sm">
        <div className="w-14 h-14 bg-gold text-[#0D1F0F] flex items-center justify-center text-2xl font-bold mx-auto">
          ✓
        </div>
        <h3 className="font-title text-xl font-bold text-white tracking-tight">
          Enquiry Submitted Successfully
        </h3>
        <p className="text-white/75 text-sm max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out. Our coaching staff will contact you shortly regarding trials and admission.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-gold hover:text-gold-hover underline font-title text-[11px] uppercase tracking-widest font-semibold cursor-pointer focus:outline-none"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#1B4332] border border-[#2D6A4F]/20 p-8 space-y-6 shadow-sm">
      <h3 className="font-title text-lg font-bold text-white tracking-tight border-l-2 border-gold pl-4">
        Quick Enquiry Form
      </h3>

      {error && (
        <div className="bg-red-950/30 border border-red-500/30 text-red-400 text-xs p-3.5 font-medium">
          ⚠️ {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-[10px] uppercase font-title font-semibold tracking-widest text-gold">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className={inputClass} placeholder="Player's full name" />
        </div>

        <div className="space-y-1.5">
          <label className="block text-[10px] uppercase font-title font-semibold tracking-widest text-gold">
            Parent Name <span className="text-white/40 text-[8px] font-normal">(Required under 18)</span>
          </label>
          <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} className={inputClass} placeholder="Guardian name" />
        </div>

        <div className="space-y-1.5">
          <label className="block text-[10px] uppercase font-title font-semibold tracking-widest text-gold">
            Age <span className="text-red-400">*</span>
          </label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required min="5" max="30" className={inputClass} placeholder="5–30 years" />
        </div>

        <div className="space-y-1.5">
          <label className="block text-[10px] uppercase font-title font-semibold tracking-widest text-gold">
            Mobile <span className="text-red-400">*</span>
          </label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required className={inputClass} placeholder="Phone number" />
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <label className="block text-[10px] uppercase font-title font-semibold tracking-widest text-gold">
            Email <span className="text-red-400">*</span>
          </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="email@example.com" />
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <label className="block text-[10px] uppercase font-title font-semibold tracking-widest text-gold">
            Experience Level
          </label>
          <select name="experience" value={formData.experience} onChange={handleChange} className={`${inputClass} appearance-none [&>option]:bg-[#1B4332]`}>
            <option value="Beginner">Beginner (First-time player)</option>
            <option value="Intermediate">Intermediate (School/Club level)</option>
            <option value="Advanced">Advanced (District/State level)</option>
          </select>
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <label className="block text-[10px] uppercase font-title font-semibold tracking-widest text-gold">
            Message
          </label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className={inputClass} placeholder="Any specific training goals or questions..." />
        </div>
      </div>

      <Button variant="accent" size="lg" type="submit" disabled={isSubmitting} className="w-full justify-center">
        {isSubmitting ? "Submitting..." : "Submit Enquiry"}
      </Button>
    </form>
  );
}
