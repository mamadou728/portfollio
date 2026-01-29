"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-3 text-white/70">
              <p className="text-sm">
                <span className="text-white font-medium">Email:</span>{" "}
                <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
                  contact@example.com
                </a>
              </p>
              <p className="text-sm">
                <span className="text-white font-medium">Phone:</span>{" "}
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect</h3>
            <div className="flex flex-col gap-3 text-white/70">
              <a href="#" className="text-sm hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © 2026 Mamadou Kabore. All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
