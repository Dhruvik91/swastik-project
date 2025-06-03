export interface ContactInfo {
  title: string;
  value: string;
  icon: string;
  link: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => Promise<void>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
}

export interface ContactInfoProps {
  contactInfo: ContactInfo[];
}

export interface FAQSectionProps {
  faqs: FAQ[];
}

export interface HeroSectionProps {
  title: string;
  description: string;
}

export interface ContactMapProps {
  mapUrl: string;
} 