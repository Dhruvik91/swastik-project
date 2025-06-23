'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'Web Design', href: '/services/web-design' },
    { name: 'Development', href: '/services/development' },
    { name: 'Marketing', href: '/services/marketing' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: '𝕏' },
  { name: 'GitHub', href: '#', icon: '⌨' },
  { name: 'LinkedIn', href: '#', icon: 'in' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-400 bg-clip-text text-transparent">
                Brand
              </Link>
              <p className="mt-4 text-gray-600 text-sm">
                Creating beautiful digital experiences that inspire and innovate.
              </p>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-1"
            >
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-primary-500 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-6 mb-4 md:mb-0"
            >
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-primary-500 transition-colors duration-200"
                >
                  <span className="sr-only">{link.name}</span>
                  <span className="text-lg">{link.icon}</span>
                </Link>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              © {new Date().getFullYear()} Brand. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
} 