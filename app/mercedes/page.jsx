import TeamsPage from '@/components/TeamsPage';
import TeamsSlides from '@/components/TeamsSlides';

export default function Mercedes({}) {
  return (
    <div>
      <TeamsPage team_name="mercedes" />
      <TeamsSlides team_name="mercedes" />
      <div className="mt-20 px-5 lg:px-20">
        <h3 className="text-3xl">In Profile</h3>
        <br />
        <p className="text-lg font-extralight leading-8">
          Mercedes’ modern F1 revival started with the creation of a works squad
          for 2010 - the platform for a meteoric rise up the Grand Prix order.
          The team generated huge excitement from the off with the sensational
          return of Michael Schumacher, but headlines soon followed on track:
          three podiums in their debut season, all via Nico Rosberg - who then
          claimed a breakthrough pole/victory double at China in 2012. The
          following season he was paired with Lewis Hamilton, the duo going on
          to stage some epic title battles as the Silver Arrows swept all before
          them to become one of the most dominant forces of the modern F1 era.
          And with Hamilton now partnered by the up-and-coming George Russell,
          Mercedes remain very much the team that everyone wants to beat…
          <br />
          <br />
        </p>
        <br />
        <p className="text-xl">2022</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Radical rule changes shake up the order and Mercedes’ W13 lands wide
          of the mark, leaving them ‘best of the rest’ behind Red Bull and
          Ferrari. Newcomer George Russell takes their sole victory – and
          outscores Lewis Hamilton, who goes winless for the first time in his
          F1 career.
        </p>
        <br />
        <p>2021</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Face the biggest challenge yet to their dominance of the turbo-hybrid.
          Lewis Hamilton loses his drivers’ crown to Red Bull’s Max Verstappen,
          despite winning eight races, as the team just about hang on to the
          constructors’ title, which they retain for an eighth successive
          season.
        </p>
        <br />
        <p>2020</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Just when you think they can’t get any better, Mercedes – and in
          particular Lewis Hamilton – step it up another gear. The reigning
          champion wins 11 races and smashes records galore en route to a
          Schumacher-equalling seventh drivers' title, despite missing a round
          with Covid-19. Add two wins for Valtteri Bottas and it’s another
          dominant double crown for the Silver Arrows.
        </p>
        <br />
        <p>2019</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Start the season with an unprecedented five one-two victories, and
          follow it up with a further 10 wins, thus securing their sixth title
          double on the bounce. All-round teamwork, rather than outright pace,
          is often the key to success. Valtteri Bottas ups his game, meaning
          Lewis Hamilton has to work hard to secure his sixth drivers’ crown,
          bringing the Brit tantalising close to matching Michael Schumacher’s
          all-time record.
        </p>
      </div>
    </div>
  );
}
