import { motion } from 'framer-motion';
import { ContactInfoProps } from '../types/contact.types';

export const ContactInfo = ({ contactInfo }: ContactInfoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Contact Information
      </h2>
      <div className="space-y-6">
        {contactInfo.map((info) => (
          <a
            key={info.title}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="text-2xl">{info.icon}</span>
            <div>
              <h3 className="font-medium text-gray-900">{info.title}</h3>
              <p className="text-gray-600">{info.value}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}; 