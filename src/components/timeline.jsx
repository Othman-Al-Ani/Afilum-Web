import React, { useState, useEffect, useRef } from 'react';
import '../timeline.css';

const Timeline = () => {
    const timelineRef = useRef(null);
    const [isTimelineVisible, setIsTimelineVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsTimelineVisible(true);
                }
                else
                {
                    setIsTimelineVisible(false);
                }
            });
        });

        observer.observe(timelineRef.current);

        return () => {
            observer.unobserve(timelineRef.current);
        };
    }, []);

    return (
        <>
            <div className="timeline" ref={timelineRef}>
                <div className={`timelineProgress ${isTimelineVisible ? 'fill' : 'unfill'}`} />
            </div>
        </>
    );
};

export default Timeline;
