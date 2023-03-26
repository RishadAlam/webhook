import React from "react";
import Trash from "../../Icons/Trash";

export default function FieldMapDropdown({
    addFieldMap,
    removeFieldMap,
    index,
}) {
    return (
        <>
            <div className="flx mt-2 mb-2 btcbi-field-map">
                <div className="pos-rel flx">
                    <div className="flx integ-fld-wrp">
                        <select name="formField" className="btcd-paper-inp mr-2">
                            <option value="">Select Field</option>
                        </select>
                        <select name="zohoFormField" className="btcd-paper-inp mr-2">
                            <option value="">Select Field</option>
                        </select>
                    </div>
                    {index ? (
                        <div className="txt-center btcbi-field-map-button">
                            <button
                                type="button"
                                className="icn-btn sh-sm mr-2"
                                onClick={addFieldMap}
                            >
                                +
                            </button>
                            <button
                                type="button"
                                className="icn-btn sh-sm"
                                onClick={() => removeFieldMap(index)}
                            >
                                <Trash size={16} />
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
}
