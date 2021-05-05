import react from 'react';
import NavBar from '../../Components/NavBar';
import Sidebar from '../../Components/SideBar';

const Home = () => {
    return (
        <div className="d-flex">
            <Sidebar/>,
            <NavBar/>
        </div>
    
    )
};

export default Home;