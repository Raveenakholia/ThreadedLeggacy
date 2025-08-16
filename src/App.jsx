/** @format */

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className='mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10'>
        <button className='bg-sky-500 hover:bg-sky-700'>Save changes</button>
      </div>
    </div>
  );
}

export default App;
