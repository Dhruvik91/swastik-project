import { Formik, Form, Field, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { ContactFormProps, ContactFormValues } from '../types/contact.types';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const ContactForm = ({ onSubmit, isSubmitting, submitStatus }: ContactFormProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Send us a Message
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                  errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your name"
              />
              <ErrorMessage name="name" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                  errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your@email.com"
              />
              <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Field
                type="text"
                id="subject"
                name="subject"
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                  errors.subject && touched.subject ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="How can we help?"
              />
              <ErrorMessage name="subject" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={4}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                  errors.message && touched.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your message..."
              />
              <ErrorMessage name="message" component="div" className="mt-1 text-sm text-red-600" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 text-white font-medium rounded-md transition-all duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg hover:shadow-xl'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-center"
              >
                Message sent successfully! We&apos;ll get back to you soon.
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 text-center"
              >
                Something went wrong. Please try again later.
              </motion.p>
            )}
          </Form>
        )}
      </Formik>
    </motion.div>
  );
}; 