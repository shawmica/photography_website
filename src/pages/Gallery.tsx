
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalleryGrid } from "@/components/GalleryGrid";

const galleryImages = [
  {
    id: 1,
    src: "https://i.pinimg.com/474x/aa/72/91/aa72913855f9e02a949a5c392b48299e.jpg",
    alt: "Mountain landscape",
    category: "landscape"
  },
  {
    id: 2,
    src: "https://i.pinimg.com/474x/94/02/d4/9402d4fbc0580615b9993631fd1999dc.jpg",
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
  },
  {
    id: 7,
    src: "https://i.pinimg.com/474x/4b/73/aa/4b73aa2d071775966b8328f1f81536f7.jpg",
    alt: "Woman with laptop",
    category: "portrait"
  },
  {
    id: 8,
    src: "https://i.pinimg.com/474x/2d/88/1a/2d881aaf97239004574849af6cd2a877.jpg",
    alt: "women speaking",
    category: "lifestyle"
  },
  {
    id: 9,
    src: "https://i.pinimg.com/474x/98/ab/b7/98abb7fadeb901481fcb7c6abc6c6460.jpg",
    alt: "Woman speaking",
    category: "lifestyle"
  }
];

const Gallery = () => {
  const categories = ["landscape", "wildlife", "portrait", "lifestyle"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20 px-6 md:px-12">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="section-title animate-fade-in">Photo Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Browse through our collection of high-quality photographs across various categories.
            </p>
          </div>
          
          <GalleryGrid images={galleryImages} categories={categories} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
