export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/logo.jpeg"
              alt="Damodar Realtech"
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Built on legacy. Driven by excellence. Designed for you.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-orange-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-orange-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('directors')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-orange-400 transition-colors">
                  Leadership
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-orange-400 transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-orange-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                E-143, First Floor, Vishwakarma Marg<br />
                Nirman Nagar, Jaipur – 302019
              </li>
              <li>
                <a href="tel:+919829064922" className="hover:text-orange-400 transition-colors">
                  +91 98290 64922
                </a>
              </li>
              <li>
                <a href="mailto:info.damodarrealtech@gmail.com" className="hover:text-orange-400 transition-colors break-all">
                  info.damodarrealtech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} Damodar Realtech Private Limited. All rights reserved.</p>
          <p className="mt-2 text-sm">JDA & RERA Approved Projects | Building Legacy Since 2025</p>
        </div>
      </div>
    </footer>
  );
}
