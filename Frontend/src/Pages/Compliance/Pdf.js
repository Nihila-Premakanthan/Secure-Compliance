import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Modal, Box, TextField, Button } from "@mui/material";
import CryptoJS from "crypto-js";

const PieChartPDF = ({ Name,  complianceCount, totalRules }) => {

  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setPassword("");
  };

  const handleSubmit = () => {
    if (password) {
      const encryptedPassword = CryptoJS.AES.encrypt(password, "secret key").toString();
      console.log("Encrypted Password:", encryptedPassword);
      
      // Create new jsPDF instance
      const doc = new jsPDF();

      // Add content to PDF
      doc.text("Percentage of Compliance", 10, 10);
      doc.text(`User: ${Name}`, 10, 20);
      // doc.text(`Sector: ${company}`, 10, 30);
      doc.text(`Yes: ${complianceCount.yes} / ${totalRules}`, 10, 40);
      doc.text(`No: ${complianceCount.no} / ${totalRules}`, 10, 50);

      // Save PDF
      doc.save("pie_chart_data.pdf");

      // Close modal
      handleClose();
    } else {
      alert("Password is required to open the document.");
    }
  };

  const generatePDF = () => {
    // Open modal
    setOpen(true);
  };

  return (
    <>
      <Button className-="button" variant="contained" onClick={generatePDF}>Download PDF</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-title">Enter Password</h2>
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  )
};

export default PieChartPDF;
