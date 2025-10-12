import { Award, Home, Building2, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-2xl text-orange-600 font-light italic">
            Built on Legacy. Driven by Excellence. Designed for You.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed mb-16">
          <p>
            At Damodar Realtech Private Limited, we believe that homes are not just built — they are crafted with purpose, care, and vision. Founded on April 1st, 2025, our company was born out of a legacy — named in loving memory of <strong>Shri Damodar Ji</strong>, the grandfather of our founder and director. His unwavering values of honesty, commitment, and integrity now form the very cornerstone of everything we do.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-xl my-8 border-l-4 border-orange-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-xl italic">
              To design and deliver heart throbbing legacies of the highest quality across Rajasthan.
            </p>
            <p className="mt-4">
              We aspire to create more than just real estate — we craft sanctuaries that speak of elegance, comfort, and timeless living.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Philosophy</h3>
          <p>
            At Damodar Realtech, our philosophy is rooted in a deep respect for tradition, fused with a forward-thinking approach to modern living. Every line we draw, every structure we raise, and every experience we deliver is guided by our commitment to:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <Award className="text-orange-600 mb-3" size={40} />
              <h4 className="font-bold text-xl mb-2">Uncompromised Quality</h4>
              <p className="text-gray-600">Every detail matters in our pursuit of perfection</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <TrendingUp className="text-orange-600 mb-3" size={40} />
              <h4 className="font-bold text-xl mb-2">Transparent Processes</h4>
              <p className="text-gray-600">Honesty and clarity in every transaction</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <Home className="text-orange-600 mb-3" size={40} />
              <h4 className="font-bold text-xl mb-2">Client-First Approach</h4>
              <p className="text-gray-600">Your dreams guide our every decision</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <Building2 className="text-orange-600 mb-3" size={40} />
              <h4 className="font-bold text-xl mb-2">Sustainable Development</h4>
              <p className="text-gray-600">Building for generations to come</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Specializations</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-orange-600 mb-3">Residential Townships</h4>
              <p className="text-gray-700">Theme based development with all modern amenities, designed with style and elegance.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-orange-600 mb-3">Commercial Spaces</h4>
              <p className="text-gray-700">Wide range of properties designed for the buyer's need and can be customized for better investment and returns.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-orange-600 mb-3">Luxury Villas</h4>
              <p className="text-gray-700">Designed with a touch of class, modern aesthetics, and serene living, our villas are ideal for those who value privacy, space, and elegance.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-orange-600 mb-3">HNI Flats</h4>
              <p className="text-gray-700">Tailored for the discerning buyer, our high-net-worth residential spaces combine urban comfort with top-tier amenities and refined interiors.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-gray-800 text-white p-8 md:p-12 rounded-xl">
          <h3 className="text-3xl font-bold mb-6 text-center">Our Vision</h3>
          <p className="text-xl text-center max-w-4xl mx-auto leading-relaxed">
            To build spaces that honour our roots and elevate your future.
          </p>
          <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed mt-4 text-gray-300">
            At Damodar Realtech, we envision a Rajasthan where luxury is accessible, trust is uncompromised, and every home carries a story worth telling. By building in the name of Shri Damodar Ji, we are reminded every day that real estate is not just about land and walls — it's about values passed down, dreams built up, and legacies that endure.
          </p>
        </div>
      </div>
    </section>
  );
}
