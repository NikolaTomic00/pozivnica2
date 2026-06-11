import EmblaCarousel from "../components/EmblaCarousel";

const slides = [
  {
    src: "/picture1 (1).jpg",
    alt: "Nina and Nemanja photo 1",
  },
  {
    src: "/picture2.jpg",
    alt: "Nina and Nemanja photo 2",
  },
  {
    src: "/picture3.jpg",
    alt: "Nina and Nemanja photo 3",
  },
  {
    src: "/picture4.jpg",
    alt: "Nina and Nemanja photo 4",
  },
  {
    src: "/picture5.jpg",
    alt: "Nina and Nemanja photo 5",
  },
];

function GallerySection() {
  return (
    <section className="gallery-section" aria-label="Galerija">
      <div className="gallery-inner">
        <p className="gallery-title">Naši trenuci</p>
        <EmblaCarousel slides={slides} options={{ align: "center" }} />
      </div>
    </section>
  );
}

export default GallerySection;
