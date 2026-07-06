export function Card({ children, className = "" }) {
    return (
      <div className={`rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-lg ${className}`}>
        {children}
      </div>
    );
  }
  