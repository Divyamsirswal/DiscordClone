import { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
        const data = await fetch('/data')
            .then(res => res.json())

        setData(data)
    })()
}, [])
  return <>
    {`${data.data}`}
  </>;
}

export default App;
