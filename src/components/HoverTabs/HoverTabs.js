"use client";
import React, { useState } from 'react';

const HoverTabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        { id: 'tab1', label: 'Tab 1', content: 'This is content for Tab 1' },
        { id: 'tab2', label: 'Tab 2', content: 'This is content for Tab 2' },
        { id: 'tab3', label: 'Tab 3', content: 'This is content for Tab 3' },
    ];

    return (
        <div className="w-full max-w-md mx-auto mt-10 grid grid-cols-2">
            <div>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onMouseEnter={() => setActiveTab(tab.id)}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition text-black mb-4 last:mb-0 block"
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="mt-4 min-h-[60px] text-center text-gray-700">
                {tabs.map(
                    (tab) =>
                        activeTab === tab.id && (
                            <div key={tab.id} className="animate-[fadeIn_1s_ease-in-out] text-black">
                                {tab.content}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default HoverTabs;




