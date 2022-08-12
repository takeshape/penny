export const TrustpilotLoading = () => {
  return (
    <div className="animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="mt-3 mb-4">
          <div className="grid grid-cols-3 gap-0 mb-4">
            <div className="h-5 bg-gray-300" />
            <div className="h-5" />
            <div className="h-5 bg-gray-300" />
          </div>
          <div className="w-32 h-6 bg-gray-300" />
          <div className="mt-3 w-30 h-5 bg-gray-300" />
          <hr className="mt-4" />
        </div>
      ))}
    </div>
  );
};
