import TeamsPage from '@/components/TeamsPage';
import TeamsSlides from '@/components/TeamsSlides';

export default function Ferrari({}) {
  return (
    <div>
      <TeamsPage team_name="ferrari" />
      <TeamsSlides team_name="ferrari" />
      <div className="mt-20 px-5 lg:px-20">
        <h3 className="text-3xl">In Profile</h3>
        <br />
        <p className="text-lg font-extralight leading-8">
          For many, Ferrari and Formula 1 racing have become inseparable. The
          only team to have competed in every season since the world
          championship began, the Prancing Horse has grown from the humble dream
          of founder Enzo Ferrari to become one of the most iconic and
          recognised brands in the world. Success came quickly through the likes
          of Alberto Ascari and John Surtees, and continued – in amongst leaner
          times – with Niki Lauda in the 1970s and then Michael Schumacher in
          the 2000s, when Ferrari claimed a then unprecedented five consecutive
          title doubles, securing their status as the most successful and
          decorated team in F1 history...
          <br />
          <br />
        </p>
        <br />
        <p className="text-xl">2022</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Head title race early season, with Charles Leclerc winning two of the
          three opening races. However, mix of driver error, reliability issues
          and strategy missteps ultimately consign them to distant runners-up
          spot behind Red Bull. Carlos Sainz scores first career win, at
          Silverstone.
        </p>
        <br />
        <p>2021</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Still no sign of a title challenge, but strong year-on-year
          improvement lifts them clear of McLaren for P3 overall, with more than
          double their 2020 points tally. New arrival Carlos Sainz outscores
          Charles Leclerc, the Spaniard taking four podiums to his team mate’s
          one.
        </p>
        <br />
        <p>2020</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Sink to their worst performance in four decades, failing to win a
          race, scoring just three podiums and falling to sixth in the
          standings. Sebastian Vettel is told early on that his contract will
          not be renewed for 2021, and it’s Charles Leclerc who secures 98 of
          the team’s 131 points.
        </p>
        <br />
        <p>2019</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          The pattern of recent years continues, as they fail to win a race
          until August’s Belgian GP, despite being clear pre-season favourites
          and often having the quickest car. A tense (and at times expensive)
          rivalry sees newcomer Charles Leclerc out-score veteran team mate
          Sebastian Vettel, with two victories to the four-time champion’s one.
        </p>
      </div>
    </div>
  );
}
