import React from "react";
import { BaseIconProps, iconVariants } from "./base-icon";
import { cn } from "@lib/common.lib";

export type CheckIconProps = BaseIconProps;

export const CheckIcon = React.forwardRef<SVGSVGElement, CheckIconProps>(
  ({ className, size, ...props }, ref) => (
    <svg
      ref={ref}
      className={cn(iconVariants({ size }), "stroke-current", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  )
);

CheckIcon.displayName = "CheckIcon";
