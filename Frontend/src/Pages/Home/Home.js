// Home.js
import React from 'react';
import home1 from '../../assets/Home_1.jpg';
import home2 from '../../assets/Home_2.png';
import home3 from '../../assets/Home_3.png';
import Header from '../auth/Header';
import Navbar from '../../Components/Navbar';
import Footer from '../auth/Footer';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div style={{ fontFamily: 'Sans', padding: '0 400px' }}> {/* Apply padding here */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}>
          <div>
            <p style={{ fontSize: '2.0rem', lineHeight: '1.6', textAlign: 'flex-end', fontWeight: 'bold' }}>
              Gain Complete Visibility, Manage Data Centrally</p>
              <p style={{ fontSize: '1.5rem', lineHeight: '1.6', textAlign: 'flex-end' }}>
              Aggregate and centralize all collaboration data in one unified portal. Attain a holistic view of activity to empower end-users to collaborate efficiently and securely.
            </p>
          </div>
          <img src={home1} style={{ maxWidth: '33%', marginLeft: '15px' }} alt="Home 1" />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}>
          <img src={home2} style={{ maxWidth: '33%', marginRight: '15px' }} alt="Home 2" />
          <div>
            <p style={{ fontSize: '2.0rem', lineHeight: '1.6', textAlign: 'flex-end', fontWeight: 'bold' }}>
              Drive Collaboration with Compliance in Mind</p>
              <p style={{ fontSize: '1.5rem', lineHeight: '1.6', textAlign: 'flex-end'  }}>
              
              Stay compliant and empower users with our dynamic governance plans. Enable IT to maintain control through continuous monitoring, reporting, and actionable insights, ensuring optimal utilization of services.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div>
            <p style={{ fontSize: '2.0rem', lineHeight: '1.6', textAlign: 'flex-end', fontWeight: 'bold' }}>
              Governance on Autopilot </p>
              
              <p style={{ fontSize: '1.5rem', lineHeight: '1.6', textAlign: 'flex-end' }}>
              Say goodbye to manual processes. Scale governance operations effortlessly by automating service lifecycle processes. Strike the perfect balance between collaboration and control with SectorGuard.
            </p>
          </div>
          <img src={home3} style={{ maxWidth: '33%', marginLeft: '15px' }} alt="Home 3" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
