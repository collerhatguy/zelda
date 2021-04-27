import React from 'react'
import useAPI from '../hooks/useAPI'

export default function GamesPage() {
    const data = useAPI("games");
    return (
        <div>
            {data.map(game => {
                return <div className="game-card card">
                            <div>
                                <h2>Name: <span>{game.name}</span></h2>
                            </div>
                            <div>
                                <h2>Description: <span>{game.description}</span></h2>
                            </div>
                        </div>
            })}
        </div>
    )
}
