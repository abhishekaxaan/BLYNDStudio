// Lightweight in-memory mock of supabase to allow the app to run without an external service.
// It provides the minimal API used in the app: supabase.from(table).select(...).order(...).limit(...).eq(...)

export type Project = {
  id: number
  thumbnail_url: string
  title: string
  category: string
  client?: string
  description?: string
}

export type Service = {
  id: number
  title: string
  description?: string
  icon?: string
  color_accent?: string
}

export type Stat = {
  id: number
  value: number
  suffix?: string
  label: string
}

const db: Record<string, any[]> = {
  projects: [
    {
      id: 1,
      thumbnail_url: '/placeholder-project-1.jpg',
      title: 'Stellar Website Redesign',
      category: 'Website',
      client: 'Acme Corp',
      description: 'A complete redesign for Acme Corp.',
    },
    {
      id: 2,
      thumbnail_url: '/placeholder-project-2.jpg',
      title: 'Brand Identity Pack',
      category: 'Graphics',
      client: 'Beta LLC',
      description: 'Logo and visual identity for Beta.',
    },
  ] as Project[],
  services: [
    {
      id: 1,
      title: 'Website Design',
      description: 'Modern, responsive website designs.',
      icon: 'Monitor',
      color_accent: '#0071E3',
    },
    {
      id: 2,
      title: 'Graphic Design',
      description: 'Branding, print, and marketing materials.',
      icon: 'ImageIcon',
      color_accent: '#FF6B35',
    },
  ] as Service[],
  stats: [
    { id: 1, value: 120, suffix: '+', label: 'Projects' },
    { id: 2, value: 85, suffix: '+', label: 'Clients' },
    { id: 3, value: 15, suffix: '', label: 'Years' },
    { id: 4, value: 240, suffix: '+', label: 'Coffees' },
  ] as Stat[],
  contact_submissions: [] as any[],
}

function createQuery(table: string) {
  let results = db[table] || []

  const query: any = {
    _table: table,
    _results: results,
    select(_sel?: string) {
      // just keep internal results; return this for chaining
      return query
    },
    order(_col: string) {
      return query
    },
    limit(_n: number) {
      return query
    },
    eq(_col: string, _val: any) {
      // naive filtering: exclude if value doesn't match
      query._results = (db[table] || []).filter((r: any) => r[_col] === _val)
      return query
    },
    insert(rows: any[]) {
      if (!db[table]) db[table] = []
      db[table].push(...rows)
      return Promise.resolve({ data: rows, error: null })
    },
    then(resolve: any) {
      // make the query thenable so `await supabase.from(...).select(...).eq(...)
      //` will resolve to { data, error }
      resolve({ data: query._results, error: null })
    },
  }

  return query
}

export const supabase = {
  from: (table: string) => createQuery(table),
}

export default supabase
