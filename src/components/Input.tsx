import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

function Input({ label, id, ...otherProps }: InputProps) {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...otherProps}></input>
    </div>
  );
}

export default Input;
