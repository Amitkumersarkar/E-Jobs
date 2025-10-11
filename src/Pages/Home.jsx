import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;