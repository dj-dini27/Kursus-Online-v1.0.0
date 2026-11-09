import { PropsWithChildren } from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/** Textarea garis bawah dengan gaya yang sama seperti `Input`. */
export function Textarea({
  label,
  error,
  helperText,
  className = "",
  rows = 5,
  ...props
}: PropsWithChildren<TextareaProps>) {
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
      <textarea
        id={props.id}
        rows={rows}
        className={`w-full resize-y border-0 border-b border-input bg-transparent px-0 py-2.5 text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-foreground focus:outline-none ${
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
