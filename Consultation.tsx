import React, { useState } from 'react';

export default function Consultation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Doctor Consultation</h2>
      {submitted ? (
        <div className="text-green-600 font-semibold text-center">Appointment booked successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
              className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Preferred Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required
              className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Message (Optional):</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">
            Book Appointment
          </button>
        </form>
      )}
    </div>
  );
}
