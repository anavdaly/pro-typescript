import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import a from "@/assets/1.png";
import b from "@/assets/2.png";
import c from "@/assets/3.png";
import d from "@/assets/4.png";
import e from "@/assets/5.png";
import f from "@/assets/6.png";
import g from "@/assets/7.png";
import { motion } from "framer-motion";


type Props = {
	setSelectedPage: (value: SelectedPage) => void
};

const Home = ({ setSelectedPage} : Props) => {
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
	<section
	id = "home"
	className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
	>
		{/* Image and Main header */}
		<motion.div 
		className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
		onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
		> 
			{/* Main Header */}
			<div className="z-10 mt-32 md:basis-3/5">
				{/* Headings */}
				<motion.div 
				className="md:-mt-20"
				initial = "hidden"
				whileInView="visible"
				viewport={{once:true, amount: 0.5}}
				transition={{duration: 0.5}}
				variants={{
					hidden: {opacity: 0, x:-50},
					visible:{opacity: 1, x: 0},
				}}
				>
					<div className="relative">
						<div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
							<img src={HomePageText} alt="home-page-text" />
						</div>
					</div>
					<p className="mt-8 text-sm">
					You matter because you are you, and you matter to the end of your life. We will do all we can not only to help you die peacefully, but also to live until you die.
					</p>
				</motion.div>
				{/* Actions */}
				<motion.div 
				className="mt-8 flex items-center gap-8"
				initial = "hidden"
				whileInView="visible"
				viewport={{once:true, amount: 0.5}}
				transition={{delay:0.2, duration: 0.5}}
				variants={{
				hidden: {opacity: 0, x:-50},
				visible:{opacity: 1, x: 0},
				}}
				>
					<ActionButton setSelectedPage={setSelectedPage}>
						Join Now
					</ActionButton>
					<AnchorLink
					className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
					onClick={() => setSelectedPage(SelectedPage.ContactUs)}
					href={`#${SelectedPage.ContactUs}`}
				>
					<p>Learn More</p>
					</AnchorLink>
				</motion.div>
			</div>

			{/* Image */}
			<div className="flex basis-3/5 justify-center md:z-10
				md:ml-40 md:mt-16 md:justify-items-end">
				<img src={HomePageGraphic} alt="home-pageGraphic" />
			</div>
		</motion.div>
		{/* no sponsors */}
		{isAboveMediumScreens &&(
		<div className="h-[150px] w-full bg-primary-100 py-10">
			<div className="mx-auto w-5/6">
				
					<div className="flex w-3/5 items-center justify-between gap-20">
					<img src={a} alt="icon-1" />
					<img src={b} alt="icon-2" />
					<img src={c} alt="icon-3" />
					<img src={d} alt="icon-4" />
					<img src={e} alt="icon-5" />
					<img src={f} alt="icon-6" />
					<img src={g} alt="icon-7" />

				</div>
			</div>
		</div>

		)}
	</section>
  )
}

export default Home