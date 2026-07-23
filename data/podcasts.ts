export type PodcastEpisode = {
  id: string
  title: string
  duration: string
  publishedAt: string
  description: string
  embedUrl?: string
  episodeUrl?: string
}

type PlatformKey = 'spotify' | 'apple' | 'youtube' | 'amazon' | 'google' | 'rss'

interface PlatformLink {
  platform: PlatformKey
  url: string
  embedUrl?: string
}

export type Podcast = {
  id: string
  title: string
  show: string
  host: string
  category: string
  provider:
    | 'Spotify'
    | 'Apple Podcasts'
    | 'Google Podcasts'
    | 'SoundCloud'
    | 'Amazon Music'
    | 'YouTube'
  duration: string
  publishedAt: string
  description: string
  cover: string
  platforms?: PlatformLink[]
  episodeUrl: string
  embedUrl?: string
  episodes?: PodcastEpisode[]
}

const platforms: PlatformLink[] = [
  {
    platform: 'spotify',
    url: 'https://open.spotify.com/',
    embedUrl: 'https://open.spotify.com/embed/episode/4rOoJ6Egrf8K2IrywzwOMk',
  },
  {
    platform: 'apple',
    url: 'https://open.spotify.com/',
    embedUrl: 'https://open.spotify.com/embed/episode/4rOoJ6Egrf8K2IrywzwOMk',
  },
  {
    platform: 'youtube',
    url: 'https://open.spotify.com/',
    embedUrl: 'https://open.spotify.com/embed/episode/4rOoJ6Egrf8K2IrywzwOMk',
  },
  {
    platform: 'amazon',
    url: 'https://open.spotify.com/',
    embedUrl: 'https://open.spotify.com/embed/episode/4rOoJ6Egrf8K2IrywzwOMk',
  },
]

export const podcasts: Podcast[] = [
  {
    id: 'gd-nba-weekly-01',
    title: 'Playoff Race Heats Up: East vs West',
    show: 'Hardwood Hours',
    host: 'Marcus Reed',
    category: 'Basketball',
    provider: 'Spotify',
    duration: '48 min',
    publishedAt: '2 days ago',
    description:
      "We break down the tightest playoff race in a decade, MVP odds shifting after last week's marquee games, and the trade deadline dominoes.",
    cover:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    platforms,
    episodeUrl: 'https://open.spotify.com/',
    embedUrl: 'https://open.spotify.com/embed/episode/4rOoJ6Egrf8K2IrywzwOMk',
    episodes: [
      {
        id: 'hh-e1',
        title: 'Playoff Race Heats Up: East vs West',
        duration: '48 min',
        publishedAt: '2 days ago',
        description:
          'Tightest playoff race in a decade, MVP odds, trade deadline dominoes.',
        embedUrl:
          'https://open.spotify.com/embed/episode/4rOoJ6Egrf8K2IrywzwOMk',
      },
      {
        id: 'hh-e2',
        title: 'Rookie Class Report Cards',
        duration: '52 min',
        publishedAt: '1 week ago',
        description: 'Grades for every lottery pick 20 games in.',
      },
      {
        id: 'hh-e3',
        title: "The West's Sleeper Contender",
        duration: '45 min',
        publishedAt: '2 weeks ago',
        description:
          'Why one under-the-radar team is quietly building a title case.',
      },
    ],
  },
  {
    id: 'gd-epl-tactics-14',
    title: "How Arsenal's Press Broke Chelsea",
    show: 'Touchline Tactics',
    host: 'Lena Ortiz',
    category: 'Soccer',
    provider: 'Apple Podcasts',
    duration: '36 min',
    publishedAt: '5 days ago',
    description:
      "A full tactical rewind of the North London derby aftermath and what Chelsea's rebuilt back line still can't solve.",
    cover:
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    episodeUrl: 'https://podcasts.apple.com/',
    platforms,
  },
  {
    id: 'gd-nfl-red-zone-22',
    title: 'Red Zone Report: Week 12 Overreactions',
    show: 'Between the Hashes',
    host: 'Devon Hayes',
    category: 'Football',
    provider: 'YouTube',
    duration: '1 hr 12 min',
    publishedAt: '1 week ago',
    description:
      'Which upsets were real, which were noise, and the rookie QB quietly rewriting the record book.',
    cover:
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    episodeUrl: 'https://youtube.com/',
    platforms,
  },
  {
    id: 'gd-f1-pitwall-09',
    title: 'Monaco Preview: Qualifying Is Everything',
    show: 'Pit Wall',
    host: 'Jordan Pike',
    category: 'Motorsport',
    provider: 'Spotify',
    duration: '41 min',
    publishedAt: '3 days ago',
    description:
      'Why one lap decides Sunday, plus a deep dive on the Ferrari upgrade package that could shake up the front row.',
    cover:
      'https://images.unsplash.com/photo-1504707748692-419802cf939d?auto=format&fit=crop&w=800&q=80',
    episodeUrl: 'https://open.spotify.com/',
    platforms,
  },
  {
    id: 'gd-boxing-cornerman-05',
    title: 'The Heavyweight Division Is Back',
    show: 'Cornerman',
    host: 'Priya Natarajan',
    category: 'Boxing',
    provider: 'Amazon Music',
    duration: '55 min',
    publishedAt: '6 days ago',
    description:
      'Undisputed talk, the next generation of contenders, and the fight everyone actually wants to see next.',
    cover:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80',
    episodeUrl: 'https://music.amazon.com/',
    platforms,
  },
  {
    id: 'gd-tennis-baseline-18',
    title: 'Alcaraz vs Sinner: The New Big 2',
    show: 'Baseline',
    host: 'Sam Whitaker',
    category: 'Tennis',
    provider: 'Google Podcasts',
    duration: '38 min',
    publishedAt: '4 days ago',
    description:
      "Two 20-somethings are running men's tennis. We map the rivalry and what the veterans can still do about it.",
    cover:
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
    episodeUrl: 'https://podcasts.google.com/',
    platforms,
  },
  {
    id: 'gd-mls-extra-time-03',
    title: "Miami's Ceiling With Messi at 37",
    show: 'Extra Time',
    host: 'Lena Ortiz',
    category: 'Soccer',
    provider: 'SoundCloud',
    duration: '44 min',
    publishedAt: '1 week ago',
    description:
      "How Inter Miami's roster construction changes when your best player needs load management.",
    cover:
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80',
    episodeUrl: 'https://soundcloud.com/',
    platforms,
  },
  {
    id: 'gd-nba-hardwood-02',
    title: 'Rookie Class Report Cards',
    show: 'Hardwood Hours',
    host: 'Marcus Reed',
    category: 'Basketball',
    provider: 'Spotify',
    duration: '52 min',
    publishedAt: '1 week ago',
    description:
      'Grades for every lottery pick 20 games in, and the second-rounder outperforming his draft slot.',
    cover:
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80',
    episodeUrl: 'https://open.spotify.com/',
    platforms,
  },
]

export async function getPodcasts(): Promise<Podcast[]> {
  const useApi = import.meta.env.VITE_USE_API === 'true'
  const hostname = import.meta.env.VITE_API_HOSTNAME as string | undefined

  if (!useApi || !hostname) return podcasts

  try {
    const res = await fetch(`${hostname.replace(/\/$/, '')}/podcasts`)
    if (!res.ok) throw new Error(`Failed to fetch podcasts: ${res.status}`)
    return (await res.json()) as Podcast[]
  } catch (err) {
    console.error('[getPodcasts] API fetch failed, using fallback data', err)
    return podcasts
  }
}
