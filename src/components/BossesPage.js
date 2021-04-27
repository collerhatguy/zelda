import React from 'react'
import useAPI from '../hooks/useAPI'

export default function BossesPage() {
    const data = useAPI("bosses")
    return (
        <div>
            {data.map(boss => {
                return <div className="boss-card card" key={boss._id}>
                            <div>
                                <h2>Name: <span>{boss.name}</span></h2>
                            </div>
                            <div>
                                <h2>Description: <span>{boss.description}</span></h2>
                            </div>
                        </div>
            })}
        </div>
    )
}
