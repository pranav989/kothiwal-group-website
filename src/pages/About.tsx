import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${aboutBg})` }}
          >
            <div className="absolute inset-0 bg-primary/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Kothiwal Group
            </h1>
            <p className="text-xl font-light">
              Our journey of growth, innovation, and community service
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg shadow-lg p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Our Story
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p className="text-lg mb-6">
                  Kothiwal Group was started in the year 1967 by MR. B.L. Kothiwal, our group chairman, 
                  as a young commission agent. We have dealt in all types of Yarn, Raw cotton, PSF and 
                  other textile products over all of North India. Our company was also involved in export 
                  of Yarn and other textile products in addition to import of Timber and Gambier from 
                  various countries.
                </p>

                <p className="text-lg mb-6">
                  Over the decades, what began as a modest textile trading business has evolved into a 
                  diversified group with interests spanning healthcare, finance, real estate, infrastructure, 
                  and social welfare. Our commitment to quality, integrity, and community development has 
                  remained constant throughout our journey.
                </p>

                <p className="text-lg">
                  Today, the Kothiwal Group stands as a testament to the vision and perseverance of our 
                  founder, continuing to build bridges between tradition and innovation while contributing 
                  to the economic and social development of our communities.
                </p>
              </div>

              {/* Values Section */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Integrity</h3>
                  <p className="text-muted-foreground">Upholding the highest standards of honesty and transparency in all our dealings.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Excellence</h3>
                  <p className="text-muted-foreground">Striving for excellence in every aspect of our business operations and services.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
                  <p className="text-muted-foreground">Committed to giving back and making a positive impact on the communities we serve.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;