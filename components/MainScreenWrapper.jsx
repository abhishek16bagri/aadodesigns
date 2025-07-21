// components/MainScreenWrapper.js (Updated)
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import UserDetailsModal from './UserDetailsModal'

const MainScreenWrapper = ({
    children,
    screenHeader = 'Header',
}) => {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate page loading
        const loadTimer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        // Check if this is the first visit
        const hasVisited = localStorage.getItem('hasVisited');
        
        if (!hasVisited) {
            // Delay modal show to let page content load first
            setTimeout(() => {
                setShowModal(true);
            }, 800);
        }

        return () => clearTimeout(loadTimer);
    }, []);

    const handleModalSubmit = (details) => {
        // Mark as visited and save user details
        localStorage.setItem('hasVisited', 'true');
        localStorage.setItem('userDetails', JSON.stringify(details));
        setShowModal(false);
    };

    return (
        <>
            {/* Main Website Content - Always rendered */}
            <div className={`justify-start relative w-full flex h-full items-start flex-col min-h-screen gap-1 text-black transition-all duration-300 ${showModal ? 'scale-95' : ''}`}>
                {/* Loading Skeleton (optional) */}
                {isLoading && (
                    <div className="absolute inset-0 bg-gray-100 z-10">
                        <div className="animate-pulse">
                            <div className="h-20 bg-gray-300 mb-4"></div>
                            <div className="h-64 bg-gray-200 mb-4"></div>
                            <div className="h-32 bg-gray-300"></div>
                        </div>
                    </div>
                )}
                
                {/* {headerItem} */}
                <div className="w-full h-full pt-1">
                    {children}
                </div>
            </div>

            {/* Floating Modal - Renders on top */}
            <UserDetailsModal 
                isOpen={showModal} 
                onSubmit={handleModalSubmit} 
            />
        </>
    )
}
export default MainScreenWrapper
