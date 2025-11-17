import { useState } from 'react';
import { Calendar, Mail, Send, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function CTASection() {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase
      .from('contact_submissions')
      .insert([{ email, type: 'newsletter' }]);

    setSubmitting(false);

    if (!error) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setShowEmailInput(false);
        setSubmitted(false);
      }, 3000);
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            background:
              'radial-gradient(circle at 20% 50%, rgba(0, 113, 227, 0.3), transparent 50%), radial-gradient(circle at 80% 50%, rgba(191, 90, 242, 0.3), transparent 50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-panel rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform
            <br />
            Your <span className="gradient-text">Brand?</span>
          </h2>
          <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
            Let's create something extraordinary together. Book a call or stay updated with our latest work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button-primary px-8 py-4 rounded-full text-lg font-medium inline-flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Call</span>
            </a>

            {!showEmailInput ? (
              <button
                onClick={() => setShowEmailInput(true)}
                className="glass-button px-8 py-4 rounded-full text-lg font-medium inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Get Updates</span>
              </button>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-panel rounded-full p-2 flex items-center space-x-2 animate-fadeIn"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={submitting || submitted}
                  className="bg-transparent px-4 py-2 outline-none min-w-[200px] sm:min-w-[300px]"
                />
                {submitted ? (
                  <div className="px-4 py-2 rounded-full bg-green-500 text-white flex items-center space-x-2">
                    <span className="text-sm font-medium">Subscribed!</span>
                  </div>
                ) : (
                  <>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="glass-button-primary px-4 py-2 rounded-full"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowEmailInput(false)}
                      className="glass-button px-3 py-2 rounded-full"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
