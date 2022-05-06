import { Container } from "styles/GlobalStyles";
import useDocumentTitle from "hooks/useDocumentTitle";
import Sliders from "components/features/home/Sliders";

const Home = () => {
    useDocumentTitle('The leading data onboarding platform for')
    return (
        <Container>
            <Sliders />
        </Container>
    )
}

export default Home;