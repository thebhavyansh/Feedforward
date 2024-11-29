import React from 'react'

function Cards() {
  return (
    <div>
        <article className="flex gap-5 justify-around">
  <div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-gray-800 p-4 w-40 ">
    <div>
      <h3 className="text-3xl font-bold text-white">100K +</h3>

      <div className="flow-root">
        <ul className="-m-1 flex flex-wrap">
          <li className="p-1 leading-none">
            <a href="#" className="text-[20px] font-medium text-gray-300"> Donations Made </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-gray-800 p-4 ">
    <div>
      <h3 className="text-lg font-medium text-white">100K +</h3>

      <div className="flow-root">
        <ul className="-m-1 flex flex-wrap">
          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> Donations Made </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-gray-800 p-4 ">
    <div>
      <h3 className="text-lg font-medium text-white">100K +</h3>

      <div className="flow-root">
        <ul className="-m-1 flex flex-wrap">
          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> Donations Made </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</article>
    </div>
  )
}

export default Cards