import React from 'react';
import useAPI from "../hooks/useAPI";

export default function ItemsPage() {
    const [data, isDone] = useAPI("items");
    const style = {display: isDone ? "none" : "block"};
    return (
        <div>
            <h2>Zelda Items</h2>
            <div className="loader" style={style}></div>
            {data.map((item, index) => {
                return <div className="item-card card"
                            style={{
                                animationDelay: `${index * 50}ms`
                            }}
                            key={item._id}>
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
