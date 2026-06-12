import Link from "next/link";
import CloudinaryImage from "../ui/CloudinaryImage";
import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D1F0F] text-white/80 border-t border-[#1B4332]">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 select-none">
              <CloudinaryImage
                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1781264973/PSA_r9pzzc.png"
                alt="Prakash Sports Academy Logo"
                width={64}
                height={64}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="font-title text-2xl font-bold tracking-wide leading-none text-white">
                  PRAKASH
                </span>
                <span className="font-title text-[11px] font-semibold tracking-[0.25em] text-gold mt-1 leading-none">
                  SPORTS ACADEMY
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed pt-1">
              Haridwar&apos;s premier cricket training center nurturing future champions since establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-title text-white uppercase tracking-wider text-xs font-bold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/academy", label: "Our Academy" },
                { href: "/players", label: "Our Players" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-title text-white uppercase tracking-wider text-xs font-bold mb-6">
              Programs
            </h3>
            <ul className="space-y-3">
              {[
                "Junior Cricket (5–12 Yrs)",
                "Youth Cricket (13–18 Yrs)",
                "Senior Cricket (19–30 Yrs)",
              ].map((prog) => (
                <li key={prog}>
                  <Link
                    href="/academy"
                    className="text-white/50 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {prog}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-title text-white uppercase tracking-wider text-xs font-bold mb-6">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-gold flex-shrink-0" size={13} />
                <a href="tel:+917830000953" className="hover:text-gold transition-colors">
                  +91 78300 00953
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-gold flex-shrink-0 mt-1" size={13} />
                <span>Balajipuram Colony, Near Ramanand Institute, Jwalapur, Haridwar</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-2 mt-6">
              {[
                { icon: <FaInstagram size={15} />, href: "#", label: "Instagram" },
                { icon: <FaFacebookF size={14} />, href: "#", label: "Facebook" },
                { icon: <FaYoutube size={15} />, href: "#", label: "YouTube" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-white/5 hover:bg-gold text-white/60 hover:text-[#0D1F0F] flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-gold"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/30">
          <p>&copy; {new Date().getFullYear()} Prakash Sports Academy. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
