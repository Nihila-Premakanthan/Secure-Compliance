import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addAPI, getAPI } from "../../service/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Dialog } from "@mui/material";
import CreateUpdatePaymentForm from "./createUpdateForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Test from "./demo";

{
  /* <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      ></form> */
}
// const AllDate = [
//   new Date("2024-05-27T00:00:00.000Z"),
//   new Date("2024-06-27T00:00:00.000Z"),
//   new Date("2024-07-27T00:00:00.000Z"),
//   new Date("2024-08-27T00:00:00.000Z"),
//   new Date("2024-11-27T00:00:00.000Z"),
//   new Date("2024-12-27T00:00:00.000Z"),
// ];
const NewForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    hallID: Yup.string().required("Hall is required"),
    address: Yup.string().required("Address is required"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    nic: Yup.string()
      .matches(/^([0-9]{9}[vV]|[0-9]{12})$/, "Invalid NIC")

      .required("NIC is required"),

    guestCount: Yup.number()
      .required("Guest count is required")
      .positive()
      .integer(),
    foodMenu: Yup.string().required("Food menu is required"),
    alcoholService: Yup.string().required("Alcohol service is required"),
    advancePayment: Yup.number()
      .required("Advance payment is required")
      .positive(),
  });
  const [open, setOpen] = useState(false);
  const [Booking, setBooking] = useState({});
  const [AllCardData, setAllCardData] = useState({});
  const [AllDate, setAllDate] = useState([
    new Date("2024-05-27T00:00:00.000Z"),
  ]);
  const [Loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState("sds");

  const getAllHall = () => {
    getAPI("hall")
      .then((resp) => {
        let sample = [];
        sample = resp.data;
        console.log(sample, "-----------");
        setAllCardData(sample);
        // setLoading(false);
      })
      .catch((err) => {
        setAllCardData([]);
      });
  };
  const getAllHallId = async (id) => {
    console.log(id, "----------id");
    try {
      getAPI("hall/" + id)
        .then((resp) => {
          console.log("-------------1111");
          let sample = [];
          sample = resp.data;
          console.log(sample, "----------1sa mple");
          const datesArray = sample.bookedDate.map((entry) => entry.date);

          console.log(datesArray, "-----------");
          setAllDate(datesArray);
          setLoading(false);
        })
        .catch((err) => {
          setAllCardData([]);
          console.log(err, "------err");
        });
    } catch (error) {}
  };

  useEffect(() => {
    console.log("---------");
    getAllHallId(selectedId);
  }, [selectedId]);

  useEffect(() => {
    getAllHall();
    // console.log(Formik);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    let obj = { ...values, eventDate: selectedDate };
    setBooking(obj);
    handleClickOpen(obj);
  };
  const navigate = useNavigate();

  const redirectPage = () => {
    navigate(`/profile/booking`);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const makeApiRequest = (e) => {
    setSelectedId(e);
  };
  return (
    <div className="max-w-2xl mx-auto  border-gray-300 p-5">
      <h1 className="font-bold">HALL BOOKING</h1>
      <br />
      <Formik
        initialValues={{
          name: "",
          address: "",
          mobile: "",
          nic: "",
          eventDate: "",
          guestCount: "",
          foodMenu: "",
          alcoholService: "",
          advancePayment: "",
          hallID: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="hallID" className="block text-sm font-bold mb-1">
                Card Details:
              </label>
              <Field
                as="select"
                id="hallID"
                name="hallID"
                className="w-full border rounded py-2 px-3 text-sm"
                onChange={(e) => {
                  handleChange(e);
                  setSelectedId(e.target.value);
                }}
              >
                <option value="">Select an option</option>
                {AllCardData &&
                  AllCardData.length > 0 &&
                  AllCardData.map((item, i) => (
                    <>
                      <option value={item._id}>{item.name}</option>
                    </>
                  ))}
                {/* <option value="Card">Card</option>
                  <option value="Cash">Cash</option> */}
              </Field>
              <ErrorMessage
                name="hallID"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="block w-full border rounded-md px-3 py-2"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Address Field */}
            <div className="mb-4">
              <label htmlFor="address" className="block mb-1">
                Address
              </label>
              <Field
                type="text"
                id="address"
                name="address"
                className="block w-full border rounded-md px-3 py-2"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Mobile Field */}
            <div className="mb-4">
              <label htmlFor="mobile" className="block mb-1">
                Mobile
              </label>
              <Field
                type="text"
                id="mobile"
                name="mobile"
                className="block w-full border rounded-md px-3 py-2"
              />
              <ErrorMessage
                name="mobile"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* NIC Field */}
            <div className="mb-4">
              <label htmlFor="nic" className="block mb-1">
                NIC
              </label>
              <Field
                type="text"
                id="nic"
                name="nic"
                className="block w-full border rounded-md px-3 py-2"
              />
              <ErrorMessage
                name="nic"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Event Date Field */}

            <div className="mb-4">
              <label htmlFor="eventDate" className="block mb-1">
                Event Date
              </label>
              <div>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  excludeDates={AllDate}
                  disabledKeyboardNavigation
                  shouldCloseOnSelect={true}
                  inline
                />
              </div>
              <ErrorMessage
                name="eventDate"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Guest Count Field */}
            <div className="mb-4">
              <label htmlFor="guestCount" className="block mb-1">
                Guest Count
              </label>
              <Field
                type="text"
                id="guestCount"
                name="guestCount"
                className="block w-full border rounded-md px-3 py-2"
              />
              <ErrorMessage
                name="guestCount"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Food Menu Field */}
            <div className="mb-4">
              <label htmlFor="foodMenu" className="block mb-1">
                Food Menu
              </label>
              <Field
                type="text"
                id="foodMenu"
                name="foodMenu"
                className="block w-full border rounded-md px-3 py-2"
              />
              <ErrorMessage
                name="foodMenu"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Alcohol Service Field */}
            <div className="mb-4">
              <label htmlFor="alcoholService" className="block mb-1">
                Alcohol Service
              </label>
              <Field
                type="text"
                id="alcoholService"
                name="alcoholService"
                className="block w-full border rounded-md px-3 py-2"
              />
              <ErrorMessage
                name="alcoholService"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Advance Payment Field */}
            <div className="mb-4">
              <label htmlFor="advancePayment" className="block mb-1">
                Advance Payment
              </label>
              <Field
                type="text"
                id="advancePayment"
                name="advancePayment"
                className="block w-full border rounded-md px-3 py-2"
              />
              <ErrorMessage
                name="advancePayment"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <h1 className="font-bold"></h1>

      <Dialog
        open={open}
        onClose={handleClose}
        style={{ zIndex: "9999" }}
        maxWidth="lg"
      >
        <CreateUpdatePaymentForm handleClose={handleClose} Booking={Booking} />
      </Dialog>
    </div>
  );
};

export default NewForm;
