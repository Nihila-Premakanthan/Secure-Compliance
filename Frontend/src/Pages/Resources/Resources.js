import React, { useState } from "react";
import CryptoJS from "crypto-js";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// Importing images
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";
import image7 from "../../assets/7.png";
import image8 from "../../assets/8.png";
import image9 from "../../assets/9.png";
import image10 from "../../assets/10.png";
import Navbar from "../../Components/Navbar";
import Footer from "../auth/Footer";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const pdfUrls = [
  "https://drive.google.com/file/d/17yAXfKMnYvoZOKwIg6xjQrR1_ybpbMhp/view?usp=sharing",
  "https://drive.google.com/file/d/1hhqlcDW4o0s1B4eO1Xmg3s_FGAsO35S3/view?usp=sharing",
  "https://drive.google.com/file/d/1EvuxVb04XEhFPtiRIUpiEaAXukhS23v5/view?usp=sharing",
  "https://drive.google.com/file/d/1uOgM4h5yaUjmJ66Ip8sPV-Kq16wT9kbM/view?usp=sharing",
  "https://drive.google.com/file/d/1uBX4i2B-crzrBxUJBiN6dvtkKDHVwo06/view?usp=sharing",
  "https://drive.google.com/file/d/1Mgc_pXaEvzGtWoZllnmP-02z6MEFKAnf/view?usp=sharing",
  "https://drive.google.com/file/d/1XO0s00XCldbSHJY-ljO1AKQT4IowT5Ir/view?usp=sharing",
  "https://drive.google.com/file/d/1W2SnInxgzvK7E9Z-UGDMDS0qbe76jrvI/view?usp=sharing",
  "https://drive.google.com/file/d/14kz3Y7u31OLoi4AWwNF-Myirq0-BIflU/view?usp=sharing",
  "https://drive.google.com/file/d/1yZ36BtDYeWAvYm9nvBdj5nTgWE4Rj5ad/view?usp=sharing",
];

const ImageGallery = () => {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedPdfUrl, setSelectedPdfUrl] = useState("");

  const handleImageClick = (pdfUrl) => {
    setSelectedPdfUrl(pdfUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPassword("");
  };

  const handleSubmit = () => {
    if (password) {
      const encryptedPassword = CryptoJS.AES.encrypt(password, "secret key").toString();
      console.log("Encrypted Password:", encryptedPassword);
      window.open(selectedPdfUrl, "_blank");
      handleClose();
    } else {
      alert("Password is required to open the document.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(pdfUrls[index])}
              className="cursor-pointer w-48 h-48 object-cover m-2 mb-2"
            />
          ))}
        </div>
      </div>
      <Footer />

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
  );
};

export default ImageGallery;
