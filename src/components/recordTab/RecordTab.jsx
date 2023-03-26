import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Close from "../../Icons/Close";
import Refresh from "../../Icons/Refresh";
import FieldMapDropdown from "../fieldMapDropDown/FieldMapDropdown";
import "./RecordTab.css";

export default function RecordTab() {
    const [fieldMap, setFieldMap] = useState([{ map: "" }]);
    const [tabs, setTabs] = useState([{ tab: "" }]);
    const addFieldMap = () => setFieldMap((prevState) => [...prevState, { map: "" }]);
    const addTabs = () => setTabs((prevState) => [...prevState, { tab: "" }]);

    const removeTabs = (index) => {
        setTabs((prevState) => {
            const newTabs = [...prevState];
            newTabs.splice(index, 1);
            return newTabs;
        });
    };

    const removeFieldMap = (index) => {
        setFieldMap((prevState) => {
            const newFieldMap = [...prevState];
            newFieldMap.splice(index, 1);
            return newFieldMap;
        });
    };

    return (
        <Tabs className="mt-3">
            <TabList>
                {tabs.map((tab, index) =>
                    index === 0 ? (
                        <Tab key={index}>New Record</Tab>
                    ) : (
                        <Tab key={index}>
                            Related List #{index}
                            <button className="icn-btn" onClick={() => removeTabs(index)}>
                                <Close size={18} />
                            </button>
                        </Tab>
                    )
                )}
                <button
                    className="icn-btn sh-sm ml-2 mr-2 tooltip"
                    style={{ "--tooltip-txt": '"Add More Related List"' }}
                    onClick={addTabs}
                >
                    +
                </button>
            </TabList>

            {tabs.map((tab, index) => (
                <TabPanel key={index}>
                    <div className="flx mt-3">
                        <b className="wdt-200">Layout:</b>
                        <select name="layout" className="btcd-paper-inp w-5">
                            <option value="">Select Layout</option>
                            <option value="Leads">Standard</option>
                        </select>
                        <button
                            className="icn-btn sh-sm ml-2 mr-2 tooltip"
                            type="button"
                            style={{ "--tooltip-txt": '"Refresh CRM Modules"' }}
                        >
                            <Refresh size={18} />
                        </button>
                    </div>
                    <div className="mt-4">
                        <b className="wdt-100">Field Map</b>
                    </div>
                    <div className="btcd-hr mt-1"></div>
                    <div className="flx flx-around mt-2 mb-2 btcbi-field-map-label">
                        <div className="txt-dp">
                            <b>Form Fields</b>
                        </div>
                        <div className="txt-dp">
                            <b>Zoho Fields</b>
                        </div>
                    </div>

                    {fieldMap.map((field, index) => (
                        <FieldMapDropdown
                            key={index}
                            addFieldMap={addFieldMap}
                            removeFieldMap={removeFieldMap}
                            index={index}
                        />
                    ))}
                    <div className="txt-center btcbi-field-map-button mt-2">
                        <button
                            type="button"
                            className="icn-btn sh-sm"
                            onClick={addFieldMap}
                        >
                            +
                        </button>
                    </div>
                </TabPanel>
            ))}
        </Tabs>
    );
}
