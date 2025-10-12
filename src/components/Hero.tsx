import { ChevronDown } from 'lucide-react';
import HeroSlider from './HeroSlider';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20">
      <HeroSlider />

      <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="text-orange-600">Damodar Realtech</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto font-light italic">
            Your landmark to a brighter tomorrow
          </p>

          <div className="max-w-5xl mx-auto text-gray-700 space-y-6 text-lg leading-relaxed">
            <p>
              There's a legacy behind every cornerstone, a story etched into every wall and at <strong>Damodar Realtech Private Limited</strong>, our story begins with a name that carries generations of trust, honour, and timeless values.
            </p>

            <p>
              Incorporated on the 1st of April, 2025, Damodar Realtech Private Limited is more than just a real estate company. It is a heartfelt tribute to <strong>Shri Damodar Ji</strong>, the revered grandfather of our founder and director Mr. Vishal Saxena. A man known for his integrity, wisdom, and deep-rooted belief in offering only the best to those around him, his name now inspires our vision to redefine Rajasthan's real estate landscape with distinction, credibility, and class.
            </p>

            <p>
              At Damodar Realtech, we believe that a home is not just a structure built with brick and mortar; it is a canvas of dreams, a cradle of comfort, and a symbol of success. And just like the man whose name we carry, our promise is simple: <strong>to deliver nothing short of excellence</strong>.
            </p>

            <p>
              Our core focus lies in becoming a one stop solution for all real estate related needs of the client. We believe in crafting luxurious villas and high-net-worth (HNI) flats that reflect elegance, sophistication, and serenity.
            </p>
          </div>

          <div className="mt-12">
            <button
              onClick={scrollToAbout}
              className="bg-orange-600 text-white px-8 py-4 rounded-full font-medium hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              Discover Our Legacy
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
