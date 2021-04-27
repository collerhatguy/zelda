import React from 'react';
import useAPI from "../hooks/useAPI";

export default function ItemsPage() {
    const data = useAPI("items");
    return (
        <div>
            {data.map(item => {
                return <div>
                            <div>
                                {item.name}
                            </div>
                            <div>
                                {item.description}
                            </div>
                        </div>
            })}
        </div>
    )
}
