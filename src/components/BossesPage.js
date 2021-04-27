import React from 'react'
import useAPI from '../hooks/useAPI'

export default function BossesPage() {
    const [data, isDone] = useAPI("bosses");
    const style = {display: isDone ? "none" : "block"};
    return (
        <div>
            <h2>Zelda Bosses</h2>
            <div className="loader" style={style}></div>
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
