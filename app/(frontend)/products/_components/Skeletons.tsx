export function CategorySidebarSkeleton() {
  return (
    <aside className="shrink-0 lg:w-64">
      <div className="sticky top-8 rounded-lg border-3 border-bg-light bg-white p-6">
        {/* Header */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-5 w-5 animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-28 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Category links */}
        <ul className="space-y-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <li key={i}>
              <div className="h-9 animate-pulse rounded-lg bg-gray-200" />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function ProductGridSkeleton() {
  return (
    <div className="flex-1">
      {/* Header row */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="h-8 w-36 animate-pulse rounded bg-gray-200" />
        <div className="h-5 w-16 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg border-3 border-bg-light bg-white"
          >
            {/* Image placeholder */}
            <div className="aspect-square animate-pulse bg-gray-200" />

            {/* Content placeholder */}
            <div className="space-y-3 p-6">
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
              <div className="h-6 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-3/5 animate-pulse rounded bg-gray-200" />
              <div className="mt-2 h-4 w-2/5 animate-pulse rounded bg-gray-200" />
              {/* Button placeholder */}
              <div className="mt-4 h-11 animate-pulse rounded-lg bg-gray-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
