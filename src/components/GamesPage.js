import React from 'react'
import useAPI from '../hooks/useAPI'

export default function GamesPage() {
    const [data, isDone] = useAPI("games");
    const style = {display: isDone ? "none" : "block"};
    return (
        <div>
            <h2>Zelda Games</h2>
            <div className="loader" style={style}></div>
            {data.map((game, index) => {
                return <div className="game-card card"
                            style={{
                                animationDelay: `${index * 50}ms`
                            }} 
                            key={game._id}>
                            <div>
                                <h3>Name: <span>{game.name}</span></h3>
                            </div>
                            <div>
                                <h3>Published: <span>{game.released_date}</span></h3>
                            </div>
                            <div>
                                <h3>Developer: <span>{game.developer}</span></h3>
                            </div>
                            <div>
                                <h3>Publisher: <span>{game.publisher}</span></h3>
                            </div>
                            <div>
                                <h3>Description: <span>{game.description}</span></h3>
                            </div>
                        </div>
            })}
        </div>
    )
}
