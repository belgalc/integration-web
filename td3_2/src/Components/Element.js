import { useState } from "react";

export default function Element({ completed, text }) {
  const [checked, setChecked] = useState(completed);

  function handleChange() {
    setChecked(!checked);
  }

  return (
    <div className="elt">
      <label>
        <input type="checkbox" onChange={handleChange} checked={checked} />
        {text}
      </label>
    </div>
  );
}
