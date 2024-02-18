import React from "react";

const Button = (props: React.HTMLProps<HTMLAnchorElement>) => {
  return (
    <li>
      <a
        {...props}
        className="font-mono font-black hover:text-slate-500"
      />
    </li>
  );
};

export default Button;
