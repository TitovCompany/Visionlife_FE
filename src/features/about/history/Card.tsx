import React from 'react';

interface CardProps {
  title: string;
  event: string[] | string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ title, event, description }) => (
  <div className="max-w-md p-6 mt-5 text-left">
    <h3 className="mb-3 text-lg md:text-2xl font-bold">{title}</h3>
    {Array.isArray(event) ? (
      <ul className="text-base text-gray-700">
        {event.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    ) : (
      <p className="text-base text-gray-700">{event}</p>
    )}
    {description && <p className="mt-2 text-sm text-gray-500">{description}</p>}
  </div>
);

export default Card; 