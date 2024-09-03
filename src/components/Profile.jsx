import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const Profile = () => {
  const [name, setName] = useState('John Doe'); // Example name
  const [age, setAge] = useState(30); // Example age
  const [email, setEmail] = useState('john.doe@example.com'); // Example email
  const [mobile, setMobile] = useState('123-456-7890'); // Example mobile number
  const [emergencyContacts, setEmergencyContacts] = useState(['', '', '', '', '']); // Array for emergency contacts

  const handleEmergencyContactChange = (index, value) => {
    const updatedContacts = [...emergencyContacts];
    updatedContacts[index] = value;
    setEmergencyContacts(updatedContacts);
  };

  const addEmergencyContact = () => {
    if (emergencyContacts.length < 5) {
      setEmergencyContacts([...emergencyContacts, '']);
    }
  };

  const removeEmergencyContact = (index) => {
    const updatedContacts = emergencyContacts.filter((_, i) => i !== index);
    setEmergencyContacts(updatedContacts);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full flex items-center justify-center">
            <AiOutlineUser className="w-24 h-24 rounded-full border-2 border-gray-300 bg-slate-50" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800">{name}</h2>
        <p className="text-center text-gray-600">Age: {age}</p>
        <p className="text-center text-gray-600">Email: {email}</p>
        <p className="text-center text-gray-600">Mobile: {mobile}</p>

        <h3 className="text-lg font-semibold mt-6">Emergency Contacts</h3>
        {emergencyContacts.map((contact, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              placeholder={`Contact ${index + 1}`}
              value={contact}
              onChange={(e) => handleEmergencyContactChange(index, e.target.value)}
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button
              type="button"
              onClick={() => removeEmergencyContact(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addEmergencyContact}
          className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-300"
        >
          Add Emergency Contact
        </button>
      </div>
    </div>
  );
};

export default Profile;

