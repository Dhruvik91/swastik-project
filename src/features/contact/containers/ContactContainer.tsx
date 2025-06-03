'use client';

import { useState } from 'react';
import { CONTACT_INFO, MAP_EMBED_URL } from '../constants/contact.constants';
import { HeroSection } from '../components/HeroSection';
import { ContactForm } from '../components/ContactForm';
import { ContactInfo } from '../components/ContactInfo';
import { ContactMap } from '../components/ContactMap';
import { FAQSection } from '../components/FAQSection';

export const ContactContainer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <HeroSection
        title="Contact Swastik Cement"
        description="Looking for high-quality cement and concrete solutions? Our team of experts is ready to assist you with your construction needs. Whether you're a contractor, builder, or individual, we're here to help you choose the right products for your project."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              submitStatus={submitStatus}
            />

            <div className="space-y-8">
              <ContactInfo contactInfo={CONTACT_INFO} />
              <ContactMap mapUrl={MAP_EMBED_URL} />
            </div>
          </div>
        </div>
      </section>

      <FAQSection 
        faqs={[
          {
            question: "What types of cement products do you offer?",
            answer: "We offer a comprehensive range of cement products including Ordinary Portland Cement (OPC), Portland Pozzolana Cement (PPC), and specialized cement for different construction needs. Our product line also includes ready-mix concrete and concrete additives."
          },
          {
            question: "How can I place a bulk order?",
            answer: "For bulk orders, please contact our sales team through the contact form or call our dedicated bulk order helpline. We offer special pricing and delivery arrangements for large-scale projects."
          },
          {
            question: "What is your delivery area?",
            answer: "We provide delivery services across major construction hubs. Our extensive logistics network ensures timely delivery of cement and concrete products to your construction site. Contact us to check availability in your area."
          },
          {
            question: "Do you provide technical support?",
            answer: "Yes, our technical team provides expert guidance on cement selection, concrete mix design, and application methods. We also offer on-site technical support for major projects."
          },
          {
            question: "What are your quality standards?",
            answer: "All our cement and concrete products meet or exceed national and international quality standards. We maintain rigorous quality control processes and provide detailed product specifications and test certificates."
          }
        ]} 
      />
    </div>
  );
}; 