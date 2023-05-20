import React, { useEffect, useState } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import TabSection1 from '../TabSection1/TabSection1';
import TabSection2 from '../TabSection2/TabSection2';



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
            label: "HTML",
            value: "HTML",
        },
        {
            label: "React",
            value: "React",
        },
        {
            label: "Vue",
            value: "Vue",
        }
    ];
    return (

        <div>
            <div>
                <h1>Shop by category</h1>
            </div>
            <Tabs value={activeTab}>
                <TabList
                    className="rounded-none border-b border-blue-gray-50 bg-purple-400 p-8 lg:pl-80 pl-10 lg:ml-36  grid grid-cols-3 lg:mr-36"

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
                <TabPanel className="grid grid-cols-1 lg:grid-cols-2 ml-36 mr-36">
                    {subCategory.slice(0, 2).map(toy => <TabSection1
                        toy={toy}
                        key={toy._id}
                    ></TabSection1>)}
                </TabPanel>
                <TabPanel>
                    {subCategory.slice(2, 4).map(toy => <TabSection2
                        toy={toy}
                        key={toy._id}
                    ></TabSection2>)}
                </TabPanel>
                <TabPanel>
                    <h2>Any content3 </h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabSection;