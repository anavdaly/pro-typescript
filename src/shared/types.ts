export enum SelectedPage{
	Home = "home",
	About = "about",
	OurServices = "ourservices",
	ContactUs = "contactus",
	Benefits = "Benefits",
}

export interface BenefitType{
	icon : JSX.Element;
	title: string;
	description: string;
}

export interface ServiceType{
	name: string;
	description ?: string;
	image:string;
}