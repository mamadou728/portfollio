"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white px-6 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content - Smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Left Side - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3">Get in Touch</h3>
            <div className="space-y-2 text-white/70">
              <p className="text-xs">
                <span className="text-white font-medium">Email:</span>{" "}
                <a href="mailto:Mamadou.kabore@cmail.carleton.ca" className="hover:text-white transition-colors">
                  Mamadou.kabore@cmail.carleton.ca
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Connect</h3>
            <div className="flex flex-col gap-2 text-white/70">
              <a 
                href="https://www.linkedin.com/in/mamadou-kabore-a31026216/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/mamadou728" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/50">
            © 2026 Mamadou Kabore. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
