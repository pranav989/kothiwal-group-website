import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import healthcareImg from "@/assets/healthcare.jpg";
import financeImg from "@/assets/finance.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import constructionImg from "@/assets/construction.jpg";
import estateImg from "@/assets/estate.jpg";
import charityImg from "@/assets/charity.jpg";
import textilesImg from "@/assets/textiles.jpg";
import irenesLogo from "@/assets/irenes-logo.png";
import kothiwalTextilesLogo from "@/assets/kothiwal-textiles-logo.png";

const companies = [
  {
    id: 1,
    name: "Kothiwal Healthcare Pvt. Ltd.",
    tagline: "Caring for Well-Being",
    description: "We deal in German Homeopathic medicines by the name of Reckeweg since 1997, Ayurvedic medicines of Divya Pharmacy (Patanjali), Health Supplements & Nutraceuticals products by Patanjali and FMCG products of Patanjali Ayurveda ltd as Super Distributors for Kanpur and surrounding districts since 2012. We also provide logistics for its pan-India businesses.",
    image: healthcareImg,
    reverse: false
  },
  {
    id: 3,
    name: "Irene's Coffee Company Pvt. Ltd.",
    tagline: "Hot Tea Crackling Coffee Taste",
    description: "We are a renowned name in the beverage industry that supplies state-of-the-art coffee vending machines and myriad of tea products to Corporate and residential clients all over India. Taking into account the ever-increasing demands of our clients in the Retail, Ho.Re.Ca & Domestic Consumer market segments, we have come up with innovative coffee dispensing solutions that provide efficiency of the highest order.",
    image: "/lovable-uploads/8edbbdd2-a5c0-4987-b144-e10e380e77d1.png",
    reverse: true,
    link: "https://www.irenesgroup.com/"
  },
  {
    id: 6,
    name: "Kothiwal Charitable Trust",
    tagline: "Helping people grow",
    description: "We operates multiple social service projects in India. Most notably, we run a success school by the name Chi in a village (GOSAL near Sikri) Hathras, Uttar Pradesh, and provides education to more than 240 students every day. We are further planning to open multiple other facilities such as a Guest House and Exhibition hall in the same location.",
    image: charityImg,
    reverse: false,
    internalLink: "/charitable-trust"
  },
  {
    id: 2,
    name: "Kothiwal Finance and Investment Ltd.",
    tagline: "Driving Financial Success",
    description: "Our financial services are designed to optimize market performance and facilitate profitability for all stakeholders involved. We deal mainly in the stock market and mutual fund investment.",
    image: financeImg,
    reverse: true
  },
  {
    id: 4,
    name: "Chetna Buildwell Pvt. Ltd.",
    tagline: "Building the Future",
    description: "We deal in Real Estate development in various locations in and around India.",
    image: constructionImg,
    reverse: false
  },
  {
    id: 5,
    name: "Jai Kothiwal Estate Pvt. Ltd.",
    tagline: "",
    description: "We deal in Infrastructure and reselling of land and other properties.",
    image: estateImg,
    reverse: true
  },
  {
    id: 7,
    name: "Kothiwal Textiles Pvt. Ltd.",
    tagline: "Bridging Trading Gaps",
    description: "We deal in the trade of Yarn & Fibre.",
    image: "/lovable-uploads/64e9f600-1639-4f38-8448-163a7aa8b230.png",
    reverse: false
  }
];

const CompanyCard = ({ company, index }: { company: typeof companies[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`flex flex-col ${company.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12 bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={company.image}
            alt={company.name}
            className="w-full h-64 lg:h-80 object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                {(company as any).link ? (
                  <a href={(company as any).link} target="_blank" rel="noopener noreferrer" className="visible-link">
                    {company.name}
                  </a>
                ) : (company as any).internalLink ? (
                  <Link to={(company as any).internalLink} className="visible-link">
                    {company.name}
                  </Link>
                ) : (
                  company.name
                )}
              </h3>
              {/* Logo inline with heading for specific companies */}
              {company.id === 3 && (
                <div className="w-16 h-16 rounded-lg flex items-center justify-center ml-4">
                  <img 
                    src="/lovable-uploads/eb2877bb-736b-48d0-9872-544f3e9d0342.png" 
                    alt="Irene's Coffee Company Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              {company.id === 7 && (
                <div className="w-16 h-16 rounded-lg flex items-center justify-center ml-4">
                  <img 
                    src="/lovable-uploads/2eb4e4dc-5cfd-436d-bea0-c813f4ae6c65.png" 
                    alt="Kothiwal Textiles Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
            {company.tagline && (
              <p className="text-lg text-primary font-semibold mb-4">
                {company.tagline}
              </p>
            )}
            <p className="text-muted-foreground leading-relaxed">
              {company.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CompanyShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the diverse portfolio of companies under the Kothiwal Group umbrella
          </p>
        </div>

        <div className="space-y-16">
          {companies.map((company, index) => (
            <CompanyCard key={company.id} company={company} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyShowcase;