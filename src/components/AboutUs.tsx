import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IonIcon from "@reacticons/ionicons";
import pooltable from "../assets/images/pooltable.jpg";
import { useEffect } from "react";

export default function AboutUs() {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView1) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "linear" },
      });
    }
  }, [controls, inView1]);
  useEffect(() => {
    if (inView2) {
      controls2.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "linear" },
      });
    }
  }, [controls2, inView2]);
  useEffect(() => {
    if (inView3) {
      controls3.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "linear" },
      });
    }
  }, [controls3, inView3]);

  return (
    <section className="bg-[#161616] text-white pt-16">
      <div className="mx-auto">
        {/* Top Section: Location, Open Hours, Affordable Pricing, and Regular Competitions */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end mb-12 text-center lg:text-left lg:space-x-8">
          {/* Combined Location and Working Hours in Flex Row */}
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: "-10rem" }}
            animate={controls3}
            className="flex flex-col lg:flex-row lg:items-start pb-8 lg:pl-4 xl:pl-20 2xl:pl-32 2xl:text-lg gap-5 items-center lg:space-x-8 lg:flex-1"
          >
            <div className="flex items-start">
              <IonIcon
                className="text-primary text-5xl mr-2"
                name="pin-outline"
              ></IonIcon>
              <div>
                <p className="uppercase font-bold">ლოკაცია</p>
                <p className="text-gray-400 whitespace-nowrap">
                  თორნიკე ერისთავის N16
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <IonIcon
                className="text-primary text-5xl mr-4"
                name="time-outline"
              ></IonIcon>
              <div>
                <p className="uppercase font-bold">სამუშაო საათები</p>
                <p className="text-gray-400">ყოველდღე, 24/7</p>
              </div>
            </div>
          </motion.div>

          {/* Combined Affordable Pricing and Regular Competitions */}
          <div className="flex flex-col lg:flex-row lg:flex-1 justify-end">
            <div className="bg-black p-6 py-12 flex flex-col justify-between relative mb-4 lg:mb-0 max-w-xs">
              <div>
                <p className="text-primary 2xl:text-lg uppercase font-bold mb-4">
                  მისაღები ფასები
                </p>
                <p className="text-lg mb-6 whitespace-normal 2xl:text-xl">
                  პულინარიაში იხილავთ მისაღებ ფასებს, ასევე ხშირად ნახავთ
                  აქციებს, რომლებსაც თვალი ჩვენს ფეისბუქ გვერდზე შეგიძლიათ
                  ადევნოთ
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-6xl font-bold text-white opacity-20 absolute top-5 right-5">
                  01
                </p>
              </div>
            </div>

            {/* Regular Competitions */}
            <div className="bg-primary p-6 py-12 flex flex-col justify-between relative max-w-xs">
              <div>
                <p className="text-black uppercase font-bold mb-4 2xl:text-lg">
                  ტურნირი ბილიარდში
                </p>
                <p className="text-lg text-black mb-6 2xl:text-xl">
                  ჩვენ ხშირად ვმართავთ ტურნირებს ბილიარდში, რომლებშიც შეგიძლიათ
                  ფულადი პრიზების მოგება
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-6xl font-bold text-black opacity-10 absolute top-5 right-5">
                  02
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* About Us Section */}
        <div className="grid lg:grid-cols-2 gap-8 pt-16 lg:py-16 max-w-7xl 2xl:max-w-[85rem] mx-auto">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={pooltable}
              alt="Billiard Table"
              className="rounded-sm object-cover h-[30rem] lg:h-[50rem] brightness-90"
              loading="lazy"
            />
          </div>

          <div
            id="about"
            className="flex flex-col justify-center overflow-hidden"
          >
            <motion.div
              className="flex justify-center lg:justify-normal items-center gap-8 mb-4 w-fit mx-auto lg:mx-0"
              ref={ref1}
              initial={{ opacity: 0, x: "10rem" }}
              animate={controls}
            >
              <div className="lg:hidden h-[3px] w-24 bg-primary mb-2"></div>
              <h2 className="text-primary text-lg font-bold tracking-tighter">
                ჩვენს შესახებ
              </h2>
              <div className="h-[3px] w-24 bg-primary mb-2"></div>
            </motion.div>

            <h1 className="text-3xl lg:text-4xl font-extrabold mb-6 text-center lg:text-start text-gray-200 lg:leading-[3rem]">
              პულინარია - საუკეთესო ადგილი მეგობრებთან გასართობად
            </h1>
            <p className="text-gray-400 mb-8 px-8 lg:px-0 text-center lg:text-left">
              პულინარია გთავაზობთ დაუვიწყარ გასართობ გამოცდილებას სხვადასხვა
              თამაშებისა და აქტივობების მეშვეობით.
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Years of Experience */}
              <div className="flex flex-col items-center mt-8">
                <div className="text-white rounded-full text-5xl font-extrabold relative">
                  2
                  <span className="absolute -top-5 left-8 text-3xl text-emerald-500">
                    +
                  </span>
                </div>
                <p className="text-lg tracking-tight text-[#555]">
                  წლიანი გამოცდილება
                </p>
              </div>

              {/* List of Features */}
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-primary text-xl mr-3">✔</span>
                  ხარისხიანი აღჭურვილობა
                </li>
                <li className="flex items-center">
                  <span className="text-primary text-xl mr-3">✔</span>
                  მყუდრო გარემო
                </li>
                <li className="flex items-center">
                  <span className="text-primary text-xl mr-3">✔</span>
                  იზოლირებული
                </li>
                <li className="flex items-center">
                  <span className="text-primary text-xl mr-3">✔</span>
                  საუკეთესო მომსახურება
                </li>
                <li className="flex items-center">
                  <span className="text-primary text-xl mr-3">✔</span>
                  მისაღები ფასები
                </li>
                <li className="flex items-center">
                  <span className="text-primary text-xl mr-3">✔</span>
                  ხშირი შეთავაზებები
                </li>
              </ul>
            </div>

            {/* Button */}
            <motion.a
              ref={ref2}
              initial={{ opacity: 0, y: 100 }}
              animate={controls2}
              target="_blank"
              href="https://www.facebook.com/people/Poolinaria-პულინარია/61552987467403/"
              className="mt-12 lg:mt-28 lg:mr-12 bg-primary hover:bg-transparent border border-solid border-primary hover:text-white duration-100 text-xl text-black py-3 px-6 rounded-lg font-bold flex justify-center lg:justify-normal items-center gap-2 mx-auto lg:mx-0"
            >
              <IonIcon name="logo-facebook" className="text-2xl"></IonIcon>
              გაიგე მეტი ჩვენს შესახებ
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
