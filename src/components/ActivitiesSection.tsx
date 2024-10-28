import React, { useEffect, useState } from "react";
import service1 from "../assets/images/services/service1.jpeg";
import service2 from "../assets/images/services/service2.jpeg";
import service3 from "../assets/images/services/service3.png";
import service4 from "../assets/images/services/service4.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const activities = [
  {
    title: "ბილიარდის მაგიდები",
    price: 15,
    description:
      "8 ბილიარდის მაგიდა მეგობრული და პროფესიონალური შეჯიბრებებისთვის.",
    img: service1,
  },
  {
    title: "PS5",
    price: 10,
    description: "ითამაშეთ სხვადასხვა თამაშები ფლეისთეიშენზე მეგობართან ერთად.",
    img: service2,
  },
  {
    title: "ფილმების პირადი ოთახები",
    price: 10,
    description: "ისიამოვნეთ კომფორტულ გარემოში ფილმების ყურებით.",
    img: service3,
  },
  {
    title: "საჭეები",
    price: 20,
    description: "ისიამოვნეთ საჭის სიმულატორებით სხვადასხვა თამაშებზე.",
    img: service4,
  },
];

const ActivitiesSection: React.FC = () => {
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
      className="pb-16 lg:py-16 px-4 bg-darkBg container mx-auto"
      id="services"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, x: "-10rem" }}
          animate={controls}
          className="flex justify-center lg:justify-normal items-center gap-8 mb-4"
        >
          <div className="lg:hidden h-[3px] w-full bg-primary mb-2"></div>
          <h2 className="text-primary text-lg font-bold tracking-tighter whitespace-nowrap">
            ჩვენი სერვისები
          </h2>
          <div className="h-[3px] w-full lg:w-24 bg-primary mb-2"></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 max-w-7xl mx-auto">
        {activities.map((activity, i) => (
          <div
            key={i}
            className={`bg-black p-4 rounded-lg ${
              i === 3 && "lg:col-start-2 xl:col-start-auto"
            }`}
          >
            <img
              src={activity.img}
              alt={activity.title}
              className={`w-full h-48 object-cover rounded-t-lg cursor-zoom-in ${
                i === 0 && "brightness-80"
              }`}
              onClick={() => openModal(activity.img)}
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl text-primary">{activity.title}</h3>
              <h3 className="text-gray-400 font-bold pt-1">
                {activity.price.toFixed(2)}₾ / საათი
              </h3>
              <p className="text-secondary mt-2">{activity.description}</p>
              <span className="text-xs font-bold text-emerald-600">
                დასაჯავშნად დაგვირეკეთ{" "}
                <a className="underline" href="tel:+995595881811">
                  +(995) 595 88 18 11
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Full screen"
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

export default ActivitiesSection;
