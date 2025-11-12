import { Quote } from 'lucide-react';

export default function Directors() {
  return (
    <section id="directors" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet The Directors
          </h2>
          <p className="text-2xl text-orange-600 font-light italic">
            The Visionaries Behind the Legacy
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-4xl mx-auto">
            At the soul of Damodar Realtech Private Limited stand two pioneering minds, each driven by a shared purpose — to transform the landscape of Rajasthan's luxury real estate with grace, integrity, and excellence.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="md:grid md:grid-cols-[minmax(280px,360px)_1fr] md:gap-10">
              <div className="md:max-w-sm md:flex-none bg-gray-900/5">
                <img
                  src="/Md.png"
                  alt="Portrait of Mr. Vishal Satguru Dayal Saxena"
                  className="w-full aspect-[393/421] object-cover object-center md:aspect-[393/421] md:h-auto md:object-[65%_center]"
                  loading="lazy"
                />
                <div className="space-y-6 p-6 bg-white md:bg-transparent">
                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                    <Quote className="text-orange-600 mb-3" size={32} />
                    <p className="italic text-lg">
                      "Homes are not built by hands alone — they are built by hearts, by heritage, and by honour. At Damodar Realtech, every structure carries a story, and every story begins with trust."
                    </p>
                    <p className="text-right font-semibold mt-3 text-orange-600">— Vishal S. D. Saxena</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Mr. Vishal Satguru Dayal Saxena
                </h3>
                <p className="text-xl text-orange-600 font-semibold mb-6">Founder & Managing Director</p>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    A charismatic leader with a rare blend of financial acumen and heartfelt vision, Mr. Vishal Saxena is the guiding force behind Damodar Realtech's bold ambitions. He began his career in the fast-paced corridors of <strong>Apollo Tyres, Cholamandalam, and ICICI Bank</strong>, where he carved a distinguished path over 20 years, mastering the arts of strategy, high-value relationship management, and ethical growth.
                  </p>

                  <p>
                    Yet it was his deep-rooted desire to honour the values of his beloved grandfather, Shri Damodar Ji, that led him to real estate — not just as an industry, but as a calling. Over the past years, Mr. Saxena has firmly established himself in the sector, holding key leadership roles with prestigious firms such as <strong>Gokul Kripa Colonizers and Developers</strong>, among others.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h4 className="font-bold text-lg mb-2">Personal Message:</h4>
                  <p className="italic">
                    "I founded Damodar Realtech not just as a business, but as a heartfelt tribute to my grandfather, whose values shaped my life. This company is my way of carrying forward his legacy; by building homes where people find not just shelter, but belonging, beauty, and peace. Our promise to every client is simple: you will receive a home built with integrity, transparency, and excellence."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="md:grid md:grid-cols-[1fr_minmax(280px,360px)] md:gap-10">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Ms. Pallavi Mathur
                </h3>
                <p className="text-xl text-orange-600 font-semibold mb-6">Director</p>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Graceful, insightful, and uncompromising when it comes to excellence, Ms. Pallavi Mathur brings a refined sensibility and scientific precision to the company's leadership. With a robust academic science background, she possesses a naturally analytical mind — one that seamlessly blends attention to detail with big-picture thinking.
                  </p>

                  <p>
                    Having spent over <strong>5 years in the real estate sector</strong>, Ms. Mathur has been instrumental in shaping the executional framework and quality ethos of Damodar Realtech. Her involvement goes far beyond boardroom decisions — she oversees finance, planning, compliance, aesthetics, and quality assurance, ensuring that each project is delivered to perfection.
                  </p>

                  <p>
                    Her leadership is marked by empathy, precision, and an unwavering commitment to delivering excellence in every project. Ms. Mathur believes in crafting homes that reflect the aspirations of modern families while honouring timeless values of trust and transparency.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h4 className="font-bold text-lg mb-2">Personal Message:</h4>
                  <p className="italic">
                    "My role at Damodar Realtech is inspired by a deep sense of responsibility, to ensure that every detail, every finish, and every plan speaks of the quality we promise. I believe in creating homes that don't just look beautiful, but feel right, homes where families thrive, moments unfold, and life is lived fully. To me, every project is a work of art that must stand the test of time."
                  </p>
                </div>
              </div>

              <div className="md:max-w-sm md:flex-none bg-gray-900/5">
                <img
                  src="/Fd.png"
                  alt="Portrait of Ms. Pallavi Mathur"
                  className="w-full aspect-[393/421] object-cover md:aspect-[393/421] md:h-auto"
                  loading="lazy"
                />
                <div className="space-y-6 p-6 bg-white md:bg-transparent">
                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                    <Quote className="text-orange-600 mb-3" size={32} />
                    <p className="italic text-lg">
                      "A great home isn't defined by grandeur alone, it is the harmony of detail, design, and heart. We strive to create spaces that are both breathtaking and deeply personal."
                    </p>
                    <p className="text-right font-semibold mt-3 text-orange-600">— Pallavi Mathur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto italic">
            Together, they blend corporate wisdom with entrepreneurial spirit, structure with soul, and vision with rooted values — laying the foundation for a real estate company that is as aspirational as it is trustworthy.
          </p>
        </div>
      </div>
    </section>
  );
}
