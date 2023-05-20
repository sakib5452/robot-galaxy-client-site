import React, { useEffect, useState } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import TabSection1 from '../TabSection1/TabSection1';
import TabSection2 from '../TabSection2/TabSection2';
import TabSection3 from '../TabSection3/TabSection3';



const TabSection = () => {
    const [activeTab, setActiveTab] = useState('html');
    const [subCategory, setSubCategory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(res => res.json())
            .then(data => setSubCategory(data))
    }, []);
    const data = [
        {
            label: "Marvel",
            value: "Marvel",
        },
        {
            label: "Avengers",
            value: "Avengers",
        },
        {
            label: "Transformers",
            value: "Transformers",
        }
    ];
    return (

        <div>
            <div>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <span className="relative">Shop By Category</span>
                        </span>

                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
            </div>
            <Tabs value={activeTab}>
                <TabList
                    className="rounded-none border-b border-blue-gray-50 bg-purple-400 p-8 lg:pl-80 pl-10 lg:ml-44  grid grid-cols-3 lg:mr-44"

                >
                    {data.map(({ value, label }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-white" : ""}
                        >
                            <button className='text-lg font-bold'>{label}</button>
                        </Tab>
                    ))}
                </TabList>
                <TabPanel className="grid grid-cols-1 lg:grid-cols-2 lg:ml-36 lg:mr-36">
                    {subCategory.slice(0, 2).map(toy => <TabSection1
                        toy={toy}
                        key={toy._id}
                    ></TabSection1>)}
                </TabPanel>
                <TabPanel className="grid grid-cols-1 lg:grid-cols-2 lg:ml-36 lg:mr-36">
                    {subCategory.slice(2, 4).map(toy => <TabSection2
                        toy={toy}
                        key={toy._id}
                    ></TabSection2>)}
                </TabPanel>
                <TabPanel className="grid grid-cols-1 lg:grid-cols-2 lg:ml-36 lg:mr-36">
                    {subCategory.slice(4, 6).map(toy => <TabSection3
                        toy={toy}
                        key={toy._id}
                    ></TabSection3>)}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabSection;