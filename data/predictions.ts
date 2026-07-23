// export type Prediction = {
//   id: string
//   league: string
//   homeTeam: string
//   awayTeam: string
//   kickoff: string
//   predictedScore: string
//   finalScore?: string
//   confidence: number
//   analyst: string
//   insight: string
// }

// export const predictions: Prediction[] = [
//   {
//     id: 'nba-hawks-celtics',
//     league: 'NBA',
//     homeTeam: 'Hawks',
//     awayTeam: 'Celtics',
//     kickoff: 'Tonight · 8:00 PM ET',
//     predictedScore: '112 – 108',
//     confidence: 72,
//     analyst: 'Marcus Reed',
//     insight:
//       "Hawks' pace at home has been unmatched; Celtics on the second night of a back-to-back.",
//   },
//   {
//     id: 'epl-arsenal-chelsea',
//     league: 'EPL',
//     homeTeam: 'Arsenal',
//     awayTeam: 'Chelsea',
//     kickoff: 'Saturday · 12:30 PM ET',
//     predictedScore: '2 – 1',
//     confidence: 64,
//     analyst: 'Lena Ortiz',
//     insight:
//       "Arsenal's pressing structure should expose Chelsea's rebuilt back line.",
//   },
//   {
//     id: 'f1-monaco',
//     league: 'F1',
//     homeTeam: 'Verstappen',
//     awayTeam: 'Field',
//     kickoff: 'Sunday · 9:00 AM ET',
//     predictedScore: 'P1',
//     confidence: 81,
//     analyst: 'Jordan Pike',
//     insight:
//       "Monaco rewards qualifying. Red Bull's one-lap pace is still the benchmark.",
//   },
//   {
//     id: 'ufc-302',
//     league: 'UFC',
//     homeTeam: 'Makhachev',
//     awayTeam: 'Poirier',
//     kickoff: 'Saturday · 10:00 PM ET',
//     predictedScore: 'Sub R3',
//     confidence: 68,
//     analyst: 'Devon Hayes',
//     insight:
//       'Grappling differential is decisive; expect a back-take in the third.',
//   },
//   {
//     id: 'mls-lafc-miami',
//     league: 'MLS',
//     homeTeam: 'LAFC',
//     awayTeam: 'Inter Miami',
//     kickoff: 'Sunday · 7:00 PM ET',
//     predictedScore: '2 – 2',
//     confidence: 55,
//     analyst: 'Sam Whitaker',
//     insight:
//       'Both attacks in form; both back lines leaking. A draw feels priced correctly.',
//   },
//   {
//     id: 'atp-paris',
//     league: 'ATP',
//     homeTeam: 'Alcaraz',
//     awayTeam: 'Sinner',
//     kickoff: 'Sunday · 11:00 AM ET',
//     predictedScore: '3 – 2 sets',
//     confidence: 58,
//     analyst: 'Priya Natarajan',
//     insight: "Five-set classic incoming. Alcaraz's net game is the tiebreaker.",
//   },
// ]

// export async function getPredictions(): Promise<Prediction[]> {
//   const useApi = import.meta.env.VITE_USE_API === 'true'
//   const hostname = import.meta.env.VITE_API_HOSTNAME as string | undefined

//   if (!useApi || !hostname) return predictions

//   try {
//     const res = await fetch(`${hostname.replace(/\/$/, '')}/predictions`)
//     if (!res.ok) throw new Error(`Failed to fetch predictions: ${res.status}`)
//     const data = (await res.json()) as Prediction[]
//     return data
//   } catch (err) {
//     console.error('[getPredictions] API fetch failed, using fallback data', err)
//     return predictions
//   }
// }

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Analyst {
  id: string
  name: string
  accuracy: number
  predictions: number
  specialty: string
  initials: string
  color: string
}

export interface Prediction {
  id: string
  league: string
  leagueBadge: string
  leagueColor: string
  homeTeam: string
  awayTeam: string
  kickoff: string
  predictedHome: number | string
  predictedAway: number | string
  finalHome?: number | string
  finalAway?: number | string
  confidence: number
  analystId: string
  insight: string
  fullInsight: string
  sport: string
  status: 'upcoming' | 'live' | 'completed'
  correct?: boolean | null
}

const LEAGUES = [
  'All Leagues',
  'Premier League',
  'La Liga',
  'Serie A',
  'Bundesliga',
  'Champions League',
  'NBA',
  'FKF Premier League',
  'CAF Champions League',
]

// ─── Data ─────────────────────────────────────────────────────────────────────

export const analysts: Analyst[] = [
  {
    id: 'sarah',
    name: 'Sarah Kim',
    accuracy: 84,
    predictions: 312,
    specialty: 'Premier League',
    initials: 'SK',
    color: '#DC2626',
  },
  {
    id: 'david',
    name: 'David Muriuki',
    accuracy: 81,
    predictions: 278,
    specialty: 'African Football',
    initials: 'DM',
    color: '#F59E0B',
  },
  {
    id: 'james',
    name: 'James Walker',
    accuracy: 79,
    predictions: 245,
    specialty: 'Champions League',
    initials: 'JW',
    color: '#6366F1',
  },
  {
    id: 'elena',
    name: 'Elena Rodriguez',
    accuracy: 77,
    predictions: 198,
    specialty: 'La Liga / Serie A',
    initials: 'ER',
    color: '#10B981',
  },
  {
    id: 'marcus',
    name: 'Marcus Johnson',
    accuracy: 75,
    predictions: 167,
    specialty: 'NBA / Basketball',
    initials: 'MJ',
    color: '#8B5CF6',
  },
]

export const predictions: Prediction[] = [
  {
    id: 'p1',
    league: 'Premier League',
    leagueBadge: 'PL',
    leagueColor: '#3D0057',
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    kickoff: 'Today, 20:00 GMT',
    predictedHome: 2,
    predictedAway: 1,
    confidence: 84,
    analystId: 'james',
    sport: 'Football',
    status: 'upcoming',
    insight:
      "Arsenal's recent home form gives them the edge over a shaky Chelsea side.",
    fullInsight:
      "Arsenal have won 7 of their last 8 home games and are in sublime attacking form. Chelsea's defensive record away from Stamford Bridge has been poor this season, conceding in 9 consecutive away fixtures. The Gunners' press should trouble Chelsea's build-up play significantly, and with Saka and Martinelli both in form, we back Arsenal to secure a narrow win.",
  },
  {
    id: 'p2',
    league: 'La Liga',
    leagueBadge: 'LL',
    leagueColor: '#FF4B44',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    kickoff: 'Sat, 21 Jun, 21:00 CET',
    predictedHome: 1,
    predictedAway: 1,
    confidence: 76,
    analystId: 'sarah',
    sport: 'Football',
    status: 'upcoming',
    insight:
      'El Clásico historically tight — both sides too evenly matched for a decisive winner.',
    fullInsight:
      "The Clásico is always unpredictable, but current form suggests both clubs are evenly matched. Real Madrid's defensive solidity at the Bernabéu is offset by Barcelona's relentless pressing under their new system. We expect a high-intensity first half that settles into a tactical draw, with both teams protecting their league position ahead of European commitments.",
  },
  {
    id: 'p3',
    league: 'Premier League',
    leagueBadge: 'PL',
    leagueColor: '#3D0057',
    homeTeam: 'Manchester City',
    awayTeam: 'Tottenham',
    kickoff: 'Sun, 22 Jun, 16:30 GMT',
    predictedHome: 3,
    predictedAway: 0,
    confidence: 88,
    analystId: 'david',
    sport: 'Football',
    status: 'upcoming',
    insight:
      "City's dominant home record against Spurs makes this their clearest win of the week.",
    fullInsight:
      "Manchester City have won 11 of their last 12 home games against Tottenham, often by comfortable margins. Spurs' injury crisis in midfield leaves them vulnerable against City's relentless passing game. Haaland is in frightening form and we back City to dispatch them convincingly, possibly before the hour mark.",
  },
  {
    id: 'p4',
    league: 'Bundesliga',
    leagueBadge: 'BL',
    leagueColor: '#D20515',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Dortmund',
    kickoff: 'Sat, 21 Jun, 18:30 CET',
    predictedHome: 2,
    predictedAway: 1,
    confidence: 82,
    analystId: 'elena',
    sport: 'Football',
    status: 'live',
    insight:
      "Der Klassiker: Bayern's home advantage should be decisive despite Dortmund's recent revival.",
    fullInsight:
      "Bayern Munich remain the Bundesliga's dominant force at the Allianz Arena. However, Dortmund have shown genuine improvement under their new coaching setup, pressing high and creating chances at pace. We expect a competitive game that Bayern ultimately win, courtesy of their superior squad depth in the second half.",
  },
  {
    id: 'p5',
    league: 'Serie A',
    leagueBadge: 'SA',
    leagueColor: '#024494',
    homeTeam: 'Juventus',
    awayTeam: 'Inter Milan',
    kickoff: 'Sun, 22 Jun, 20:45 CET',
    predictedHome: 1,
    predictedAway: 1,
    confidence: 71,
    analystId: 'marcus',
    sport: 'Football',
    status: 'upcoming',
    insight:
      "Derby d'Italia rarely produces many goals — a cagey draw is the likeliest outcome.",
    fullInsight:
      'Both Juventus and Inter approach this fixture with defensive discipline as the top priority. The tactical battle between their respective managers typically produces a low-scoring, intense game. Neither side can afford to lose given the table standings, so both will prioritise solidity. A 1-1 draw feels like the natural equilibrium.',
  },
  {
    id: 'p6',
    league: 'Champions League',
    leagueBadge: 'UCL',
    leagueColor: '#001D6E',
    homeTeam: 'Real Madrid',
    awayTeam: 'Man City',
    kickoff: 'Wed, 25 Jun, 21:00 CET',
    predictedHome: 2,
    predictedAway: 1,
    confidence: 78,
    analystId: 'james',
    sport: 'Football',
    status: 'upcoming',
    insight:
      'Bernabéu atmosphere could be the decisive factor in this heavyweight UCL clash.',
    fullInsight:
      "The Bernabéu has proven to be a fortress in European knockout football, and Real Madrid's record in these high-stakes UCL matches is remarkable. Manchester City have the quality to trouble them, but Madrid's experience in late-game scenarios — and the crowd factor — gives them a narrow edge. Expect a classic European night with real drama.",
  },
  {
    id: 'p7',
    league: 'NBA',
    leagueBadge: 'NBA',
    leagueColor: '#C9082A',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Miami Heat',
    kickoff: 'Fri, 20 Jun, 20:30 EST',
    predictedHome: 112,
    predictedAway: 108,
    confidence: 79,
    analystId: 'marcus',
    sport: 'Basketball',
    status: 'live',
    insight:
      "Celtics' home court dominance should edge out the Heat in a close Eastern Conference battle.",
    fullInsight:
      "Boston have been exceptional at TD Garden this season, and their three-point shooting has been the defining factor in close games. Miami's defensive scheme will slow the game down, but the Celtics' depth off the bench should be the difference in the fourth quarter. Tatum is expected to go for 30+ in a game that goes down to the wire.",
  },
  {
    id: 'p8',
    league: 'FKF Premier League',
    leagueBadge: 'FKF',
    leagueColor: '#006400',
    homeTeam: 'Gor Mahia',
    awayTeam: 'AFC Leopards',
    kickoff: 'Sat, 21 Jun, 15:00 EAT',
    predictedHome: 1,
    predictedAway: 0,
    confidence: 71,
    analystId: 'david',
    sport: 'Football',
    status: 'upcoming',
    insight:
      "The Mashemeji Derby is K'Ogi Were's fortress — Gor Mahia's crowd pressure should tell.",
    fullInsight:
      "The Mashemeji Derby is one of Africa's great football rivalries. Gor Mahia's home record this season has been excellent, and their physical midfield tends to dominate Ingwe in this fixture. AFC Leopards have been inconsistent away from home, and we back Gor Mahia to grind out a narrow but deserved victory.",
  },
  {
    id: 'p9',
    league: 'Premier League',
    leagueBadge: 'PL',
    leagueColor: '#3D0057',
    homeTeam: 'Liverpool',
    awayTeam: 'Man United',
    kickoff: 'Sun, 22 Jun, 14:00 GMT',
    predictedHome: 2,
    predictedAway: 0,
    confidence: 83,
    analystId: 'sarah',
    sport: 'Football',
    status: 'upcoming',
    insight:
      "Liverpool's relentless pressing game should overwhelm a rebuilding United side.",
    fullInsight:
      "Liverpool have been dominant in this fixture in recent years, and their current form suggests another comfortable home win. United are in transition, with a squad that lacks the leadership and defensive organisation to contain Liverpool's front three. We expect the Reds to control the game from the first whistle.",
  },
  {
    id: 'p10',
    league: 'La Liga',
    leagueBadge: 'LL',
    leagueColor: '#FF4B44',
    homeTeam: 'Atletico Madrid',
    awayTeam: 'Sevilla',
    kickoff: 'Fri, 20 Jun, 21:00 CET',
    predictedHome: 1,
    predictedAway: 0,
    confidence: 74,
    analystId: 'elena',
    sport: 'Football',
    status: 'upcoming',
    insight:
      "Atletico's defensive solidity at home makes them hard to beat, especially against mid-table Sevilla.",
    fullInsight:
      "Diego Simeone's Atletico Madrid have built their identity around defensive resilience and set-piece effectiveness. Sevilla, while improved this season, typically struggle to break down well-organised defences. We back Atletico to grind out a 1-0 win through a late set-piece or counter-attack — exactly their trademark result.",
  },
  {
    id: 'p11',
    league: 'Serie A',
    leagueBadge: 'SA',
    leagueColor: '#024494',
    homeTeam: 'AC Milan',
    awayTeam: 'Napoli',
    kickoff: 'Mon, 23 Jun, 20:45 CET',
    predictedHome: 2,
    predictedAway: 1,
    confidence: 77,
    analystId: 'marcus',
    sport: 'Football',
    status: 'upcoming',
    insight:
      "San Siro's electric atmosphere should spur Milan to a narrow win over the visiting Partenopei.",
    fullInsight:
      "AC Milan have been rejuvenated at San Siro this season, and their attacking duo has been among Serie A's most potent. Napoli are dangerous on the counter but have been inconsistent in away fixtures since losing their title-winning cohesion. A 2-1 home win for Milan feels right — tight but ultimately decided by their greater home threat.",
  },
  {
    id: 'p12',
    league: 'CAF Champions League',
    leagueBadge: 'CAF',
    leagueColor: '#E67E22',
    homeTeam: 'Al Ahly',
    awayTeam: 'Wydad Casablanca',
    kickoff: 'Tue, 24 Jun, 19:00 EAT',
    predictedHome: 2,
    predictedAway: 0,
    confidence: 80,
    analystId: 'david',
    sport: 'Football',
    status: 'upcoming',
    insight:
      "Al Ahly's Cairo fortress rarely yields results for opposition in African competition.",
    fullInsight:
      "Al Ahly are the continent's most decorated club and have a near-perfect home record in CAF competition. Wydad Casablanca are quality opponents, but the Cairo atmosphere and Al Ahly's superior squad depth — built for exactly these occasions — should see the Egyptian giants progress comfortably.",
  },
]

export const completedPredictions: Prediction[] = [
  {
    id: 'c1',
    league: 'Premier League',
    leagueBadge: 'PL',
    leagueColor: '#3D0057',
    homeTeam: 'Manchester City',
    awayTeam: 'Liverpool',
    kickoff: 'Completed',
    predictedHome: 2,
    predictedAway: 1,
    finalHome: 3,
    finalAway: 1,
    confidence: 82,
    analystId: 'sarah',
    sport: 'Football',
    status: 'completed',
    correct: null,
    insight: "City's dominance was even more comprehensive than predicted.",
    fullInsight: '',
  },
  {
    id: 'c2',
    league: 'La Liga',
    leagueBadge: 'LL',
    leagueColor: '#FF4B44',
    homeTeam: 'Barcelona',
    awayTeam: 'Atletico Madrid',
    kickoff: 'Completed',
    predictedHome: 2,
    predictedAway: 0,
    finalHome: 2,
    finalAway: 0,
    confidence: 87,
    analystId: 'elena',
    sport: 'Football',
    status: 'completed',
    correct: true,
    insight: 'Exact score prediction — Barcelona dominated as expected.',
    fullInsight: '',
  },
  {
    id: 'c3',
    league: 'Premier League',
    leagueBadge: 'PL',
    leagueColor: '#3D0057',
    homeTeam: 'Arsenal',
    awayTeam: 'Man United',
    kickoff: 'Completed',
    predictedHome: 1,
    predictedAway: 0,
    finalHome: 1,
    finalAway: 0,
    confidence: 80,
    analystId: 'james',
    sport: 'Football',
    status: 'completed',
    correct: true,
    insight:
      "Arsenal's defensive discipline secured the predicted clean sheet.",
    fullInsight: '',
  },
  {
    id: 'c4',
    league: 'Bundesliga',
    leagueBadge: 'BL',
    leagueColor: '#D20515',
    homeTeam: 'Bayern Munich',
    awayTeam: 'RB Leipzig',
    kickoff: 'Completed',
    predictedHome: 2,
    predictedAway: 1,
    finalHome: 3,
    finalAway: 2,
    confidence: 73,
    analystId: 'elena',
    sport: 'Football',
    status: 'completed',
    correct: null,
    insight: 'Both teams exceeded expectations in a thrilling encounter.',
    fullInsight: '',
  },
  {
    id: 'c5',
    league: 'Serie A',
    leagueBadge: 'SA',
    leagueColor: '#024494',
    homeTeam: 'Juventus',
    awayTeam: 'AC Milan',
    kickoff: 'Completed',
    predictedHome: 1,
    predictedAway: 1,
    finalHome: 1,
    finalAway: 2,
    confidence: 69,
    analystId: 'marcus',
    sport: 'Football',
    status: 'completed',
    correct: false,
    insight: "Milan's late winner overturned our draw prediction.",
    fullInsight: '',
  },
  {
    id: 'c6',
    league: 'NBA',
    leagueBadge: 'NBA',
    leagueColor: '#C9082A',
    homeTeam: 'LA Lakers',
    awayTeam: 'Golden State',
    kickoff: 'Completed',
    predictedHome: 115,
    predictedAway: 110,
    finalHome: 118,
    finalAway: 112,
    confidence: 76,
    analystId: 'marcus',
    sport: 'Basketball',
    status: 'completed',
    correct: true,
    insight: 'Lakers dominated in the fourth quarter just as predicted.',
    fullInsight: '',
  },
  {
    id: 'c7',
    league: 'CAF Champions League',
    leagueBadge: 'CAF',
    leagueColor: '#E67E22',
    homeTeam: 'Simba SC',
    awayTeam: 'TP Mazembe',
    kickoff: 'Completed',
    predictedHome: 1,
    predictedAway: 0,
    finalHome: 2,
    finalAway: 1,
    confidence: 65,
    analystId: 'david',
    sport: 'Football',
    status: 'completed',
    correct: null,
    insight: 'Simba won but the margin was tighter and scoreline different.',
    fullInsight: '',
  },
  {
    id: 'c8',
    league: 'Serie A',
    leagueBadge: 'SA',
    leagueColor: '#024494',
    homeTeam: 'Napoli',
    awayTeam: 'Roma',
    kickoff: 'Completed',
    predictedHome: 2,
    predictedAway: 0,
    finalHome: 2,
    finalAway: 0,
    confidence: 81,
    analystId: 'sarah',
    sport: 'Football',
    status: 'completed',
    correct: true,
    insight: "Napoli's perfect home performance — another exact prediction.",
    fullInsight: '',
  },
]

// const relatedArticles = articles.slice(0, 6)
