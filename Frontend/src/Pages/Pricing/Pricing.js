import React from 'react';
import { Card, CardContent, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Header from '../auth/Header';
import Navbar from '../../Components/Navbar';
import NavbarLogin from '../auth/Navbar';
import Footer from '../auth/Footer';

const PricingPlanCard = ({ planName, price, features }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handlePayNow = () => {
    // Navigate to payment page when PAY NOW button is clicked
    navigate('/payment');
  };

  return (
    <>
    {/* <Navbar/> */}
    <Card className="w-72 border border-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-105 mx-4 my-4" style={{border: '1px solid #e0e0e0'}}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="center">
          <span className="font-normal"> {planName}</span>
        </Typography>
        <Typography variant="body1" color="text.secondary" component="div" align="center">
          <span className="font-bold text-[#f0918c]">Rs {price} / month</span>
        </Typography>
        <div className="flex justify-center mt-2">
          <Button variant="contained" color="primary" onClick={handlePayNow}> 
            PAY NOW
          </Button>
        </div>
        <List dense>
          {features.map((feature, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={feature} className="text-gray-700" primaryTypographyProps={{ align: 'center', className: 'text-xs' }} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
    </>
  );
};

const PricingPlans = () => {
  const plans = [
    {
      planName: 'ESSENTIAL',
      price: 10000,
      features: ['Framework Manual', '150+ policies', 'Compliance Dashboard'],
    },
    {
      planName: 'PROFESSIONAL',
      price: 27500,
      features: ['Framework Manual', '150+ policies', 'Compliance Dashboard', 'Compliance Report'],
    },
    {
      planName: 'ENTERPRISE',
      price: 50000,
      features: ['Framework Manual', '150+ policies', 'Compliance Dashboard', 'Compliance Report', 'Meeting with the experts'],
    },
  ];

  return (
    <>
    <Navbar/> 
    <div className="flex justify-center items-center">
      {plans.map((plan, index) => (
        <PricingPlanCard
          key={index}
          planName={plan.planName}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default PricingPlans;
