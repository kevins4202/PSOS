import { Users, MapPin, Award, Calendar, Heart, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ContactSection } from "./ContactSection";
import psosLogo from '../assets/logo.png';

export function NewJerseyPage() {
  const achievements = [
    {
      icon: Award,
      title: "East Coast Expansion",
      description: "Bringing our mission to the Atlantic region"
    },
    {
      icon: Users,
      title: "Community Partnerships",
      description: "Building strong local relationships"
    },
    {
      icon: Heart,
      title: "Regional Programs",
      description: "Tailored initiatives for local communities"
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
              <span className="text-[var(--matcha-primary)]">East Coast Chapter</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl mb-6">
              <span className="text-gradient">Union County, </span>
              <span className="text-[var(--matcha-primary)]">New Jersey</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Our East Coast expansion brings Project Save Our Skin's mission to New Jersey communities. 
              With dedicated leadership and regional focus, this chapter serves as a model for 
              growth and community engagement.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
              <MapPin className="w-5 h-5 text-[var(--matcha-primary)]" />
              <span className="text-lg">Union County, New Jersey • East Coast Chapter</span>
            </div>
            
            {/* Application Link */}
            <Button 
              className="bg-[var(--matcha-primary)] hover:bg-[var(--matcha-dark)] text-white px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScnIIefemONCTetjKFt7pnmcMLoK33TONZMcJunQogWtmRv_Q/viewform?usp=header", "_blank")}
            >
              Apply to Join This Chapter
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Chapter Leadership</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Meet the dedicated co-presidents leading our East Coast expansion.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Co-President 1 */}
              <Card className="p-8 border-[var(--matcha-medium)] hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[var(--matcha-light)] to-[var(--matcha-medium)] rounded-full p-2">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1494790108755-2616b2e8a9d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Co-President 1"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  <h3 className="text-xl mb-2 text-gray-800">Co-President Name</h3>
                  <div className="inline-block bg-[var(--matcha-light)] text-[var(--matcha-primary)] px-3 py-1 rounded-full text-sm mb-4">
                    Co-President
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    [Brief bio about the co-president's background, involvement with the organization, 
                    and passion for skin health advocacy. This space is reserved for their personal 
                    story and leadership contributions to the New Jersey chapter.]
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• Area of Focus: [Specialty area]</div>
                    <div>• Joined: [Year]</div>
                    <div>• Background: [Brief background]</div>
                  </div>
                </div>
              </Card>
              
              {/* Co-President 2 */}
              <Card className="p-8 border-[var(--matcha-medium)] hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[var(--matcha-light)] to-[var(--matcha-medium)] rounded-full p-2">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Co-President 2"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  <h3 className="text-xl mb-2 text-gray-800">Co-President Name</h3>
                  <div className="inline-block bg-[var(--matcha-light)] text-[var(--matcha-primary)] px-3 py-1 rounded-full text-sm mb-4">
                    Co-President
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    [Brief bio about the co-president's background, involvement with the organization, 
                    and passion for skin health advocacy. This space is reserved for their personal 
                    story and leadership contributions to the New Jersey chapter.]
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• Area of Focus: [Specialty area]</div>
                    <div>• Joined: [Year]</div>
                    <div>• Background: [Brief background]</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Story */}
      <section className="py-20 bg-gradient-to-br from-[var(--matcha-light)] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Our East Coast Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                How Project Save Our Skin expanded to serve New Jersey communities.
              </p>
            </div>
            
            <Card className="p-8 md:p-12 border-[var(--matcha-medium)] bg-white/90 backdrop-blur-sm">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The establishment of our Union County chapter represents a significant milestone in 
                  Project Save Our Skin's growth from a local Chicago initiative to a nationwide movement. 
                  Recognizing the need for skin health advocacy on the East Coast, our organization 
                  expanded to New Jersey to serve diverse communities with unique needs and challenges.
                </p>
                
                <p>
                  Our New Jersey chapter focuses on building strong community partnerships, developing 
                  culturally sensitive programming, and establishing sustainable outreach initiatives 
                  that can serve as a model for future East Coast expansion.
                </p>
                
                <p>
                  Through dedicated leadership and community engagement, this chapter has quickly 
                  established itself as a vital resource for skin health education and advocacy in 
                  the Union County area and beyond.
                </p>
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
                Building impact and community connections across New Jersey.
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

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--matcha-light)] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-6 text-gradient">Our Programs</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Regional initiatives designed for New Jersey communities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[var(--pink-light)] to-[var(--matcha-light)] rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="mb-3 text-gray-800">Community Health Fairs</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Partnering with local organizations to provide skin health screenings, education, 
                    and resources at community events throughout Union County.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="mb-3 text-gray-800">School Partnerships</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Working with local schools to provide age-appropriate skin health education and 
                    sun safety programs for students of all ages.
                  </p>
                </div>
                
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="mb-3 text-gray-800">Cultural Outreach</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Developing culturally sensitive programming that addresses the unique skin health 
                    needs of New Jersey's diverse communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}