/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react'

export default function Timer({ timer, active, isEdit }) {
  const [timePassed, setTimePassed] = useState(timer)
  const [counting, setCounting] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      if (counting) {
        setTimePassed((time) => time - 1000)
      }
    }, 1000)
    if (!active || isEdit || timePassed < 1000) {
      setCounting(false)
    }
    return () => clearInterval(id)
  }, [counting, active, isEdit, timePassed])

  const convertMs = (ms) => {
    let min = new Date(ms).getMinutes()
    let sec = new Date(ms).getSeconds()
    return `${min}:${sec}`
  }

  const onPlay = () => setCounting(true)

  const onPause = () => setCounting(false)

  return (
    <span className="description">
      <button className="icon icon-play" onClick={onPlay}></button>
      <button className="icon icon-pause" onClick={onPause}></button>
      <span style={{ marginLeft: '10px' }}>{convertMs(timePassed)}</span>
    </span>
  )
}
