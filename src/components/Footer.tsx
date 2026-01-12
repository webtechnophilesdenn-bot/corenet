"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-block mb-2 mt-14">
              <Image
                src="/logo.png"          // <-- your logo in /public
                alt="CORENET Logo"
                width={160}
                height={50}
                className="object-contain"
                priority
              />
            </Link>

            <p className="text-sm text-gray-400 mb-4">
              Connecting World With Solutions
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-lg">
              <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="WhatsApp" className="hover:text-green-500">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Important Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/solutions">Solutions</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400" />
                <span>
                  <strong className="text-white">Corenet Pvt. Ltd.</strong><br />
                  Pune, Maharashtra, India
                </span>
              </li>

              <li className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-blue-400" />
                <a href="tel:+919999999999">+91 99999 99999</a>
              </li>

              <li className="flex gap-3">
                <FaEnvelope className="mt-1 text-blue-400" />
                <a href="mailto:info@corenet.com">info@corenet.com</a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Location</h4>
            <div className="overflow-hidden rounded-lg border border-gray-700">
              <iframe
                src="https://www.google.com/maps?q=Pune&output=embed"
                className="w-full h-50"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">
          <p>© {new Date().getFullYear()} Corenet. All rights reserved.</p>

          <div className="flex gap-3">
            <Link href="#">Privacy Policy</Link>
            <span>|</span>
            <Link href="#">Terms of Service</Link>
            <span>|</span>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
