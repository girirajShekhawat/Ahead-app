import React from 'react';
import Navbar from '../components/Navbar';
import MiddleContent from '../components/MiddleContent';
import Footer from '../components/Footer';

function Admin(props) {
    const isadmin=true
    return (
        <div>
            <Navbar/>
      <div className="   container pt-[30px]  flex flex-col w-[1000px]">
      <MiddleContent isadmin={isadmin}/>
      <Footer/>
      </div>
        </div>
    );
}

export default Admin;