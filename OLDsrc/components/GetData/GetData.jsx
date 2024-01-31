import newData from './newData.json'
import './getData.css'

export default function GetData() {
  return (
    <div>
      {newData &&
        newData.map((record) => {
          return (
            <div key={record.id}>
              <div className="main">
                <div className="left">
                    { record.id }
                    <br />
                    { record.title }
                    <img src={ record.cover } />
                </div>
                <div className="right">
                    
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
// import { useState, useEffect } from 'react'

// const useFetch = url => {
//     const [state, setState] = useState([null, false])

//     useEffect(() => {
//         setState([null, true]);

//         (async () => {
//             const data = await fetch(url)
//                 .then(res => res.json())

//             setState([data.body, false])
//         })()
//     }, [url])

//     return state
// };

// export default useFetch
// https://webtips.dev/how-to-fetch-and-display-json-in-react?utm_content=cmp-true
