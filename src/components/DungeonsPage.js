import React from 'react'
import useAPI from '../hooks/useAPI'

export default function DungeonsPage() {
    const data = useAPI("dungeons");
    return (
        <div>
            {data.map(dungeon => {
                return <div className="dungeon-card card">
                            <div>
                                <h2>Name: <span>{dungeon.name}</span></h2>
                            </div>
                            <div>
                                <h2>Description: <span>{dungeon.description}</span></h2>
                            </div>
                        </div>
            })}
        </div>
    )
}
