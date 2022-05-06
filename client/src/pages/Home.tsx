import { Container, P } from "styles/GlobalStyles";
import useDocumentTitle from "hooks/useDocumentTitle";

const Home = () => {
    useDocumentTitle('The leading data onboarding platform for')
    return (
        <Container>
            <P>Importing data into CSV templates, building custom import scripts, or running lengthy implementation projects are not actually solving the root of your data onboarding problem.</P>
        </Container>
    )
}

export default Home;