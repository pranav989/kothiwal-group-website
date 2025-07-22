import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanyShowcase from "@/components/CompanyShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Company Introduction Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            About Kothiwal Group
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-6">
              The Kothiwal Group, situated in Kanpur, Uttar Pradesh, comprises varied companies spanning multiple sectors, 
              including healthcare, trading, finance, real estate, and infrastructure. With our subsidiaries and charitable 
              initiatives, we aim to make a positive difference in our communities.
            </p>
            <p className="text-lg">
              Delve into our rich history and future aspirations. We are devoted to enhancing lives through our businesses 
              and charitable endeavors, ensuring sustainable growth and development for a brighter tomorrow.
            </p>
          </div>
        </div>
      </section>

      <CompanyShowcase />
      <Footer />
    </div>
  );
};

export default Index;
