import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddPatientForm = ({ addPatient }) => {
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    contact: "",
  });

  const handleChange = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPatient.name && newPatient.age && newPatient.contact) {
      addPatient({ ...newPatient, id: Date.now() });
      setNewPatient({ name: "", age: "", contact: "" });
    }
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <form
        className="card p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
        onSubmit={handleSubmit}
      >
        <h5 className="card-title text-center mb-3 text-primary">
          Add New Patient
        </h5>

        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={newPatient.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            name="age"
            className="form-control"
            placeholder="Age"
            value={newPatient.age}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="contact"
            className="form-control"
            placeholder="Contact"
            value={newPatient.contact}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn w-70">
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default AddPatientForm;
