
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    id: 1,
    image: "https://i.pinimg.com/474x/49/2c/7b/492c7b8f91d1a23d68e50d3f34717dc2.jpg",
    title: "Capture Life's Moments"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/474x/aa/72/91/aa72913855f9e02a949a5c392b48299e.jpg",
    title: "See the World Differently"
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/b2/db/1c/b2db1c2902681c1cc99f4d6edb79d3a1.jpg",
    title: "Every Frame Tells a Story"
  }
];

const featuredImages = [
  {
    id: 1,
    src: "https://i.pinimg.com/474x/e7/98/0a/e7980aae93c8fba8f8f388db647113f3.jpg",
    alt: "Mountain landscape",
    category: "landscape"
  },
  {
    id: 2,
    src: "https://i.pinimg.com/474x/c1/b3/d6/c1b3d6e670453acb441df2fa12f6889c.jpg",
    alt: "Mountain river",
    category: "landscape"
  },
  {
    id: 3,
    src: "https://i.pinimg.com/474x/32/57/8c/32578cc8a818515b5b3633cfc4f72918.jpg",
    alt: "Deer in forest",
    category: "wildlife"
  },
  {
    id: 4,
    src: "https://i.pinimg.com/474x/1d/34/bd/1d34bde9819b79c065bf5ac06a53ada9.jpg",
    alt: "Forest sunlight",
    category: "landscape"
  },
  {
    id: 5,
    src: "https://i.pinimg.com/474x/a8/f7/9e/a8f79e9d17897a61148a1c1b9b83a959.jpg",
    alt: "Pine trees",
    category: "landscape"
  },
  {
    id: 6,
    src: "https://i.pinimg.com/474x/cd/1a/29/cd1a2907bbac5dd778bdf23af8ac6101.jpg",
    alt: "Foggy mountain",
    category: "landscape"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section>
          <HeroSlider slides={heroSlides} />
        </section>
        
        {/* About Intro Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="container max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 animate-fade-in">Welcome to Frame Focus</p>
            <h2 className="section-title animate-fade-in">Capturing Life's Most Beautiful Moments</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
              Specializing in landscape, portrait, and wildlife photography, 
              we transform fleeting moments into timeless images that tell your unique story.
            </p>
            <Link 
              to="/about"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors animate-fade-in"
            >
              Learn More
            </Link>
          </div>
        </section>
        
        {/* Featured Work Section */}
        <section className="py-20 px-6 md:px-12 bg-secondary">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 animate-fade-in">Portfolio</p>
              <h2 className="section-title animate-fade-in">Featured Work</h2>
            </div>
            
            <GalleryGrid images={featuredImages} />
            
            <div className="text-center mt-12">
              <Link 
                to="/gallery"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors animate-fade-in"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>
        
        {/* Contact CTA Section */}
        <section className="py-20 px-6 md:px-12 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1472396961693-142e6e269027)', backgroundAttachment: 'fixed' }}>
          <div className="container max-w-4xl mx-auto text-center text-white relative z-10">
            <div className="absolute inset-0 bg-black/60 -z-10"></div>
            <h2 className="section-title animate-fade-in">Ready to Capture Your Story?</h2>
            <p className="text-lg md:text-xl mb-8 animate-fade-in">
              Let's work together to create stunning images that perfectly capture your vision.
            </p>
            <Link 
              to="/contact"
              className="inline-block px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors animate-fade-in"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
