import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoIcon from "components/icons/LogoIcon";
import { fonts } from "styles/Variables";
interface LogoTypeProps {
    title?: string;
}
const Logo = (props: LogoTypeProps) => {
    return (
        <Link to="/">
            <Logos>
                <LogoIcon width="28" fill="#3b2ec9" />
                {
                    !props.title 
                    ? '' : <H1>{props.title}</H1>
                }
            </Logos>
        </Link>
    )
}

const Logos = styled.div`
    display: flex;
    align-items: center;
`;
const H1 = styled.h1`
    font-family: ${fonts.fontLogo};        
    font-size: 18px;
    margin-left: 5px;
`

export default Logo;