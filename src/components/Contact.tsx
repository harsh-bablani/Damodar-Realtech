import { MapPin, Phone, Mail } from 'lucide-react';
import { FormEvent } from 'react';

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const interest = formData.get('interest') as string;
    const message = formData.get('message') as string;

    // Format the message for WhatsApp
    let whatsappMessage = `*New Inquiry from Website*\n\n`;
    whatsappMessage += `*Name:* ${name}\n`;
    whatsappMessage += `*Phone:* ${phone}\n`;
    whatsappMessage += `*Email:* ${email}\n`;
    if (interest) {
      whatsappMessage += `*Interested In:* ${interest}\n`;
    }
    whatsappMessage += `\n*Message:*\n${message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp URL with phone number (removing + and spaces)
    const whatsappURL = `https://wa.me/919829064922?text=${encodedMessage}`;

    // Open WhatsApp in a new window
    window.open(whatsappURL, '_blank');

    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-2xl text-orange-600 font-light italic">
            Let's Start a Conversation
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-4xl mx-auto">
            At Damodar Realtech Private Limited, we don't just build homes — we build lasting relationships. Whether you're looking for a luxury villa, a serene farmhouse, a high-end flat, or simply seeking guidance on investing in Rajasthan's most promising properties — we're here to listen, assist, and guide you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
            <p className="text-gray-700 leading-relaxed">
              E-143, First Floor, Vishwakarma Marg<br />
              Nirman Nagar, Near Kia Showroom<br />
              Jaipur – 302019, Rajasthan
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
            <a
              href="tel:+919829064922"
              className="text-gray-700 text-lg hover:text-orange-600 transition-colors"
            >
              +91 98290 64922
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
            <a
              href="mailto:info.damodarrealtech@gmail.com"
              className="text-gray-700 hover:text-orange-600 transition-colors break-all"
            >
              info.damodarrealtech@gmail.com
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h3>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-gray-700 font-medium mb-2">
                Interested In
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
              >
                <option value="">Select your interest</option>
                <option value="villa">Luxury Villa</option>
                <option value="flat">HNI Flat</option>
                <option value="farmhouse">Farmhouse</option>
                <option value="township">Township Plot</option>
                <option value="commercial">Commercial Space</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-xl text-center">
          <p className="text-2xl font-light italic">
            Your journey home begins here. Let's build something timeless together.
          </p>
        </div>
      </div>
    </section>
  );
}
