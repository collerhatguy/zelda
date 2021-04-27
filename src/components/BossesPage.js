import React from 'react'
import useAPI from '../hooks/useAPI'

export default function BossesPage() {
    const data = useAPI("bosses")
    return (
        <div>
            <h2>Zelda Bosses</h2>
            {data.map(boss => {
                return <div className="boss-card card" key={boss._id}>
                            <div>
                                <h3>Name: <span>{boss.name}</span></h3>
                            </div>
                            <div>
                                <h3>Description: <span>{boss.description}</span></h3>
                            </div>
                        </div>
            })}
        </div>
    )
}
