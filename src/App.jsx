/** @format */

import { useState } from 'react';
import ContactUs from './Forms/ContactUs';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ContactUs />
    </div>
  );
}

export default App;
