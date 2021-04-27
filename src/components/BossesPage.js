import React from 'react'
import useAPI from '../hooks/useAPI'

export default function BossesPage() {
    const data = useAPI("bosses")
    return (
        <div className="boss-card">
            {data.map(boss => {
                return <div>
                            <div>
                                {boss.name}
                            </div>
                            <div>
                                {boss.description}
                            </div>
                        </div>
            })}
        </div>
    )
}
