import React, { useState } from "react";
import axios from "axios";
// import emailjs from 'emailjs-com';
import Notiflix from "notiflix";

const EmailForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const clearErrors = () => {
    setErrors([]);
  };

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Loading...";
    let fData = new FormData();
    fData.append("first_name", firstName);
    fData.append("last_name", lastName);
    fData.append("email", email);
    fData.append("phone_number", phone);
    fData.append("message", message);

    axios({
      method: "post",
      url: process.env.REACT_APP_CONTACT_API,
      data: fData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "send message";
        clearInput();
        //handle success
        Notiflix.Report.success("Success", response.data.message, "Okay");
      })
      .catch(function (error) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "send message";
        //handle error
        const { response } = error;
        if (response.status === 500) {
          Notiflix.Report.failure(
            "An error occurred",
            response.data.message,
            "Okay"
          );
        }
        if (response.data.errors !== null) {
          setErrors(response.data.errors);
        }
      });
  };
  return (
    <form onSubmit={sendEmail}>
      <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
        <div className="flex">
          <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">
            Send us a message
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <div>
            <input
              name="first_name"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onKeyUp={clearErrors}
            />
            {errors && (
              <p className="text-red-500 text-sm">{errors.first_name}</p>
            )}
          </div>

          <div>
            <input
              name="last_name"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onKeyUp={clearErrors}
            />
            {errors && (
              <p className="text-red-500 text-sm">{errors.last_name}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyUp={clearErrors}
            />
            {errors && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              name="phone_number"
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyUp={clearErrors}
            />
            {errors && (
              <p className="text-red-500 text-sm">{errors.phone_number}</p>
            )}
          </div>
        </div>
        <div className="my-4">
          <textarea
            name="message"
            placeholder="Message*"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={clearErrors}
          ></textarea>
          {errors && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <div className="my-2 w-1/2 lg:w-2/4">
          <button
            type="submit"
            id="submitBtn"
            className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                  focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
