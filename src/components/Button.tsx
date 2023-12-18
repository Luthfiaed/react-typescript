import { type ComponentPropsWithoutRef } from "react";
import { Link, type LinkProps } from "react-router-dom";

/* 
LEARNING POINT
- Using discriminated union type for component property.
    In this Button component prop type, the discriminator field is 'to'
- Using built-in ComponentPropsWithoutRef / ComponentPropsWithRef from React
    to preserve default/existing props and use them in ...otherProps spread operator
*/

type ButtonButtonProps = {
  textOnly: boolean;
} & ComponentPropsWithoutRef<"button">;

type ButtonLinkProps = {
  to: string;
  textOnly: boolean;
} & LinkProps;

type ButtonProps = ButtonButtonProps | ButtonLinkProps;

function Button({ textOnly, ...otherProps }: ButtonProps) {
  const conditionalClass = textOnly ? "button--text-only" : "";

  if ("to" in otherProps) {
    return <Link {...otherProps} className={`button ${conditionalClass}`} />;
  }

  return <button {...otherProps} className={`button ${conditionalClass}`} />;
}

export default Button;
