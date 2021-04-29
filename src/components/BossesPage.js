import React from 'react'
import useAPI from '../hooks/useAPI'
import Game from "./Game";

export default function BossesPage() {
    const [data, isDone] = useAPI("bosses");
    const style = {display: isDone ? "none" : "block"};
    return (
        <div>
            <h2>Zelda Bosses</h2>
            <div className="loader" style={style}></div>
            {data.map((boss, index) => {
                return <div className="boss-card card" key={boss._id} data-sequence={index}>
                            <div>
                                <h3>Name: <span>{boss.name}</span></h3>
                            </div>
                            <div>
                                <h3>Description: <span>{boss.description}</span></h3>
                            </div>
                            {/* {boss.appearances?.map(gameId => {
                                return <Game gameId={gameId} key={gameId} />
                            })} */}
                        </div>
            })}
        </div>
    )
}
