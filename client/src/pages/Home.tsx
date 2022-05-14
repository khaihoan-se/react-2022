import Slider from "components/features/home/Slider";
import useDocumentTitle from "hooks/useDocumentTitle";

const Home = () => {
    useDocumentTitle('The leading data onboarding platform for')
    return (
        <div className="homepage">
            <Slider />
        </div>
    )
}

export default Home;