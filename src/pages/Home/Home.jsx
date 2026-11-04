/** ============================ start besmillah ================================*/
import FeaturedProductsCards from './components/FeaturedProducts';
import HeroSection from './components/heroSection';
import ProductsCategorySection from './components/ProductsCategorys';
import './Home.css';
function HomePage() {
return (
        <>
        <HeroSection/>
        <ProductsCategorySection/>
        <FeaturedProductsCards/>
        </>
    )
}
export default HomePage;
