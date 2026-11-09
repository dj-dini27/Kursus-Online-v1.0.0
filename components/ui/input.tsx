import { PropsWithChildren } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({
  label,
  error,
  helperText,
  className = "",
  ...props
}: PropsWithChildren<InputProps>) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={props.id}
          className="mb-1.5 block text-meta font-semibold uppercase tracking-label text-muted-foreground"
        >
          {label}
        </label>
      )}
      <input
        id={props.id}
        className={`w-full border-0 border-b border-input bg-transparent px-0 py-2.5 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-foreground focus:outline-none ${
          error ? "border-destructive focus:border-destructive" : ""
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
      {helperText && (
        <p className="mt-1.5 text-sm text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
}
