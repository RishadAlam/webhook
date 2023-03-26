import { useState } from "react";
import { Link } from "react-router-dom";
import CopyIcn from "../../Icons/CopyIcn";
import EyeIcon from "../../Icons/EyeIcon";
import EyeOffIcon from "../../Icons/EyeOffIcon";
import ResponseCard from "../responseCard/ResponseCard";
import "./Webhook.css";

export default function Webhook() {
    const [showResponse, setShowResponse] = useState(true);
    const showResponseHandler = () => {
        showResponse ? setShowResponse(false) : setShowResponse(true);
    };

    return (
        <div className="trigger-webhook-width">
            <div className="title text-start">
                <b>Webhook URL:</b>
            </div>
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
                        <CopyIcn size="18" />
                    </button>
                </label>
            </div>
            <div className="flx flx-between">
                <button type="button" className="btn btcd-btn-lg green sh-sm flx">
                    Fetch
                </button>
                <button
                    type="button"
                    className="btn btcd-btn-lg green sh-sm flx"
                    onClick={showResponseHandler}
                >
                    <span style={{ marginRight: "8px", color: "#004de3" }}>
                        {showResponse ? "Hide" : "Show"} Response
                    </span>
                    {showResponse ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                </button>
            </div>
            {showResponse && <ResponseCard />}
            <Link to={"/crm"}>
                <button type="button" className="btn btcd-btn-lg green sh-sm flx">
                    Set Action
                </button>
            </Link>
            <div className="note text-start">
                <h4 style={{ marginBottom: "10px" }}>Note</h4>
                <div className="note-text">
                    You can test any kind of webhook using{" "}
                    <a href="https://webhook.is/" target="_blank" rel="noreferrer">
                        webhook.is
                    </a>
                </div>
            </div>
        </div>
    );
}
