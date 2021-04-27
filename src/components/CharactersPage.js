import React from 'react'
import useAPI from '../hooks/useAPI'

export default function CharactersPage() {
    const data = useAPI("characters");
    return (
        <div>
            <h2>Zelda Characters</h2>
            {data.map(character => {
                return <div className="character-card card">
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
