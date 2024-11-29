"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function DonationForm() {
  const [locationAvailable, setLocationAvailable] = useState(false);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    email: "",
    name: "",
    quantity: '<100',
    number: 0,
    location: "",
  });

  const onLogin = async (event) => {
    event.preventDefault(); // Prevents the page from reloading
    try {
      console.log("Submitting form data:", user);
      const response =  axios.post("/api/submit", user);
      console.log("Response from server:", response);
    } catch (error) {
      console.error("Error during form submission:", error);
    } 
  };

  useEffect(() => {
    if (navigator.geolocation) {
      console.log("Geolocation supported by browser");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Position received:", position);
          setLocationAvailable(true);
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setUser({ ...user, location: `${position.coords.latitude}, ${position.coords.longitude}` });
        },
        (error) => {
          console.error("Error getting position:", error);
          setError(error.message);
        }
      );
    } else {
      console.error("Geolocation not supported by this browser.");
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : locationAvailable ? (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
              Make your donation
            </h1>

            <form
              onSubmit={onLogin} // Attach the onLogin function here
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
              <p className="text-center text-lg font-medium">
                Enter the food details
              </p>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                    placeholder="Enter email"
                    required
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                    placeholder="Enter Your Name"
                    required
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </div>
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="number" className="sr-only">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="number"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                    placeholder="Enter Your Phone Number"
                    maxLength="10"
                    minLength="10"
                    required
                    onChange={(e) => setUser({ ...user, number: e.target.value })}
                  />
                </div>
              </div>

              {/* Food Amount Dropdown */}
              <div>
                <label htmlFor="amount" className="sr-only">
                  Amount of Food
                </label>
                <div className="relative">
                  <select
                    id="amount"
                    name="amount"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
                    required
                    onChange={(e) => setUser({ ...user, quantity: e.target.value })}
                  >
                    <option value="" disabled>
                      Please Select Amount of food
                    </option>
                    <option value="<100KG">{`<100KG`}</option>
                    <option value="100KG-300KG">{`100KG-300KG`}</option>
                    <option value="300KG-600KG">{`300KG-600KG`}</option>
                    <option value=">600KG">{`>600KG`}</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Donate
              </button>
            </form>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Fetching location...</p>
      )}
    </div>
  );
}

export default DonationForm;
