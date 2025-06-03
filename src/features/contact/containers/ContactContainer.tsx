'use client';

import { useState } from 'react';
import { ContactFormValues } from '../types/contact.types';
import { CONTACT_INFO, FAQ_DATA, MAP_EMBED_URL } from '../constants/contact.constants';
import { HeroSection } from '../components/HeroSection';
import { ContactForm } from '../components/ContactForm';
import { ContactInfo } from '../components/ContactInfo';
import { ContactMap } from '../components/ContactMap';
import { FAQSection } from '../components/FAQSection';

export const ContactContainer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <HeroSection
        title="Get in Touch"
        description="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
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

      <FAQSection faqs={FAQ_DATA} />
    </div>
  );
}; 