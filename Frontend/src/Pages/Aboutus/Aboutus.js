import React from 'react';
import Header from '../auth/Header';

const AboutUs = () => {
  return (
    <>
    <Header/>
    <div style={{ fontFamily: 'Sans', paddingLeft: '400px', paddingRight: '400px' }}> {/* Apply padding here */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}>
          <div>
          <p style={{ fontSize: '2.0rem', lineHeight: '1.6', textAlign: 'flex-end', fontWeight: 'bold' }}>
            About US </p>
            <p style={{ fontSize: '2.0rem', lineHeight: '1.6', textAlign: 'flex-end' }}>
            At SectorGuard, we specialize in providing cutting-edge compliance solutions tailored to the unique needs of various industries. Our dedicated team combines expertise in legal compliance, technology, and industry-specific regulations to develop both a comprehensive set of legal frameworks and an innovative self-assessment tool. Our solutions empower organizations to navigate the complex regulatory landscapes confidently, ensuring they remain compliant and secure in an ever-evolving digital world.</p>
          
          </div>
          
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}>
         
          <div>
            <p style={{ fontSize: '2.0rem', lineHeight: '1.6', textAlign: 'flex-end', fontWeight: 'bold' }}>
            Vision</p>
              <p style={{ fontSize: '2.0rem', lineHeight: '1.6', textAlign: 'flex-end'  }}>
              
              Our vision at SectorGuard is to be the leading provider of compliance management solutions, transforming how organizations across diverse industries manage their regulatory responsibilities. We aim to set new standards in compliance accuracy and efficiency, making compliance accessible to all businesses and fostering a safer, more transparent corporate environment.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div>
            <p style={{ fontSize: '2.0rem', lineHeight: '1.6', textAlign: 'flex-end', fontWeight: 'bold' }}>
            Mission </p>
              
              <p style={{ fontSize: '2.0rem', lineHeight: '1.6', textAlign: 'flex-end' }}>
              Our mission is to equip businesses with precise, industry-specific legal frameworks and self-assessment tools that simplify the compliance process. We strive to empower organizations to take control of their compliance strategies, reduce their reliance on external consultants, and enhance their operational efficiency. By continuously adapting to technological advancements and regulatory changes, we commit to providing our clients with the most up-to-date and effective compliance solutions available, fostering a culture of proactive compliance and risk management.
            </p>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutUs;
