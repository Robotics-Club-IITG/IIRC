import React, { useEffect, useState } from 'react'

function YoutubeLink({link}) {
  const [titleVal, setTitleVal] = useState("Fetching data...");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
				`https://www.youtube.com/oembed?url=${link}&format=json`
			);
      const data = await res.json();
      const { title } = data;
      setTitleVal(title);
    }
    fetchData();
  })
  return (
    <a className='underline text-gray-700' href={link} target="_blank" rel="noreferrer">{titleVal}</a>
  )
}

export default YoutubeLink