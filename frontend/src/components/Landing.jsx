import Navbar from './Navbar';
import Hero from './Hero';
import LivePreview from './LivePreview';
import Stats from './Stats';
import Features from './Features';
import HowItWorks from './HowItWorks';
import CTA from './CTA';
import Footer from './Footer';

export default function Landing() {
  return (
    <div className="w-full bg-gradient-hero text-white overflow-hidden">
      <Navbar />
      <Hero />
      <LivePreview />
      <Stats />
      <Features />
      <HowItWorks />
      <CTA />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Contact
          </h2>

          <p className="text-gray-400 mb-8">
            Feel free to connect for collaborations, research discussions,
            project feedback, internship opportunities, or professional networking.
          </p>

          <div className="flex flex-col gap-4 items-center">
            <a
              href="mailto:saurabhkumar08843@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              📧 saurabhkumar08843@gmail.com
            </a>

            <a
              href="tel:+918709905612"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              📱 +91 8709905612
            </a>

            <a
              href="https://wa.me/918709905612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              💬 WhatsApp: +91 8709905612
            </a>

            <a
              href="https://github.com/mrsingh1072"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              💻 GitHub Profile
            </a>

            <a
              href="https://www.linkedin.com/in/saurabh-singh-959b48323"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              🔗 LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}