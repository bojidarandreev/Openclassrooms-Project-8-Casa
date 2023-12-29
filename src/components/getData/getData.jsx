import { useState, useEffect } from 'react'

const useFetch = url => {
    const [state, setState] = useState([null, false])

    useEffect(() => {
        setState([null, true]);

        (async () => {
            const data = await fetch(url)
                .then(res => res.json())

            setState([data.body, false])
        })()
    }, [url])

    return state
};

export default useFetch
// https://webtips.dev/how-to-fetch-and-display-json-in-react?utm_content=cmp-true