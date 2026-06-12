import type { Metadata } from "next";
import ContactForm from "@/app/components/sections/ContactForm";
import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us | Enquiries & Timings | Prakash Sports Academy",
  description:
    "Get in touch with Prakash Sports Academy in Haridwar. Enquire about admissions, book a cricket trial net session, or view our location and academy timings.",
  keywords:
    "cricket academy contact, academy address haridwar, best cricket coach haridwar, book cricket trials",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* Header */}
      <section className="bg-[#0D1F0F] py-12 md:py-20 border-b border-[#1B4332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-title font-semibold uppercase tracking-[0.2em] text-xs">
            Get in Touch
          </span>
          <h1 className="font-title text-4xl sm:text-5xl font-bold text-white tracking-tight mt-3">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16 md:py-24 sports-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="font-title text-gold uppercase tracking-[0.2em] text-xs font-semibold">
                  Reach Out
                </span>
                <h2 className="font-title text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  We&apos;d Love to Hear From You
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Whether you&apos;re looking to join, book a trial session, or learn more about our programs, we&apos;re here to help.
                </p>
              </div>

              <div className="space-y-5">
                {/* Address */}
                <div className="bg-[#1B4332] border border-[#2D6A4F]/20 p-5 flex items-start gap-4 hover:shadow-sm transition-shadow">
                  <FaMapMarkerAlt className="text-gold text-lg mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-title text-xs uppercase font-bold text-white tracking-wider mb-1">Address</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Balajipuram Colony, Near Ramanand Institute,<br />
                      Jwalapur Highway, Haridwar, Uttarakhand – 249407
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-[#1B4332] border border-[#2D6A4F]/20 p-5 flex items-start gap-4 hover:shadow-sm transition-shadow">
                  <FaPhoneAlt className="text-gold text-base mt-1.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-title text-xs uppercase font-bold text-white tracking-wider mb-1">Phone</h3>
                    <a href="tel:+917830000953" className="text-gold hover:text-gold-hover font-semibold transition-colors text-sm">
                      +91 78300 00953
                    </a>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mt-0.5">Call or WhatsApp</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#1B4332] border border-[#2D6A4F]/20 p-5 flex items-start gap-4 hover:shadow-sm transition-shadow">
                  <FaRegClock className="text-gold text-lg mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-title text-xs uppercase font-bold text-white tracking-wider mb-1">Hours</h3>
                    <div className="text-white/70 text-sm space-y-0.5">
                      <p><strong className="text-white">Morning:</strong> 6:00 AM – 9:00 AM</p>
                      <p><strong className="text-white">Evening:</strong> 4:00 PM – 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-[#1B4332]">
        <div className="w-full h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.3828145570465!2d78.08244239999999!3d29.9108795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949a725aa3827%3A0x3f2a1b3d6001c73d!2sPrakash%20Sports%20Academy!5e0!3m2!1sen!2sin!4v1781288721239!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Prakash Sports Academy Haridwar Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
