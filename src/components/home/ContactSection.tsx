import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import GlassCard from '../GlassCard';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Listen for email prefill from hero section
  useEffect(() => {
    const handleEmailPrefill = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail?.email) {
        setFormData(prev => ({
          ...prev,
          email: customEvent.detail.email,
        }));
      }
    };

    window.addEventListener('emailPrefill', handleEmailPrefill);

    // Also check sessionStorage for prefilled email
    const prefillEmail = sessionStorage.getItem('prefillEmail');
    if (prefillEmail) {
      setFormData(prev => ({
        ...prev,
        email: prefillEmail,
      }));
      sessionStorage.removeItem('prefillEmail');
    }

    return () => window.removeEventListener('emailPrefill', handleEmailPrefill);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase
      .from('contact_submissions')
      .insert([{
        name: formData.name,
        email: formData.email,
        message: formData.message,
        type: 'contact',
      }]);

    setSubmitting(false);

    if (!error) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <GlassCard hover className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-secondary text-sm">hello@blyndstudio.com</p>
              </div>
            </GlassCard>

            <GlassCard hover className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-secondary text-sm">+1 (555) 123-4567</p>
              </div>
            </GlassCard>

            <GlassCard hover className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-secondary text-sm">
                  123 Market Street
                  <br />
                  San Francisco, CA 94103
                </p>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-2">
            <GlassCard>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-secondary">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                      className="w-full px-4 py-3 rounded-xl glass-panel outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                      className="w-full px-4 py-3 rounded-xl glass-panel outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl glass-panel outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full glass-button-primary px-6 py-4 rounded-xl text-lg font-medium inline-flex items-center justify-center space-x-2"
                  >
                    {submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
