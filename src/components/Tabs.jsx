import React from "react";

function Tabs() {
    return (
        <div className="tab-section">
            <button className="tab-buttons active-button">1 Product</button>
            <button className="tab-buttons" disabled>2 Addresses</button>
            <button className="tab-buttons" disabled>3 Overview</button>
        </div>
    );
}

export default Tabs;