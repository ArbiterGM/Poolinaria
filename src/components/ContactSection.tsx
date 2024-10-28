import IonIcon from "@reacticons/ionicons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ContactSection = () => {
  const controls = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView1) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "linear" },
      });
    }
  }, [controls, inView1]);

  return (
    <section id="contact" className="py-16 container mx-auto">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="flex items-center justify-center gap-8 mb-10"
      >
        <div className="h-[3px] w-24 bg-primary mb-2"></div>
        <h2 className="text-primary text-lg font-bold tracking-tighter whitespace-nowrap">
          საკონტაქტო ინფორმაცია
        </h2>
        <div className="h-[3px] w-24 bg-primary mb-2"></div>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
        <iframe
          className="h-[300px] w-[350px] md:h-[450px] md:w-[550px] rounded-md shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11906.46817025335!2d44.7807794!3d41.7503524!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473006afbca9b%3A0x18c19635fbd1ea7a!2z4YOe4YOj4YOa4YOY4YOc4YOQ4YOg4YOY4YOQIC0gUG9vbGluYXJpYQ!5e0!3m2!1ska!2sge!4v1729431174241!5m2!1ska!2sge"
          loading="lazy"
        ></iframe>
        <div className="flex flex-col justify-center gap-10 md:gap-12 font-sans text-xl">
          <a
            className="flex items-center gap-2 text-base sm:text-lg hover:text-secondary-color duration-150"
            href="https://maps.app.goo.gl/oP7Gzcqi29wuCE4z8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon
              className="text-3xl md:text-4xl text-primary"
              name="location-outline"
            />
            <p className="text-xl hover:text-primary duration-150">
              თორნიკე ერისთავის #16
            </p>
          </a>

          <a
            className="flex items-center gap-2 text-base sm:text-lg hover:text-secondary-color duration-150"
            href="tel:+995595881811"
          >
            <IonIcon
              className="text-3xl md:text-4xl text-primary"
              name="phone-portrait-outline"
            />
            <p className="text-xl hover:text-primary duration-150">
              +(995) 595 88 18 11
            </p>
          </a>

          <a
            className="flex items-center gap-2 text-base sm:text-lg hover:text-secondary-color duration-150"
            href="https://www.tiktok.com/@poolinaria6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon
              className="text-3xl md:text-4xl text-primary"
              name="logo-tiktok"
            />
            <p className="text-xl hover:text-primary duration-150">
              poolinaria6
            </p>
          </a>

          <a
            className="flex items-center gap-2 text-base sm:text-lg hover:text-secondary-color duration-150"
            href="https://www.facebook.com/profile.php?id=61552987467403"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon
              className="text-3xl md:text-4xl text-primary"
              name="logo-facebook"
            />
            <p className="text-xl hover:text-primary duration-150">
              Poolinaria - პულინარია
            </p>
          </a>

          <a
            className="flex items-center gap-2 text-base sm:text-lg hover:text-secondary-color duration-150"
            href="https://www.instagram.com/poolinariainfo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon
              className="text-3xl md:text-4xl text-primary"
              name="logo-instagram"
            />
            <p className="text-xl hover:text-primary duration-150">
              @poolinariainfo
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
