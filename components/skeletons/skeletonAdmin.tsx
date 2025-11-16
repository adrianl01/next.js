export default function SkeletonAdmin() {
  return (
    <div className="p-4 bg-gray-700 w-full min-w-2xs max-w-[850px] m-3.5 rounded-2xl h-full flex flex-col">
      <div className="h-8 bg-gray-500 rounded w-1/3 mb-4 animate-pulse flex self-center"></div>
      <div className="space-y-2">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="h-4 bg-gray-300 rounded w-full animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}
