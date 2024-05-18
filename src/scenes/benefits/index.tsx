
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HeartIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Compassion drives our every action",
    description:
      " We prioritize empathy and understanding in all aspects of care, ensuring that individuals and families feel supported and valued.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Dignity is at the heart of our approach",
    description:
      "We uphold the inherent worth and respect of each person, honoring their choices and preferences with sensitivity and grace.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Integrity guides our commitment to excellence",
    description:
      "We maintain the highest ethical standards in everything we do, striving for transparency, honesty, and accountability in our interactions and practices.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST HOSPICE.</HText>
          <p className="my-5 text-sm">In our hospice, we embrace a philosophy of tender care, offering a sanctuary where individuals 
		  and their loved ones find comfort amidst life's transitions. With a dedicated team guided by compassion and sophistication, 
		  we provide personalized support tailored to honor each person's unique journey, ensuring dignity and peace at every step.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
			src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
				  Here, every moment{" "}
                    <span className="text-primary-500">matters</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
			  We believe in cherishing the present, embracing each moment with compassion and understanding. 
			  Our dedicated team is committed to providing personalized care that honors the individual journey 
			  of each person and their loved ones. From creating a comforting environment to offering emotional support, 
			  we strive to ensure that every moment is filled with warmth and solace. 
              </p>
              <p className="mb-5">
			  With dignity as our guiding principle, we offer a sanctuary where individuals and 
			  amilies can find peace amidst life's transitions. Here, every moment is valued, e
			  very memory cherished, and every person respected.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
