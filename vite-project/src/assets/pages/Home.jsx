import BestSellerSection from "../component/BestSell";
import BlogNewsSection from "../component/Blog";
import CategoriesSection from "../component/Categories";
import ContactSection from "../component/Contact";
import CTASection from "../component/CTA";
import FeaturedProducts from "../component/FeatureSection";
import HeroSection from "../component/Hero";
import NewArrivalsSection from "../component/NewArrival";
import NewsletterSignupSection from "../component/Newsletter";
import TestimonialsSection from "../component/Testimonials";
import CategoriesSection_V2 from './../component/categories_V2';


const Home = () => {
    return (
        <div>
            <HeroSection/>
            <FeaturedProducts/>
            <CategoriesSection/>
            <BestSellerSection/>
            <NewArrivalsSection/>
            <TestimonialsSection/>
            <NewsletterSignupSection/>
            <CategoriesSection_V2/>
            <CTASection/>
            <BlogNewsSection/>
            <ContactSection/>
        </div>
    );
};

export default Home;