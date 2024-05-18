import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
	<footer className="bg-primary-100 py-16">
		<div className="justify-content mx-auto w-5/6 gap-16 md:flex">
			<div className="mt-16 basis-1/2 md:mt:-0"> 
			<img src={Logo} alt="logo" />
			<p className="my-5">
			PRO-MED Hospice offers compassionate end-of-life care tailored to your loved one's needs, 
			nsuring comfort and support every step of the way. 
			</p>
			<p>
			© PRO-MED Hospice Inc. All Rights Reserved
			</p>
			</div>
			<div className="mt-16 basis-1/4 md:mt-0"> 
			{/* <h4 className="font-bold">Links</h4> */}
				<p className="my-5"> </p>
				</div>
			<div className="mt-16 basis-1/4 md:mt-0">
				<h4 className="font-bold">Contact Us</h4>
				<p>Tel: 747-566-1222</p>
				<p>FAX: 747-566-1221</p>
				<p>Promedhospice@gmail.com</p>
				<p className="my-5">6621 Van Nuys Blvd. #108 Van Nuys, CA 91405</p>
				 </div>

		</div>
	</footer>
  )
}

export default Footer