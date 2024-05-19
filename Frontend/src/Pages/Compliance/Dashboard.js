import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { PieChart } from 'react-minimal-pie-chart';
import { Link, useLocation, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../auth/Footer";
import PieChartPDF from "./Pdf";

const PieChartPage = () => {
    const params=useParams()
    
    console.log(params.yes)
    const [Name, setName] = useState(false);
    const [Company, setCompany] = useState(false);
    const [complianceCount, setComplianceCount] = useState({ yes: 0, no: 0 });
    const [totalRules, setTotalRules] = useState(0);
    const chartData = [
        { title: 'Yes', value: parseInt(params.yes), color: 'rgba(75, 192, 192, 0.2)' },
        { title: 'No', value: parseInt(params.no), color: 'rgba(255, 99, 132, 0.2)' },
    ];

    const getcurrentUserData = () => {
        try {
            const userDataString = JSON.parse(localStorage.getItem("userData")) || "";
            console.log(userDataString.name, "000000");
            setName(userDataString.name);
            setCompany(userDataString.company);
        } catch (error) {
            setName("not show");
        }
    };

    useEffect(() => {
        getcurrentUserData();
    }, []);

    useEffect(() => {
        // Calculate compliance counts
        const yesCount = chartData.find(data => data.title === 'Yes').value;
        const noCount = chartData.find(data => data.title === 'No').value;
        setComplianceCount({ yes: yesCount, no: noCount });

        // Calculate total rules
        const total = chartData.reduce((acc, data) => acc + data.value, 0);
        setTotalRules(total);
    }, [chartData]);

    return (
        <>
        <Navbar/>
        <Container maxWidth="xl" sx={{ mt: 2 }}>
                    <Typography to={'/profile'}>User: {Name}</Typography>
              {/* <Typography to={'/profile'}>Sector:{Company}</Typography> */}
            <Typography variant="h4" align="center" gutterBottom>
                Percentage of Compliance
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
                <div style={{ width: '30%', height: '30%' }}>
                    <PieChart
                        data={chartData}
                        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                    />
                </div>
                <Box ml={2}>
                    <Box display="flex" alignItems="center" mb={1}>
                        <div style={{ width: 16, height: 16, backgroundColor: 'rgba(75, 192, 192, 0.2)', marginRight: 8 }} />
                        <Typography variant="body2">Yes</Typography>
                        {/* <Typography variant="body2" ml={1}>{complianceCount.yes} / {totalRules}</Typography> */}
                    </Box>
                    <Box display="flex" alignItems="center">
                        <div style={{ width: 16, height: 16, backgroundColor: 'rgba(255, 99, 132, 0.2)', marginRight: 8 }} />
                        <Typography variant="body2">No</Typography>
                        {/* <Typography variant="body2" ml={1}>{complianceCount.no} / {totalRules}</Typography> */}
                   
                    </Box>
                </Box>
                
            </Box>
            <Box display="flex" justifyContent="flex-end">
                    <Typography variant="body2" mr={1}>Followed 150/200 Policies</Typography>
                </Box>
                <PieChartPDF Name={Name} Company={Company} complianceCount={complianceCount} totalRules={totalRules} />
        </Container>
        {/* <Footer/> */}
        </>
    );
};

export default PieChartPage;
