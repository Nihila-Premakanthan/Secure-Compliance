import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addAPI, getAPI } from "../../service/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyForm = ({ Booking }) => {
  const [AllCardData, setAllCardData] = useState({});
  const [Loading, setLoading] = useState(true);
  const getAllCourse = () => {
    getAPI("payments")
      .then((resp) => {
        let sample = [];
        sample = resp.data;
        console.log(sample, "-----------");
        setAllCardData(sample);
        setLoading(false);
      })
      .catch((err) => {
        setAllCardData([]);
      });
  };
  useEffect(() => {
    getAllCourse();
  }, []);

  const initialValues = {
    amount: "",
    date: "",
    status: "",
    description: "",
    cardOrcash: "",
    cardId: "",
    cardDetails: "",
  };

  const validationSchema = Yup.object().shape({
    amount: Yup.number().required("Amount is required"),
    date: Yup.string().required("Date is required"),
    status: Yup.string().required("Status is required"),
    description: Yup.string().required("Description is required"),
    cardOrcash: Yup.string().required("Card or Cash is required"),
    cardId: Yup.string(),
  });
  const navigate = useNavigate();

  const redirectPage = () => {
    navigate(`/profile/booking`);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    
    console.log(Booking, "Booking");

    const userDataString = JSON.parse(localStorage.getItem("userData")) || "";
    let userID = userDataString._id || "NOID";

    const customerId = userID; // Your customerId value
    const obj = { ...values, customerId };
    console.log(obj);
    try {
      addAPI("transactions", obj)
        .then((resp) => {
          // toast.success("Successfully Added   !  ");
          try {
            let obj2 = { ...Booking, customerId };
            addAPI("bookings", obj2)
              .then((resp) => {
                toast.success("Successfully Added!");
                redirectPage();
              })
              .catch((err) => toast.error(err.error || "somthing went wrong"));
          } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("somthing went wrong");
          } finally {
            setSubmitting(false);
          }

          redirectPage();
        })
        .catch((err) => toast.error(err.error || "somthing went wrong"));
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("somthing went wrong");
    } finally {
      setSubmitting(false);
    }

    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
  };

  return (
    <div className="max-w-md mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Expense Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm font-bold mb-1">
                Amount:
              </label>
              <Field
                type="number"
                id="amount"
                name="amount"
                className="w-full border rounded py-2 px-3 text-sm"
              />
              <ErrorMessage
                name="amount"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-bold mb-1">
                Date:
              </label>
              <Field
                type="date"
                id="date"
                name="date"
                placeholder="YYYY-MM-DD"
                className="w-full border rounded py-2 px-3 text-sm"
              />
              <ErrorMessage
                name="date"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="status" className="block text-sm font-bold mb-1">
                Status:
              </label>
              <Field
                type="text"
                id="status"
                name="status"
                className="w-full border rounded py-2 px-3 text-sm"
              />
              <ErrorMessage
                name="status"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-bold mb-1"
              >
                Description:
              </label>
              <Field
                type="text"
                id="description"
                name="description"
                className="w-full border rounded py-2 px-3 text-sm"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="cardOrcash"
                className="block text-sm font-bold mb-1"
              >
                Card or Cash:
              </label>
              <Field
                as="select"
                id="cardOrcash"
                name="cardOrcash"
                className="w-full border rounded py-2 px-3 text-sm"
              >
                <option value="">Select an option</option>

                <option value="Card">Card</option>
                <option value="Cash">Cash</option>
              </Field>
              <ErrorMessage
                name="cardOrcash"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {values.cardOrcash === "Card" && (
              <div className="mb-4">
                <label
                  htmlFor="cardId"
                  className="block text-sm font-bold mb-1"
                >
                  Card Details:
                </label>
                <Field
                  as="select"
                  id="cardId"
                  name="cardId"
                  className="w-full border rounded py-2 px-3 text-sm"
                >
                  <option value="">Select an option</option>
                  {AllCardData &&
                    AllCardData.length > 0 &&
                    AllCardData.map((item, i) => (
                      <>
                        <option value={item._id}>{item.cardHolderName}</option>
                      </>
                    ))}
                  {/* <option value="Card">Card</option>
                  <option value="Cash">Cash</option> */}
                </Field>
                <ErrorMessage
                  name="cardId"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
