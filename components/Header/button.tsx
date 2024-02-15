import { JSX } from "preact";

const Button = (props: JSX.HTMLAttributes<HTMLAnchorElement>) => {
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
