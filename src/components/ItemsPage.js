import React from 'react';
import useAPI from "../hooks/useAPI";

export default function ItemsPage() {
    const data = useAPI("items");
    return (
        <div>
            <h2>Zelda Items</h2>
            {data.map(item => {
                return <div className="item-card card">
                            <div>
                                <h3>Name: <span>{item.name}</span></h3>
                            </div>
                            <div>
                                <h3>Description: <span>{item.description}</span></h3>
                            </div>
                        </div>
            })}
        </div>
    )
}
