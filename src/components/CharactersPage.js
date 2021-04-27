import React from 'react'
import useAPI from '../hooks/useAPI'

export default function CharactersPage() {
    const data = useAPI("characters");
    return (
        <div>
            {data.map(character => {
                return <div className="character-card card">
                            <div>
                                <h2>Name: <span>{character.name}</span></h2>
                            </div>
                            <div>
                                <h2>Description: <span>{character.description}</span></h2>
                            </div>
                        </div>
            })}
        </div>
    )
}
