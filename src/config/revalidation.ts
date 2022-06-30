export const homepageRevalidationTtl = process.env.NEXT_PUBLIC_HOMEPAGE_REVALIDATION_TTL
  ? Number(process.env.NEXT_PUBLIC_HOMEPAGE_REVALIDATION_TTL)
  : 60; // 1 minute
export const pageRevalidationTtl = process.env.NEXT_PUBLIC_PAGE_REVALIDATION_TTL
  ? Number(process.env.NEXT_PUBLIC_PAGE_REVALIDATION_TTL)
  : 300; // 5 minutes
