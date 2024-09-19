import React from 'react';


// Incoterms data
const incoterms = [
  { id: 'EXW', name: 'Ex Works', description: 'The seller makes the goods available at their premises.' },
  { id: 'FCA', name: 'Free Carrier', description: 'The seller delivers the goods to a carrier nominated by the buyer.' },
  // Add other Incoterms here...
];

// Main component to display Incoterms and the diagram
const IncotermsOverview = () => {
  return (
    <div>
      <h1>Incoterms® 2020 Overview</h1>
      <ul>
        {incoterms.map(term => (
          <li key={term.id}>
            <strong>{term.id}</strong> ({term.name}): {term.description}
          </li>
        ))}
      </ul>
      <ResponsibilitiesDiagram />
    </div>
  );
};

// Simplified diagram component
const ResponsibilitiesDiagram = () => {
  // Placeholder for a diagram. Consider using SVG or a graphics library for a detailed implementation.
  return (
    <div style={{ border: '1px solid black', marginTop: '20px', padding: '10px' }}>
      <p>Diagram Placeholder</p>
      {/* Your SVG or Canvas diagram should go here */}
    </div>
  );
};

export default IncotermsOverview;
