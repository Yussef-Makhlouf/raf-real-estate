'use client'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Building2 } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: "مجالس 67 حي الرمال", 
    image: "/build1.png",
    location: "الرياض",
    area: "500م²",
    status: "مكتمل"
  },
  {
    id: 2,  
    title: "مجالس 67 حي الرمال", 
    image: "/build1.png",
    location: "جده",
    area: "500م²",
    status: "مكتمل" 
  },
  {
    id: 3,
    title: "مجالس 67 حي الرمال",
    image: "/build1.png",
    location: "جده",
    area: "500م²",
    status: "مكتمل"
    
  }

  
  

];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#F8F9FA]">
      <Navbar />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#34222E] font-cairo mb-4">
              مشاريعنا
            </h1>
            <p className="text-[#6C757D] text-lg max-w-2xl mx-auto">
              نقدم لكم مجموعة من أفضل المشاريع السكنية المميزة
            </p>
            <div className="w-32 h-1 bg-[#C48765] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.id}`}
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E9ECEF] hover:border-[#C48765] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-[#34222E] px-4 py-2 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-[#34222E] text-right">
                    {project.title}
                  </h3>

                  <div className="flex items-center justify-end gap-6 text-[#6C757D]">
                    <div className="flex items-center gap-2">
                      <span>{project.area}</span>
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{project.location}</span>
                      <MapPin className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#E9ECEF]">
                    <div className="flex items-center gap-2 text-[#C48765] font-medium group-hover:text-[#8B7B45] transition-colors duration-300">
                      <span>عرض التفاصيل</span>
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center group-hover:bg-[#C48765] transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5 text-[#C48765] group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
