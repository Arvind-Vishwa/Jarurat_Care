import React, { useState, useEffect } from 'react';
import PatientCard from '../components/PatientCard';
import PatientDetails from '../components/PatientDetails';
import AddPatientForm from '../components/AddPatient';
import SearchBar from '../components/SearchBar';
import mockData from '../data.json';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setPatients(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading patient data...</p>;

  return (
    <div className="page">
      <h2>Patient Records</h2>
      <SearchBar search={search} setSearch={setSearch} />
      <AddPatientForm addPatient={addPatient} />

      <div className="grid">
        {filtered.map((p) => (
          <PatientCard
            key={p.id}
            patient={p}
            onViewDetails={(pat) => setSelectedPatient(pat)}
          />
        ))}
      </div>

      {selectedPatient && (
        <PatientDetails
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
};

export default Patients;
