import { HiOutlineArrowNarrowLeft } from "react-icons/hi";


const Back = () => {
    return (
        <div className="back">
            <div className='container'>
                <div className='back__button'>
                    <button>
                        <HiOutlineArrowNarrowLeft />
                        <span>Back</span>
                    </button>
                </div>
                <div className='back__router'>
                    Discover
                </div>
            </div>
        </div>
    )
}

export default Back