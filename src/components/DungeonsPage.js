import React from 'react'
import useAPI from '../hooks/useAPI'

export default function DungeonsPage() {
    const [data, isDone] = useAPI("dungeons");
    const style = {display: isDone ? "none" : "block"};
    return (
        <div>
            <h2>Zelda Dungeons</h2>
            <div className="loader" style={style}></div>
            {data.map((dungeon, index) => {
                return <div className="dungeon-card card"
                        style={{
                            animationDelay: `${index * 50}ms`
                        }}
                        key={dungeon._id}>
                            <div>
                                <h3>Name: <span>{dungeon.name}</span></h3>
                            </div>
                            <div>
                                <h3>Description: <span>{dungeon.description}</span></h3>
                            </div>
                        </div>
            })}
        </div>
    )
}
