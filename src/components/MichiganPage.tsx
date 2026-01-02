import { GraduationCap, MapPin, Users, BookOpen, Award, ExternalLink, Instagram } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ContactSection } from "./ContactSection";
import umichLogo from '../assets/umich.png';
import psosLogo from '../assets/logo.png';

export function MichiganPage() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "University Partnership",
      description: "Official collegiate chapter registered with the University of Michigan"
    },
    {
      icon: Users,
      title: "Dermatology Education Fellows",
      description: "Specialized program for college and medical students"
    },
    {
      icon: BookOpen,
      title: "Pre-Med & Medical Students",
      description: "Perfect for future healthcare professionals with hands-on training"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--matcha-light)] via-white to-[var(--pink-light)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--matcha-light)] rounded-full px-4 py-2 mb-6">
              <div className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src={psosLogo} 
                  alt="Project Save Our Skin Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-[var(--matcha-primary)]">Collegiate Chapter</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl mb-6">
              <span className="text-gradient">Ann Arbor, </span>
              <span className="text-[var(--matcha-primary)]">Michigan</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Our University of Michigan collegiate chapter brings skin cancer prevention education directly to 
              campus communities. Led by passionate students serving as <strong className="text-[var(--matcha-primary)]">dermatology education fellows</strong>, 
              we're building the next generation of health advocates and community leaders with specialized training for schools and communities.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-[var(--matcha-primary)]" />
                <span className="text-lg">Ann Arbor, Michigan</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-lg text-gray-600">University of Michigan</div>
            </div>
            
            {/* University of Michigan Logo */}
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => window.open("https://umich.edu", "_blank")}
                className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <img 
                  src={umichLogo} 
                  alt="University of Michigan Logo" 
                  className="w-16 h-16 object-contain"
                />
              </button>
            </div>
            
            {/* Instagram and Application Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-[var(--matcha-primary)] hover:bg-[var(--matcha-dark)] text-white px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScnIIefemONCTetjKFt7pnmcMLoK33TONZMcJunQogWtmRv_Q/viewform?usp=header", "_blank")}
              >
                Apply to Join This Chapter
                <ExternalLink className="w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-[var(--matcha-primary)] text-[var(--matcha-primary)] hover:bg-[var(--matcha-light)] px-8 py-3 rounded-full transition-all duration-200 inline-flex items-center gap-2"
                onClick={() => window.open("https://instagram.com/projectsaveourskinumich", "_blank")}
              >
                <Instagram className="w-4 h-4" />
                Follow Us @projectsaveourskinumich
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Chapter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl mb-6 text-gradient">University of Michigan Chapter</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our University of Michigan chapter is an official collegiate chapter registered with the University of Michigan, 
                    representing the expansion of Project Save Our Skin into higher education. We focus specifically on 
                    <strong className="text-[var(--matcha-primary)]"> skin cancer prevention education</strong> and reach college 
                    students at a critical time in their lives for establishing healthy habits.
                  </p>
                  
                  <p>
                    This chapter is exclusively for <strong className="text-[var(--matcha-primary)]">college and medical students</strong> 
                    who want hands-on experience in health advocacy. Our members serve as <strong className="text-[var(--matcha-primary)]">dermatology education fellows</strong>, 
                    receiving specialized training and regularly visiting schools to provide education, giving students practical experience in community health outreach.
                  </p>
                  
                  <p>
                    Led by passionate student volunteers serving as dermatology education fellows, this collegiate chapter focuses on campus-wide 
                    education initiatives, peer-to-peer outreach, and building lasting partnerships with 
                    university health services and student organizations while maintaining our core mission 
                    of skin cancer prevention and early detection education.
                  </p>
                </div>
              </div>
              
              <div>
                <Card className="p-8 border-[var(--matcha-medium)] bg-gradient-to-br from-[var(--matcha-light)] to-white">
                  <div className="text-center">
                    <GraduationCap className="w-16 h-16 text-[var(--matcha-primary)] mx-auto mb-4" />
                    <h3 className="text-2xl mb-4 text-gray-800">Campus Impact</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Reaching thousands of students through innovative programming, peer education, 
                      and strategic partnerships across the University of Michigan campus, with specialized 
                      training for school visits and community outreach through our dermatology education fellows program.
                    </p>
                    
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[var(--matcha-primary)] rounded-full"></div>
                        <span className="text-gray-600">Student health fairs participation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[var(--matcha-primary)] rounded-full"></div>
                        <span className="text-gray-600">Trained school visit programs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[var(--matcha-primary)] rounded-full"></div>
                        <span className="text-gray-600">Dermatology education fellow training</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[var(--matcha-primary)] rounded-full"></div>
                        <span className="text-gray-600">Campus recreation collaborations</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--matcha-light)] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Dermatology Education Fellows</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our chapter is led by dedicated University of Michigan college and medical students who serve as 
                dermatology education fellows, passionate about health advocacy and community service with specialized training for educational outreach.
              </p>
            </div>
            
            <Card className="p-8 md:p-12 border-[var(--matcha-medium)] bg-white/90 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[var(--matcha-light)] to-[var(--matcha-medium)] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-16 h-16 text-[var(--matcha-primary)]" />
                </div>
                
                <h3 className="text-2xl mb-4 text-gray-800">Dermatology Education Fellows Program</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our dermatology education fellows program consists of <strong className="text-[var(--matcha-primary)]">college and medical students</strong> from various 
                  disciplines including <strong className="text-[var(--matcha-primary)]">pre-medicine, medical school, public health, psychology, and communications</strong>. 
                  This diverse background allows us to approach skin cancer prevention education from multiple 
                  perspectives and create comprehensive programming with specialized training for school visits.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <h4 className="text-lg text-gray-800">Fellow Leadership Roles:</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>• Lead Dermatology Education Fellow</div>
                      <div>• Program Coordinator</div>
                      <div>• School Outreach Fellow</div>
                      <div>• Training & Education Director</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg text-gray-800">Academic Backgrounds:</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>• <strong>Pre-Medical Studies</strong></div>
                      <div>• <strong>Medical Students</strong></div>
                      <div>• <strong>College Students Only</strong></div>
                      <div>Public Health & Communications</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Chapter Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Chapter Achievements</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Making a meaningful impact on the University of Michigan campus and local schools through 
                our dermatology education fellows program and specialized skin cancer prevention education.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center border-[var(--matcha-medium)] hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--matcha-light)] to-[var(--matcha-medium)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-[var(--matcha-primary)]" />
                  </div>
                  <h4 className="mb-3 text-gray-800">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}