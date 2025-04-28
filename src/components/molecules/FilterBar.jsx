import React, { useState } from 'react';

export default function FilterBar({ onSelect, className }) {
    const [selected, setSelected] = useState(null);

    const values = [
        { value: 'All', label: 'All' },
        { value: 'Food', label: 'Food' },
        { value: 'Coffee', label: 'Coffee' },
        { value: 'Non Coffee', label: 'Non Coffee' },
    ];

    const handleSelect = (value) => {
        setSelected(value);
        if (onSelect) {
            onSelect(value);
        }
    };

    return (
        <div className={`flex gap-2 ${className}`}>
            {values.map((option) => (
                <button
                    key={option.value}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg font-bold text-md transition duration-300 ease-in-out transform hover:scale-105 ${
                        selected === option.value
                            ? 'bg-amber-600 text-amber-50'
                            : 'bg-amber-200 text-amber-800'
                    }`}
                    onClick={() => handleSelect(option.value)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}
