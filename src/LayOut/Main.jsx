import React from 'react';
import { Outlet } from 'react-router-dom';
import Haders from '../Shared/HeaderNav/HadersNav';
import Footers from '../Shared/Footers/Footers';



const Main = () => {
    return (
        <div>
            <Haders></Haders>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;