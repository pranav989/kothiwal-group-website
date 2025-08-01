import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import charityBg from "@/assets/charity-bg.jpg";

const CharitableTrust = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${charityBg})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Kothiwal Charitable Trust
          </h1>
          <p className="text-xl font-light mb-12 leading-relaxed">
            We oversee multiple social service projects in India. Most notably, we run a success school by till class 12th in a village LOSAL near Sikkar district in Rajasthan which is been managed by Rastriya Seva Sang. Further planning to open multiple other facilities such as a Guest House & Marriage hall in the same locality.
          </p>
        </div>
      </section>

      {/* School Showcase Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kothiwal Madhyamik Adarsh Vidya Mandir
            </h2>
            <p className="text-xl text-muted-foreground">
              Empowering Education in Rural Rajasthan
            </p>
          </div>

          {/* Video Section - Full Width */}
          <div className="mb-12">
            <div className="w-full aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/H4tDclaMjYU?autoplay=1"
                title="Kothiwal Charitable Trust School Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* School Description with Image */}
          <Card>
            <CardHeader>
              <CardTitle>About the School</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                  <p className="mb-6">
                    KOTHIWAL SEC.S., A.V.M. LOSAL was established in 1992. It is located in an urban area in the DANTARAMGARH block of SIKAR district of Rajasthan. The school consists of Grades from 1 to 10 and is co-educational. It also has an attached pre-primary section. The school is Non-Ashram type (Govt.) in nature and is not using school building as a shift-school. Hindi is the medium of instructions in this school. This school is approachable by all weather roads. In this school, academic session usually starts in April.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">Infrastructure & Facilities</h3>
                  <p className="mb-6">
                    The school has a private building. It has got 13 classrooms for instructional purposes. All the classrooms are in good condition including 2 other rooms for non-teaching activities. The school has a separate room for the Head master/Teacher. The school has a Pucca boundary wall and an electric connection. The source of drinking water in the school is tap water and it is functional. The school also has functioning toilets for boys and girls alike. The school also has a playground and a library consisting of over 1400 books.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">Current Status</h3>
                  <p>
                    The school currently does not have a ramp for disabled children or computers for teaching and learning purposes. Additionally mid-day meal services are also unavailable.
                  </p>
                </div>
                
                {/* School Campus Images */}
                <div className="md:col-span-1 space-y-4">
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/b4c63b6b-1559-4122-b12e-ded4bbd91ab0.png" 
                      alt="कोठीवाल आदर्श विद्या मंदिर लोसल" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/c4a5c05c-7b0e-4eb5-ace6-3e963bebd7d5.png" 
                      alt="कोठीवाल मा. आदर्श विद्या मंदिर लोसल (सीकर)" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CharitableTrust;