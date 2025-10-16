import React from 'react';

const PatientDetails = ({ patient, onClose }) => {
  if (!patient) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{patient.name}</h2>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Contact:</strong> {patient.contact}</p>
        <p><strong>Address:</strong> {patient.address}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PatientDetails;
