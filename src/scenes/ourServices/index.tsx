import { SelectedPage,ServiceType } from "@/shared/types"
import image1 from "@/assets/image1.png" 
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Service from "./Service";

const services: Array<ServiceType> = [
	{
		name: "Pain Management Services",
		description: " Our team specializes in relieving pain and discomfort through medication management, therapy,and alternative techniques, ensuring comfort and quality of life for our patients.",
		image: image1,
	},
	{
		name: "Symptom Control Services",
		description: "We offer comprehensive symptom management to address a wide range of physical and emotional symptoms associated with terminal illnesses, providing relief and support to enhance well-being.",
		image: image2,
	},
	{
		name: "Emotional and Spiritual Support Services",
		description: "Our compassionate staff provides emotional and spiritual guidance to individuals and families, offering counseling, companionship, and resources to navigate the emotional challenges of end-of-life care",
		image: image3,
	},
	{
		name: "Personal Care Assistance Services",
		description: "We offer assistance with activities of daily living, including bathing, dressing, and grooming, ensuring dignity and comfort for our patients while promoting independence and autonomy",
		image: image4,
	},
	{
		name: "24/7 On-Call Support Services",
		description: "Our team is available around the clock to provide support and assistance to patients and their families, offering peace of mind and immediate access to care whenever needed.",
		image: image5,
	},
	{
		name: "Complementary Therapies Services",
		description: "We provide a range of complementary therapies such as massage, music therapy, and art therapy to promote relaxation, reduce stress, and improve overall well-being for our patients.",
		image: image6,
	},
]


type Props = {		
	setSelectedPage:(value: SelectedPage) => void;
}

const OurServices = ({setSelectedPage}: Props) => {
  return (
	<section id="ourservices" className="w-full bg-primary-100 py-40">
		<motion.div
		onViewportEnter={() => setSelectedPage(SelectedPage.OurServices)}
		>
			<motion.div
			className="mx-auto w-5/6"
			initial = "hidden"
			whileInView="visible"
			viewport={{once:true, amount: 0.5}}
			transition={{duration: 0.5}}
			variants={{
			hidden: {opacity: 0, x:-50},
			visible:{opacity: 1, x: 0},
}}
>
	<div className="md:w-3/5">
		<HText>Our Services</HText>
		<p className="py-5">Our hospice provides compassionate care and support for individuals and families dealing with life-limiting illnesses. 
			With a focus on enhancing quality of life, our services include pain management, symptom control, and emotional support. 
			We aim to create a peaceful environment where dignity and comfort are prioritized.
		</p>
	</div>
			</motion.div>
			<div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
				<ul className="w-[2800px] whitespace-nowrap">
					{services.map((item : ServiceType, index) => (
						<Service
						key = {`${item.name} - ${index}}`}
						name = {item.name}
						description = {item.description}
						image = {item.image}
						/>
					))}
				</ul>
			</div>
		</motion.div>
	</section>
  )
}

export default OurServices