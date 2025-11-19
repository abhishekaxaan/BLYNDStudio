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
      thumbnail_url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Stellar Website Redesign',
      category: 'Website',
      client: 'Acme Corp',
      description: 'A complete modern redesign that increased user engagement by 150%.',
    },
    {
      id: 2,
      thumbnail_url: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Brand Identity Pack',
      category: 'Graphics',
      client: 'Beta LLC',
      description: 'Comprehensive brand identity including logo, guidelines, and assets.',
    },
    {
      id: 3,
      thumbnail_url: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'E-Commerce Platform',
      category: 'Web App',
      client: 'TechStart Inc',
      description: 'Full-stack e-commerce solution with real-time inventory management.',
    },
    {
      id: 4,
      thumbnail_url: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mobile App Design',
      category: 'App Design',
      client: 'NextGen Apps',
      description: 'iOS and Android app design with seamless user experience.',
    },
    {
      id: 5,
      thumbnail_url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Marketing Campaign',
      category: 'Marketing',
      client: 'Global Brands',
      description: 'Integrated marketing campaign across digital and print media.',
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
