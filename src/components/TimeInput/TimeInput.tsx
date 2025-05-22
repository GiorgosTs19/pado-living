import React from 'react';

type TimeInputProps = {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  minTime?: string;
  maxTime?: string;
  interval?: number;
};

export function TimeInput({ id, name, value, onChange, minTime = '07:00', maxTime = '10:30', interval = 30 }: TimeInputProps) {
  // Helper to generate time options between min and max
  const generateTimeOptions = () => {
    const options: string[] = [];

    const [minHour, minMinute] = minTime.split(':').map(Number);
    const [maxHour, maxMinute] = maxTime.split(':').map(Number);

    const minTotal = minHour * 60 + minMinute;
    const maxTotal = maxHour * 60 + maxMinute;

    for (let mins = minTotal; mins <= maxTotal; mins += interval) {
      const hours = Math.floor(mins / 60);
      const minutes = mins % 60;
      const formatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      options.push(formatted);
    }

    return options;
  };

  const timeOptions = generateTimeOptions();

  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="block w-full max-w-xl bg-white border-b border-border p-2 text-sm active:outline-none focus:outline-none"
    >
      {timeOptions.map(time => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </select>
  );
}
