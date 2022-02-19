import React from "react"

export default function OpeningHours(props) {
    const { className } = props || {}
  return (
    <div className={`grid gap-1 grid-cols-2 ${className}`}>
      <div className="">Monday</div>
      <div className="text-right">7am - 5:30pm</div>
      <div className="">Tuesday</div>
      <div className="text-right">7am - 5:30pm</div>
      <div className="">Wednesday</div>
      <div className="text-right">7am - 5:30pm</div>
      <div className="">Thursday</div>
      <div className="text-right">7am - 5:30pm</div>
      <div className="">Friday</div>
      <div className="text-right">7am - 5:30pm</div>
      <div className="">Saturday</div>
      <div className="text-right">8am - 5:30pm</div>
      <div className="">Sunday</div>
      <div className="text-right">9:30am - 4pm</div>
    </div>
  )
}
