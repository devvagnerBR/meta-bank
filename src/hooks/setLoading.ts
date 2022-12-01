import React from 'react'


export const useLoading = () => {

    const [loading, setLoading] = React.useState( true )
    setTimeout( () => {
        setLoading( false )
    }, 1000 )

    return { loading, setLoading }
}

export default useLoading
