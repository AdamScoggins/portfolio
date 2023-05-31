import React from 'react';

const Gradient = ({ fromColor, toColor, children }) => {
    const gradientClasses = `py-6 px-4 bg-gradient-to-r from-${fromColor} to-${toColor}`;

    return <div className={gradientClasses}>{children}</div>;
};

export default Gradient;
