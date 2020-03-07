import React from 'react';

// Setup globally importable navigation reference
export const navigationRef = React.createRef();
export function navigate(name, params) {
	navigationRef.current?.navigate(name, params);
}
