import './App.css';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import dummyData from './dummyData.js';

function App() {
  const [showTable, setShowTable] = useState(true);

  const chartData = dummyData.map(data => ({
    year: data.year,
    medals: data.medals,
  }));

  return (
    <div className="App">
      <div className="tabs">
        <button
          onClick={() => setShowTable(true)}
          className={showTable ? 'active' : ''}
        >
          Table
        </button>
        <button
          onClick={() => setShowTable(false)}
          className={!showTable ? 'active' : ''}
        >
          Chart
        </button>
      </div>
      {showTable ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Year</th>
                <th>Medals</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map(({ id, year, medals }) => (
                <tr key={id}>
                  <td data-label="ID">{id}</td>
                  <td data-label="Year">{year}</td>
                  <td data-label="Medals">{medals}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="details-box">
            <h3>Contact Details</h3>
            <p>Name: Mekala Santhosh</p>
            <p>Email: mekalasanthoshreddy5037@gmail.com</p>
            <p>Phone: 8179015037</p>
          </div>
        </>
      ) : (
        <div className="chart-container">
          <h2>Medals Over the Years</h2>
          <p className="chart-description">The chart below visualizes the number of medals awarded over different years. It provides a clear representation of trends and patterns.</p>
          <div className="chart">
            <LineChart width={window.innerWidth - 40} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="medals" stroke="#7d9cea" strokeWidth={3} />
            </LineChart>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
