'use client';

import { SelectBoxProps } from '@/app/interfaces/selectBox';
import { useEffect, useRef, useState } from 'react';

export function SelectBox<T extends Record<string, any>>({
    label,
    error,
    items,
    selectedItems,
    setSelectedItems,
    wrapperClassName = '',
    className = '',
    placeholder = 'Type to search...',
    maxSelected,
    labelKey,
    valueKey,
}: SelectBoxProps<T>) {
    const [query, setQuery] = useState('');
    const [filtered, setFiltered] = useState<T[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [internalError, setInternalError] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Lọc theo query
    useEffect(() => {
        if (query.trim()) {
        const f = items.filter(
            (item) =>
            String(item[labelKey]).toLowerCase().includes(query.toLowerCase()) &&
            !selectedItems.some((t) => t[valueKey] === item[valueKey])
        );
        setFiltered(f);
        setShowSuggestions(f.length > 0);
        } else {
        setFiltered([]);
        setShowSuggestions(false);
        }
    }, [query, items, selectedItems, labelKey, valueKey]);

    // Click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setShowSuggestions(false);
        }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (item: T) => {
        if (maxSelected && selectedItems.length >= maxSelected){
            setInternalError(`You can only select up to ${maxSelected} items`);
            setShowSuggestions(false);
            return;
        }else{
            setInternalError(null);
        }
        setSelectedItems([...selectedItems, item]);
        setQuery('');
        setShowSuggestions(false);
    };

    const handleRemove = (id: any) => {
        setSelectedItems(selectedItems.filter((item) => item[valueKey] !== id));
    };

    return (
        <div ref={containerRef} className={`flex flex-col gap-1 w-full ${wrapperClassName}`}>
        {label && <label className="font-medium text-sm">{label}</label>}

        {/* Selected items */}
        {selectedItems.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-1">
            {selectedItems.map((item) => (
                <div
                key={String(item[valueKey])}
                className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-md text-sm"
                >
                {item[labelKey]}
                <button
                    type="button"
                    onClick={() => handleRemove(item[valueKey])}
                    className="text-gray-600 hover:text-red-500 cursor-pointer"
                >
                    ×
                </button>
                </div>
            ))}
            </div>
        )}

        {/* Input */}
        <div className="relative w-full">
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query && setShowSuggestions(true)}
            placeholder={placeholder}
            className={`bg-white px-4 py-2 border rounded-sm focus:outline-none focus:ring-1 
            ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'}
            ${className}`}
            />

            {/* Suggestions */}
            {showSuggestions && (
            <ul className="absolute bg-white border border-gray-300 rounded-sm w-full max-h-60 overflow-y-auto z-10 mt-1">
                {filtered.map((item) => (
                <li
                    key={String(item[valueKey])}
                    onClick={() => handleSelect(item)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                    {item[labelKey]}
                </li>
                ))}
            </ul>
            )}
        </div>

        {error && <span className="text-sm text-red-500">{error}</span>}
        {internalError && <span className="text-sm text-red-500 font-bold">{internalError}</span>}
        </div>
    );
}