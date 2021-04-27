import React from 'react'
import useAPI from '../hooks/useAPI'

export default function MonstersPage() {
    const data = useAPI("monsters");
    return (
        <div>
            {data.map(monster => {
                return <div className="monster-card card">
                            <div>
                                <h2>Name: <span>{monster.name}</span></h2>
                            </div>
                            <div>
                                <h2>Description: <span>{monster.description}</span></h2>
                            </div>
                            <div>
                                <h2>Appearance: <span>{monster.appearances.length}</span></h2>
                            </div>
                        </div>
            })}
        </div>
    )
}
