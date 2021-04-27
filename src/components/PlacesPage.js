import React from 'react'
import useAPI from '../hooks/useAPI'

export default function PlacesPage() {
    const data = useAPI("places")
    return (
        <div>
        {data.map(place => {
            return <div className="place-card">
                        <div>
                            <h2>Name: <span>{place.name}</span></h2>
                        </div>
                        <div>
                            <h2>Description: <span>{place.description}</span></h2>
                        </div>
                    </div>
            })
        }
        </div>
    )
}
