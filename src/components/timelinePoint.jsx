import React, { useState } from 'react';
import '../timeline.css';

const TimelinePoint = (data) => {

    const [activePoint, setActivePoint] = useState(null);

    const handlePointHover = (point) => {
        setActivePoint(point);
    };



    return (
        <div className="timeline-point" onMouseEnter={() => handlePointHover('Point')} onMouseLeave={() => handlePointHover(null)}>
        Point 1
        {activePoint && (
                <div className="timeline-info">
                    <div className="timeline-info-title">Title</div>
                    <div className="timeline-info-text">Text</div>
                    
                </div>
            )}
    </div>
    );
};

export default TimelinePoint;
