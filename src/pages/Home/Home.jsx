/** ============================ start besmillah ================================*/
import FeaturedProductsCards from './components/FeaturedProducts';
import HeroSection from './components/heroSection';
import ProductsCategorySection from './components/ProductsCategorys';
import SpecialOffer from './components/specialOffers.jsx';
import './Home.css';
function HomePage() {
return (
        <>
        <HeroSection/>
        <ProductsCategorySection/>
        <FeaturedProductsCards/>
        <SpecialOffer/>
        </>
    )
}
export default HomePage;
