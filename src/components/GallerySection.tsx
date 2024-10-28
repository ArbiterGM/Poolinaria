import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Importing gallery images
import gallery1 from "../assets/images/gallery/gallery1.jpg"; // 16:9
import gallery2 from "../assets/images/gallery/gallery2.jpg"; // 9:16
import gallery3 from "../assets/images/gallery/gallery3.jpg"; // 16:9
import gallery4 from "../assets/images/gallery/gallery4.jpg"; // 9:16
import gallery5 from "../assets/images/gallery/gallery5.jpeg"; // 16:9
import gallery6 from "../assets/images/gallery/gallery6.jpg"; // 9:16

// Images array
const galleryImages = [
  { img: gallery1, aspect: "16:9" },
  { img: gallery2, aspect: "9:16" },
  { img: gallery3, aspect: "9:16" },
  { img: gallery4, aspect: "16:9" },
  { img: gallery5, aspect: "16:9" },
  { img: gallery6, aspect: "9:16" },
];

const GalleryComponent: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (img: string) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const controls = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView1) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "linear" },
      });
    }
  }, [controls, inView1]);
  return (
    <section
      className="pt-10 pb-16 lg:py-16 px-4 bg-darkBg container mx-auto"
      id="gallery"
    >
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, x: "-10rem" }}
        animate={controls}
        className="flex justify-center lg:justify-normal items-center gap-8 mb-4 max-w-6xl mx-auto"
      >
        <div className="lg:hidden h-[3px] w-24 bg-primary mb-2"></div>
        <h2 className="text-primary text-lg font-bold tracking-tighter whitespace-nowrap">
          ჩვენი გალერეა
        </h2>
        <div className="h-[3px] w-24 bg-primary mb-2"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {galleryImages.map((img, i) => {
          const isOddPair = Math.floor(i / 2) % 2 !== 0;

          if (i % 2 === 0) {
            return (
              <div key={i} className="flex flex-col gap-4 overflow-hidden mb-0">
                <div
                  className={`flex-1 cursor-pointer transition-transform hover:scale-105 duration-150 ${
                    isOddPair ? "flex-col-reverse" : "flex-col"
                  }`}
                  onClick={() => openModal(img.img)}
                >
                  <img
                    src={img.img}
                    alt={`gallery-image-${i}`}
                    className={`w-full object-cover rounded-lg shadow-lg ${
                      img.aspect === "16:9" ? "aspect-[16/9]" : "aspect-[9/16]"
                    }`}
                    loading="lazy"
                  />
                </div>

                {galleryImages[i + 1] && (
                  <div
                    className={`flex-1 cursor-pointer transition-transform hover:scale-105 duration-150 ${
                      isOddPair ? "flex-col" : "flex-col-reverse"
                    }`}
                    onClick={() => openModal(galleryImages[i + 1].img)}
                  >
                    <img
                      src={galleryImages[i + 1].img}
                      alt={`gallery-image-${i + 1}`}
                      className={`w-full object-cover rounded-lg shadow-lg ${
                        galleryImages[i + 1].aspect === "16:9"
                          ? "aspect-[16/9]"
                          : "aspect-[9/16]"
                      }`}
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Modal for Fullscreen Image */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage!}
            alt="Selected"
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-4 right-4 text-white text-5xl"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default GalleryComponent;
