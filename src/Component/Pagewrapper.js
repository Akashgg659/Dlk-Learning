import React, { useEffect } from 'react'

const PageWrapper = ({ children }) => {
    return (
        <div style={{ padding: "0", margin: "0" }}>
            {children}
        </div>
    );
};

export default PageWrapper;