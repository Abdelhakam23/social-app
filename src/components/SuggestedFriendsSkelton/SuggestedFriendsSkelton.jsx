export default function SuggestedFriendsSkelton() {
  return (
    <>
      <div className="flex items-center gap-3 p-2 rounded-lg animate-pulse">
        <div className="size-10 rounded-full bg-gray-200 shrink-0" />
        <div className="flex-1 space-y-2 min-w-0">
          <div className="h-3.5 bg-gray-200 rounded-md w-24" />
          <div className="h-2.5 bg-gray-200 rounded-md w-16" />
        </div>
        <div className="h-7 w-14 bg-gray-200 rounded-lg shrink-0" />
      </div>
    </>
  );
}
