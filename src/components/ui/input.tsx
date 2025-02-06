import { cn } from "@/lib/utils";
import * as React from "react";

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className={cn("relative", className)}>
        {icon ? (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 text-border">
            {icon}
          </span>
        ) : null}
        <input
          ref={ref}
          type={type}
          className={cn(
            "h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm text-sidebar-primary-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-input disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            icon ? "pl-8" : "",
          )}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
