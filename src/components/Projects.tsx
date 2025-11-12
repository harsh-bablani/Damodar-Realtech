import { useCallback, useEffect, useMemo, useRef, useState, type TouchEvent } from 'react';
import { Building, Trees, Home, MapPin, ChevronLeft, ChevronRight, X } from 'lucide-react';

const krishnaResidencyImages = [
  'p1.jpg',
  'p2.jpg',
  'p3.jpg',
  'p4.jpg',
  'p5.jpg',
  'p6.jpg',
  'p7.jpg',
  'p8 building.jpg',
  'p9 building.jpg',
];

type SliderImage = {
  src: string;
  alt: string;
};

function ImageSlider({ images, baseAlt }: { images: string[]; baseAlt: string }) {
  const slides: SliderImage[] = useMemo(
    () =>
      images.map((image, index) => ({
        src: image.startsWith('/') ? encodeURI(image) : `/${encodeURI(image)}`,
        alt: `${baseAlt} ${index + 1}`,
      })),
    [images, baseAlt]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<SliderImage | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = slides.length;

  const goTo = useCallback(
    (index: number) => {
      if (!totalSlides) return;
      setCurrentIndex(((index % totalSlides) + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const previous = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  const pauseAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const resumeAutoPlay = useCallback(() => {
    if (totalSlides <= 1 || intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => ((prev + 1) % totalSlides + totalSlides) % totalSlides);
    }, 6000);
  }, [totalSlides]);

  useEffect(() => {
    resumeAutoPlay();
    return () => pauseAutoPlay();
  }, [resumeAutoPlay, pauseAutoPlay]);

  const handleTouchStart = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      touchStartX.current = event.touches[0].clientX;
      pauseAutoPlay();
    },
    [pauseAutoPlay]
  );

  const handleTouchEnd = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      if (touchStartX.current === null) {
        resumeAutoPlay();
        return;
      }

      const delta = event.changedTouches[0].clientX - touchStartX.current;
      const swipeThreshold = 40;

      if (Math.abs(delta) > swipeThreshold) {
        if (delta > 0) {
          previous();
        } else {
          next();
        }
      }

      touchStartX.current = null;
      resumeAutoPlay();
    },
    [next, previous, resumeAutoPlay]
  );

  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxImage(null);
        resumeAutoPlay();
      } else if (event.key === 'ArrowRight') {
        next();
      } else if (event.key === 'ArrowLeft') {
        previous();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      resumeAutoPlay();
    };
  }, [lightboxImage, next, previous, resumeAutoPlay]);

  const renderLightbox = () => {
    if (!lightboxImage) return null;

    const closeLightbox = () => {
      setLightboxImage(null);
      resumeAutoPlay();
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
        role="dialog"
        aria-modal="true"
        aria-label="Expanded project image"
        onClick={closeLightbox}
      >
        <div
          className="relative max-h-full w-full max-w-5xl"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            aria-label="Close image preview"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-h-[70vh] w-full rounded-2xl object-contain shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    );
  };

  if (!totalSlides) {
    return null;
  }

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className="group relative w-full shrink-0 focus:outline-none"
              aria-label={`Open ${slide.alt}`}
              onClick={() => {
                pauseAutoPlay();
                setLightboxImage(slide);
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-72 w-full object-cover sm:h-80 md:h-96"
                loading="lazy"
              />
              <span className="absolute inset-x-0 bottom-3 mx-auto hidden w-max rounded-full bg-black/50 px-4 py-1 text-sm font-medium text-white backdrop-blur transition group-hover:flex">
                Tap to view full size
              </span>
            </button>
          ))}
        </div>
      </div>

      {totalSlides > 1 && (
        <>
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-gray-900 shadow-lg transition hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            onClick={() => {
              pauseAutoPlay();
              previous();
              resumeAutoPlay();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-gray-900 shadow-lg transition hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            onClick={() => {
              pauseAutoPlay();
              next();
              resumeAutoPlay();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={`dot-${index.toString()}`}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-white/70'
                  }`}
                onClick={() => {
                  pauseAutoPlay();
                  goTo(index);
                  resumeAutoPlay();
                }}
              />
            ))}
          </div>
        </>
      )}

      {renderLightbox()}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects Undertaken
          </h2>
          <p className="text-2xl text-orange-600 font-light italic">
            Crafting Dreams in Every Corner of Rajasthan
          </p>
          <p className="text-lg text-gray-700 mt-4 max-w-4xl mx-auto">
            At Damodar Realtech Private Limited, every project is a reflection of our unwavering commitment to quality, luxury, and trust. From the serene outskirts to the heart of Rajasthan's thriving urban centres, our developments are thoughtfully curated to embody refined living, timeless design, and a deep respect for both nature and heritage.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex items-center">
              <div className="md:w-2/5 h-64 md:h-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center p-8">
                <Trees size={120} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="md:w-3/5 p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-green-600" size={24} />
                  <span className="text-green-600 font-semibold">Phagi, Rajasthan</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  The Farmhouse Retreat
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nestled amidst the tranquil beauty of Phagi, our farmhouse project is a serene escape into nature's embrace. Surrounded by open skies, gentle breezes, and the untouched charm of the countryside, these farmhouses offer a lifestyle of calm, privacy, and quiet luxury.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Crafted for those who long to reconnect with nature without compromising on comfort, each farmhouse is a sanctuary — ideal for weekend getaways, retirement living, or soulful solitude. With carefully planned layouts and lush surroundings, this project celebrates simplicity elevated with subtle sophistication.
                </p>
                <p className="italic text-gray-600 border-l-4 border-green-600 pl-4">
                  Where the soul breathes, and the heart finds peace.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex items-center md:flex-row-reverse">
              <div className="md:w-2/5 h-64 md:h-full bg-gradient-to-br from-blue-600 to-sky-600 flex items-center justify-center p-8">
                <Building size={120} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="md:w-3/5 p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-blue-600" size={24} />
                  <span className="text-blue-600 font-semibold">Jaipur City</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Premium Flats
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In the vibrant heart of Jaipur, our luxury flat development brings modern convenience and regal charm together in perfect harmony. Designed for HNIs, NRIs, and discerning homeowners, these flats redefine urban elegance.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Strategically located with easy access to essential city life — yet tucked away enough to offer calm and comfort — this project features premium 2BHK and 3BHK flats adorned with tasteful interiors, high-end finishes, and contemporary architecture. Every flat is a private world of its own, where function meets finesse.
                </p>
                <p className="italic text-gray-600 border-l-4 border-blue-600 pl-4">
                  Live in the city. Rise above the ordinary.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="md:flex items-center">
              <div className="md:w-2/5 h-64 md:h-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center p-8">
                <Home size={120} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="md:w-3/5 p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-orange-600" size={24} />
                  <span className="text-orange-600 font-semibold">Jaipur, Phagi & Diggi</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Township Projects
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We are proud to announce the near completion of three signature township projects, each meticulously planned and passionately executed in Jaipur, Phagi, and Diggi.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These townships are more than just residential developments — they are thriving, self-sustained communities designed to foster connection, comfort, and a sense of belonging. With wide roads, green corridors, modern infrastructure, and carefully plotted villa spaces, these townships set a new standard for community living in Rajasthan.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Each township reflects our design philosophy: space with purpose, beauty with utility, and luxury with legacy. Whether it's the urban energy of Jaipur or the rustic calm of Phagi and Diggi, every location is chosen to blend serenity with accessibility.
                </p>
                <p className="italic text-gray-600 border-l-4 border-orange-600 pl-4">
                  Where families grow, dreams flourish, and life unfolds beautifully.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-900 to-gray-800 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Imperial Galaxy</h3>
            <p className="leading-relaxed">
              Situated near Jain temple at Ajmer Road, it redefines the standard of luxury townships in Jaipur and make an impression of opulent lifestyle.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-amber-600 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Krishna Residency</h3>
            <p className="leading-relaxed">
              It's a 1 &amp; 2 BHK flats which is actual blend of modern living, comfort and natural ventilation. Very strategically located near the posh location of Vaishali Nagar West and near the main highway of Jaipur i.e. Ajmer Road.
            </p>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Project Gallery</h4>
              <ImageSlider images={krishnaResidencyImages} baseAlt="Krishna Residency view" />
              <p className="mt-4 text-sm text-amber-100/90">
                Tap or click any photo to explore the residence in full size.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Upcoming Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-xl text-orange-600 mb-2">Residential Township 1</h4>
              <p className="text-gray-700">It is under the process of approval and will launch by the end of 2025 in Renwal-Phagi, Rajasthan.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-xl text-orange-600 mb-2">Residential Township 2</h4>
              <p className="text-gray-700">It is under the process of approval and will launch by the end of financial year 2025 in Diggi, Rajasthan.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-600 to-amber-600 text-white p-8 rounded-xl text-center">
          <p className="text-xl italic">
            Every project at Damodar Realtech carries the same heartbeat — a desire to deliver homes that are not just lived in, but loved. Our commitment to JDA and RERA approvals ensures that every development is built on a foundation of legality, trust, and peace of mind.
          </p>
          <p className="text-lg mt-4 font-semibold">
            This is just the beginning. The blueprint of our future is vast — and your perfect home may already be on the map.
          </p>
        </div>
      </div>
    </section>
  );
}
