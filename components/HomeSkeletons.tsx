export function CategoriesCarouselSkeleton() {
  return (
    <div className="flex justify-center items-center gap-8 overflow-hidden px-6 mx-auto w-full max-w-7xl">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex-none w-[180px] md:w-[220px]">
          <div className="w-full h-48 sm:h-62 md:h-105 bg-gray-200 animate-pulse rounded-2xl" />
        </div>
      ))}
    </div>
  );
}

export function PopularBagsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-12">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-35 md:h-60 bg-gray-200 animate-pulse rounded-lg md:rounded-xl" />
      ))}
    </div>
  );
}
