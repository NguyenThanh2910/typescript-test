import React, { useState } from 'react';
import { Unit, Conversion } from './types';

const conversions: Conversion[] = [
  { from: 'cm', to: 'm', factor: 0.01 },
  { from: 'm', to: 'cm', factor: 100 },
];

const Converter: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<Unit>('cm');
  const [toUnit, setToUnit] = useState<Unit>('m');
  const [result, setResult] = useState<number | null>(null);

  const handleConversion = () => {
    const conversion = conversions.find(c => c.from === fromUnit && c.to === toUnit);
    if (conversion) {
      setResult(inputValue * conversion.factor);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg shadow-lg border border-blue-200">
      <h2 className="text-2xl font-extrabold text-gray-700 mb-6 text-center">Unit Converter</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(parseFloat(e.target.value))}
        className="w-full p-3 border border-blue-300 rounded-lg mb-5 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        placeholder="Enter value"
      />
      <div className="flex items-center justify-between mb-5">
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value as Unit)}
          className="p-3 bg-white border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="cm">Centimeters</option>
          <option value="m">Meters</option>
        </select>
        <span className="mx-3 text-gray-600 font-medium">to</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value as Unit)}
          className="p-3 bg-white border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="cm">Centimeters</option>
          <option value="m">Meters</option>
        </select>
      </div>
      <button
        onClick={handleConversion}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-200"
      >
        Convert
      </button>
      {result !== null && (
        <div className="mt-5 p-4 bg-blue-100 border border-blue-300 rounded-lg text-center">
          <span className="text-lg font-semibold text-gray-700">
            Result: {result} {toUnit}
          </span>
        </div>
      )}
    </div>
  );
};

export default Converter;
