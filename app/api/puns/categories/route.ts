import { sql } from '@/lib/db'

// GET all categories
export async function GET(request: Request) {
  const categories = await sql<{ category: string }[]>`select distinct category from puns order by category`
  return Response.json(categories.map(c => c.category))
}
