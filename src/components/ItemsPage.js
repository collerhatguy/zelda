import React from 'react';
import useAPI from "../hooks/useAPI";

export default function ItemsPage() {
    const data = useAPI("items");
    return (
        <div>
            {data.map(item => {
                return <div className="item-card card">
                            <div>
                                <h2>Name: <span>{item.name}</span></h2>
                            </div>
                            <div>
                                <h2>Description: <span>{item.description}</span></h2>
                            </div>
                        </div>
            })}
        </div>
    )
}
