import React from 'react'
import useAPI from '../hooks/useAPI'

export default function CharactersPage() {
    const [data, isDone]= useAPI("characters");
    const style = {display: isDone ? "none" : "block"};
    return (
        <div>
            <h2>Zelda Characters</h2>
            <div className="loader" style={style}></div>
            {data.map((character, index) => {
                return <div className="character-card card"
                style={{
                    animationDelay: `${index * 50}ms`
                }}>
                            <div>
                                <h3>Name: <span>{character.name}</span></h3>
                            </div>
                            <div>
                                <h3>Description: <span>{character.description}</span></h3>
                            </div>
                        </div>
            })}
        </div>
    )
}
