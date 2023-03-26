import { Link } from "react-router-dom";
import ChevronLeft from "../../Icons/ChevronLeft";
import CopyIcn from "../../Icons/CopyIcn";
import Refresh from "../../Icons/Refresh";
import RecordTab from "../recordTab/RecordTab";
import "./Crm.css";

export default function Crm() {
    return (
        <div className="btcd-s-wrp">
            <div className="flx">
                <Link to={"/"} className="btn btcd-btn-o-gray">
                    <ChevronLeft size={16} />
                    &nbsp;Back
                </Link>
                <div className="w-10 txt-center" style={{ marginRight: "73px" }}>
                    <b className="f-lg mb-2">Zoho CRM</b>
                    <div style={{ lineHeight: "6px" }}>Integration Settings</div>
                </div>
            </div>
            <div className="text-start" style={{ width: "900px" }}>
                <div className="flx mt-3">
                    <b className="wdt-200">Integration Name:</b>
                    <input
                        className="btcd-paper-inp w-5"
                        name="name"
                        type="text"
                        placeholder="Integration Name..."
                    />
                </div>
                <div className="flx mt-3">
                    <b className="wdt-200">Webhook URL:</b>
                    <div className="w-5">
                        <div className="field-key-cpy w-10 ml-0">
                            <label htmlFor="">
                                <input
                                    id="copy-input-fld"
                                    className="w-10 readonly"
                                    type="text"
                                    name="name"
                                    readOnly
                                />
                                <button
                                    type="button"
                                    className="tooltip"
                                    style={{ "--tooltip-txt": '"Copy"' }}
                                >
                                    <CopyIcn size="14" />
                                </button>
                            </label>
                        </div>
                        <button type="button" className="btn btcd-btn-lg green sh-sm flx">
                            Fetch
                        </button>
                    </div>
                </div>
                <div className="flx mt-3">
                    <b className="wdt-200">Module:</b>
                    <select name="module" className="btcd-paper-inp w-5">
                        <option value="">Select Module</option>
                        <option value="Leads">Leads</option>
                    </select>
                    <button
                        className="icn-btn sh-sm ml-2 mr-2 tooltip"
                        type="button"
                        style={{ "--tooltip-txt": '"Refresh CRM Modules"' }}
                    >
                        <Refresh size={18} />
                    </button>
                </div>
                <RecordTab />
                <div className="flx mt-2">
                    <label
                        htmlFor="btcd-cbx"
                        className="btcd-label-cbx wdt-200 mt-4 mr-2"
                    >
                        <input
                            type="checkbox"
                            id="btcd-cbx"
                            className="btcd-cbx-invisible"
                        />
                        <span>Conditional Logics</span>
                    </label>
                </div>
                <button type="button" className="btn btcd-btn-lg green sh-sm flx">
                    Update
                </button>
            </div>
        </div>
    );
}
