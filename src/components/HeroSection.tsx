import { useNavigate } from 'react-router-dom';
import { MapPin } from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";
import psosLogo from '@/assets/logo.png';

export function HeroSection() {
  const navigate = useNavigate();

  const chapters = [
    { name: "Chicago, IL", location: "Chicago", route: "/chapters/chicago" },
    { name: "Ann Arbor, MI", location: "Ann Arbor", route: "/chapters/michigan" },
    { name: "Union County, NJ", location: "Union County", route: "/chapters/newjersey" }
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--pink-light)] via-white to-[var(--matcha-light)] min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <div className="fade-in">
          {/* Logo and organization name */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center p-2">
              <img 
                src={psosLogo} 
                alt="Project Save Our Skin Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl mb-6 text-gradient">
            Project Save Our Skin
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Empowering communities through skin cancer awareness, prevention, and early detection. 
            Together, we can save lives and protect the ones we love.
          </p>
          
          {/* Chapter location buttons */}
          <div className="mb-8">
            <h3 className="text-xl mb-6 text-gray-700">Find Your Local Chapter</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {chapters.map((chapter, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-pink-100 hover:border-pink-200 bg-white/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-lg">{chapter.name}</span>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-[var(--pink-dark)] text-white rounded-full transition-all duration-200"
                    onClick={() => navigate(chapter.route)}
                  >
                    Visit {chapter.location}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-[var(--pink-dark)] text-white px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn Our Mission
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[var(--matcha-primary)] text-[var(--matcha-primary)] hover:bg-[var(--matcha-light)] px-8 py-3 rounded-full transition-all duration-200"
              onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}