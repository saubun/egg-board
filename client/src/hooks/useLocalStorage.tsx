import { useEffect, useState } from 'react';

// Custom react hook to save state in local storage
export default function useLocalStorage(defaultValue, key) {
	const [value, setValue] = useState(() => {
		// State "sticks" through local storage memory
		const stickyValue = window.localStorage.getItem(key);

		return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
	});

	// Update local storage on change
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
