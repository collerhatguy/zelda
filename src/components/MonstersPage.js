import React from 'react'
import useAPI from '../hooks/useAPI'

export default function MonstersPage() {
    const [data, isDone] = useAPI("monsters");
    const style = {display: isDone ? "none" : "block"};
    return (
        <div>
            <h2>Zelda Monsters</h2>
            <div className="loader" style={style}></div>
            {data.map(monster => {
                return <div className="monster-card card">
                            <div>
                                <h3>Name: <span>{monster.name}</span></h3>
                            </div>
                            <div>
                                <h3>Description: <span>{monster.description}</span></h3>
                            </div>
                            <div>
                                <h3>Appearance: <span>{monster.appearances.length}</span></h3>
                            </div>
                        </div>
            })}
        </div>
    )
}
