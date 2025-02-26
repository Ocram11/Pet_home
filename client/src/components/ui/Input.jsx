import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="w-full bg-[#fed7aa] text-white px-4 py-2 rounded-md"
  />
));
