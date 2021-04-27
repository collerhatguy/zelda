import React from 'react'
import useAPI from '../hooks/useAPI'

export default function CharactersPage() {
    const data = useAPI("characters");
    return (
        <div>
            {data.map(character => {
                return <div>
                            <div>
                                {character.name}
                            </div>
                            <div>
                                {character.description}
                            </div>
                        </div>
            })}
        </div>
    )
}
