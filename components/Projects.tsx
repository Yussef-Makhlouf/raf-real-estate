'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { useRef } from 'react';

const projects = [
  { id: 1, key: 'project1', image: '/build1.png' },
  { id: 2, key: 'project2', image: '/build2.png' },
  { id: 3, key: 'project3', image: '/build3.png' },
  { id: 4, key: 'project4', image: '/build1.png' },
  { id: 5, key: 'project5', image: '/build2.png' },
  { id: 6, key: 'project6', image: '/build3.png' }
];

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="py-24 bg-[#EFEDEA]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#34222E]/5 rounded-full text-sm font-medium text-[#34222E] mb-4">
              {t('discover')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#34222E] mb-6">
              {t('sectionTitle')}
            </h2>
            <p className="text-lg text-[#34222E]/70 max-w-3xl mx-auto">
              {t('sectionDescription')}
            </p>
          </div>

          {/* Projects Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              spaceBetween={32}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              dir={isRTL ? 'rtl' : 'ltr'}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 },
              }}
              onInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              className="!pb-12"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-3xl aspect-[0.8] h-[500px] bg-[#34222E]"
                  >
                    <Image
                      src={project.image}
                      alt={t(`${project.key}.title`)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#34222E]/20 to-[#34222E]/90" />
                    <div className="absolute bottom-0 inset-x-0 p-8 flex flex-col items-start">
                      <h3 className="text-2xl font-bold text-[#EFEDEA] mb-4 group-hover:text-white transition-colors">
                        {t(`${project.key}.title`)}
                      </h3>
                      <Link 
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#EFEDEA] text-[#34222E] rounded-full
                                 transform transition-all duration-300 hover:bg-[#EFEDEA] hover:scale-105"
                      >
                        {t('viewProject')}
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-center mt-8">
              <button
                ref={prevRef}
                className="w-12 h-12 rounded-full border-2 border-[#34222E] flex items-center justify-center
                         bg-transparent hover:bg-[#34222E] hover:text-[#EFEDEA] transition-all duration-300"
              >
                {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
              </button>
              <button
                ref={nextRef}
                className="w-12 h-12 rounded-full border-2 border-[#34222E] flex items-center justify-center
                         bg-transparent hover:bg-[#34222E] hover:text-[#EFEDEA] transition-all duration-300"
              >
                {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* View More Link */}
          <div className="text-center mt-16">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 text-[#34222E] border-2 border-[#34222E] rounded-full
                       text-xl font-bold hover:bg-[#34222E] hover:text-[#EFEDEA] transition-all duration-300
                       transform hover:scale-105"
            >
              {t('viewMore')}
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
