export function Badge({ children, variant = "default", className = "" }) {
    return (
      <span
        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${
          variant === "secondary" ? "bg-gray-700 text-gray-300" : "bg-blue-600 text-white"
        } ${className}`}
      >
        {children}
      </span>
    );
  }
  