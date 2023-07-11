import TeamsPage from '@/components/TeamsPage';
import TeamsSlides from '@/components/TeamsSlides';

export default function AlphaTauri({}) {
  return (
    <div>
      <TeamsPage team_name="alphatauri" />
      <TeamsSlides team_name="alphatauri" />
      <div className="mt-20 px-5 lg:px-20">
        <h3 className="text-3xl">In Profile</h3>
        <br />
        <p className="text-lg font-extralight leading-8">
          Established in 2006 as a squad in which young drivers from Red Bull’s
          prodigious talent pool could cut their F1 teeth, AlphaTauri –
          originally named Toro Rosso – were formed from the ashes of the plucky
          Minardi team. Sebastian Vettel gave validity to the approach almost
          immediately, delivering a fairy-tale win in 2008, before going on to
          enjoy world championship success with parent team Red Bull Racing.
          Today the ethos of nurturing talent still holds true, though the
          Italian squad are no longer simply a ‘B team’ but a constructor in
          their own right...
          <br />
          <br />
        </p>
        <br />
        <p className="text-xl">2022</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Momentum stalls and lose ground to the likes of Alfa Romeo and Haas,
          dropping to P9 in the final standings, with just 35 points to 2021’s
          tally of 142. Pierre Gasly takes season’s best result with a fifth
          place in Baku, but departs the squad at the end of the year.
        </p>
        <br />
        <p>2021</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Move up another place to sixth in the standings, as the ever-improving
          Pierre Gasly scores a podium in Azerbaijan and points in almost every
          race he finishes. Rookie team mate Yuki Tsunoda takes time to find his
          feet, but secures an excellent fourth in season finale.
        </p>
        <br />
        <p>2020</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          A new name brings new impetus and AlphaTauri emerge as a true midfield
          force, scoring more than a century of points, 27 of them on home soil
          at Monza, where Pierre Gasly secures his and the team’s maiden win.
        </p>
        <br />
        <p>2019</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          In their final season under the Toro Rosso name, enjoy their most
          successful campaign to date, scoring 85 points and securing sixth in
          the standings. Mid-season driver swap sees Pierre Gasly return from
          Red Bull Racing, the Frenchman responding to his ‘demotion’ with a
          spectacular maiden podium in Brazil.
        </p>
      </div>
    </div>
  );
}
