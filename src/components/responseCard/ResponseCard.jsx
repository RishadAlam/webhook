import "./ResponseCard.css"

export default function ResponseCard() {
    return (
        <div className="ResponseCard text-start" style={{ marginTop: '20px' }}>
            <div className="header flx flx-between">
                <h3 style={{ width: '70%' }}>Value</h3>
                <h3 style={{ width: '30%' }}>type</h3>
            </div>
            <div className="card-body">
                <ul>
                    <li>
                        <div className="flx flx-between">
                            <div className="card-data" style={{ width: '70%' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, explicabo quibusdam tenetur quidem placeat officiis deserunt illo dolore minus ducimus aut eligendi eius magnam, blanditiis modi nisi rem ea aliquid. Consequatur, voluptatum at nam quam cupiditate molestias quod placeat voluptatem voluptas exercitationem debitis, deserunt eaque est dolorum adipisci, nemo accusamus.
                            </div>
                            <div className="card-data-dropdown" style={{ width: '30%' }}>
                                <select className="w-10">
                                    <option value="Text">Text</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flx flx-between">
                            <div className="card-data" style={{ width: '70%' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, explicabo quibusdam tenetur quidem placeat officiis deserunt illo dolore minus ducimus aut eligendi eius magnam, blanditiis modi nisi rem ea aliquid. Consequatur, voluptatum at nam quam cupiditate molestias quod placeat voluptatem voluptas exercitationem debitis, deserunt eaque est dolorum adipisci, nemo accusamus.
                            </div>
                            <div className="card-data-dropdown" style={{ width: '30%' }}>
                                <select className="w-10">
                                    <option value="Text">Text</option>
                                </select>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flx flx-between">
                            <div className="card-data" style={{ width: '70%' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, explicabo quibusdam tenetur quidem placeat officiis deserunt illo dolore minus ducimus aut eligendi eius magnam, blanditiis modi nisi rem ea aliquid. Consequatur, voluptatum at nam quam cupiditate molestias quod placeat voluptatem voluptas exercitationem debitis, deserunt eaque est dolorum adipisci, nemo accusamus.
                            </div>
                            <div className="card-data-dropdown" style={{ width: '30%' }}>
                                <select className="w-10">
                                    <option value="Text">Text</option>
                                </select>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
