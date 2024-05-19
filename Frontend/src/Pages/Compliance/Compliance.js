import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  Button,
} from "@mui/material";
import { useParams, useHistory, useNavigate } from "react-router-dom"; // Import navigate
import { PieChart } from "react-minimal-pie-chart"; // Import PieChart component
import categoryChecklists from "./checklistsData";
import Navbar from "../../Components/Navbar";
import Footer from "../auth/Footer";

const CompliancePage = () => {
  const [checklistItems, setChecklistItems] = useState([]);
  const [policyDomain, setPolicyDomain] = useState("");
  const [chartData, setChartData] = useState([]);
  //const { category } = useParams();
  const [category, setCategory] = useState("");

  const [yes, setYes] = useState(0);

  const [no, setNo] = useState(0);

  useEffect(() => {
    const userDataString = JSON.parse(localStorage.getItem("userData")) || "";
    console.log(userDataString.category);

    setCategory(userDataString.category);
    const selectedCategoryChecklist = categoryChecklists.find(
      (item) => item.category === userDataString.category
    );

    if (selectedCategoryChecklist) {
      setChecklistItems(selectedCategoryChecklist.checklists);
      setPolicyDomain(selectedCategoryChecklist.policyDomain);
      console.log("hi bro");
    } else {
      console.error("Selected category not found.");
    }
  }, [category]);

  const navigate = useNavigate();
  useEffect(() => {
    const selectedCategory = localStorage.getItem("selectedCategory");
    const selectedCategoryChecklist = categoryChecklists.find(
      (item) => item.category === selectedCategory
    );

    if (selectedCategoryChecklist) {
      setChecklistItems(selectedCategoryChecklist.checklists);
      setPolicyDomain(selectedCategoryChecklist.policyDomain);
    } else {
      console.error("Selected category not found.");
    }
  }, [category]);

  useEffect(() => {
    // Customize compliance assessment based on sector-specific rules
    const yesCount = checklistItems.filter(
      (item) => item.compliance === "Yes"
    ).length;
    const noCount = checklistItems.filter(
      (item) => item.compliance === "No"
    ).length;

    setChartData([
      { title: "Yes", value: yesCount, color: "rgba(75, 192, 192, 0.2)" },
      { title: "No", value: noCount, color: "rgba(255, 99, 132, 0.2)" },
    ]);
  }, [checklistItems]);

  const handleCategorySelection = (selectedCategory) => {
    localStorage.setItem("selectedCategory", selectedCategory);
    setPolicyDomain(""); // Clear policy domain when category changes
  };

  const handleSubmit = () => {
    // Navigate to the dashboard page with appropriate sector-specific data
    navigate(`/dashboard/${yes}/${no}`, {
      state: { chartData, policyDomain, yes, no },
    });
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Compliance Checklist
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Policy Domain</TableCell>
                <TableCell>Assessment Criteria</TableCell>
                <TableCell>Policy</TableCell>
                <TableCell colSpan={4}>Compliance</TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell colSpan={2}>Complied</TableCell>
                <TableCell colSpan={2} className="whitespace-nowrap">
                  Not Complied
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell>Yes</TableCell>
                <TableCell>No</TableCell>
                <TableCell />
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {checklistItems.map((item, index) => (
                <TableRow key={index}>
                  {index === 0 ||
                  item.policyDomain !==
                    checklistItems[index - 1]?.policyDomain ? (
                    <TableCell
                      rowSpan={
                        checklistItems.filter(
                          (checklist) =>
                            checklist.policyDomain === item.policyDomain
                        ).length
                      }
                    >
                      {item.policyDomain}
                    </TableCell>
                  ) : null}
                  <TableCell>{item.assessmentCriteria}</TableCell>
                  <TableCell>{item.policy}</TableCell>
                  <TableCell>
                    <Checkbox
                      checked={item.compliance === "Yes"}
                      onClick={() => {
                        if (item.compliance === "Yes") {
                          setYes((prevYes) => prevYes - 1);
                        } else {
                          setYes((prevYes) => prevYes + 1);
                          //setNo((prevNo) => (prevNo > 0 ? prevNo - 1 : 0));
                        }
                        item.compliance =
                          item.compliance === "Yes" ? "" : "Yes";
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={item.compliance === "No"}
                      onClick={() => {
                        if (item.compliance === "No") {
                          setNo((prevNo) => prevNo - 1);
                        } else {
                          setNo((prevNo) => prevNo + 1);
                          //setYes((prevYes) => (prevYes > 0 ? prevYes - 1 : 0));
                        }
                        item.compliance = item.compliance === "No" ? "" : "No";
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Checkbox />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>{" "}
        {/* Submit button */}
      </Container>
      {/* <Footer/> */}
    </>
  );
};

export default CompliancePage;
