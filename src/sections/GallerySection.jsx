import EmblaCarousel from "../components/EmblaCarousel";
import { assetPath } from "../lib/assetPath";

const slides = [
  {
    src: assetPath("picture1 (1).jpg"),
    alt: "Nina and Nemanja photo 1",
  },
  {
    src: assetPath("picture2.jpg"),
    alt: "Nina and Nemanja photo 2",
  },
  {
    src: assetPath("picture3.jpg"),
    alt: "Nina and Nemanja photo 3",
  },
  {
    src: assetPath("picture4.jpg"),
    alt: "Nina and Nemanja photo 4",
  },
  {
    src: assetPath("picture5.jpg"),
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
