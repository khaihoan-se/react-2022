import React from "react";
import Slider from "../components/features/home/Slider";
import Story from "../components/features/home/Story";
import Featured from "../components/features/home/Featured";
import Products from "../components/features/home/Products";
import Magazine from "../components/features/home/Magazine";
import LifeStyles from "../components/features/home/LifeStyles";
import Subscribe from "../components/features/home/Subscribe";

const Home: React.FC = () => {
    return (
        <>
            <Slider /> {/* End Slider */}
            <Story /> {/* End Story */}
            <Featured /> {/* End Featured */}
            <Products /> {/* End Products */}
            <Magazine /> {/* End Magazine */}
            <LifeStyles /> {/* End LifeStyles */}
            <Subscribe /> {/* End Subscribe */}
            <div>Hello React App Coffe!!!</div>
        </>
    )
}

export default Home;