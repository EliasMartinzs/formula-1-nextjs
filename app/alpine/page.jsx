import TeamsPage from '@/components/TeamsPage';
import TeamsSlides from '@/components/TeamsSlides';

export default function Alpine({}) {
  return (
    <div>
      <TeamsPage team_name="alpine" />
      <TeamsSlides team_name="alpine" />
      <div className="mt-20 px-5 lg:px-20">
        <h3 className="text-3xl">In Profile</h3>
        <br />
        <p className="text-lg font-extralight leading-8">
          Alpine may be a relatively new name to Formula 1, but Renault’s famous
          sportscar arm has plenty of motorsport heritage. The 2021 rebrand of
          the team marked the next step in Renault’s F1 revival, begun in 2016
          with the takeover of the then-Lotus squad. Already race winners in
          their new guise, regular podiums and a tilt at the title must be their
          next target…
          <br />
          <br />
        </p>
        <br />
        <p className="text-xl">2022</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          No podiums, but outperform arch rivals McLaren to rise to P4 in the
          final standings. Fernando Alonso, frustrated by reliability woes,
          departs at season's end for Aston Martin, to be replaced in 2023 by
          Pierre Gasly, forming all-French driver line-up with Esteban Ocon.
        </p>
        <br />
        <p>2021</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          A maiden F1 win for the Alpine name comes in Hungary courtesy of
          Esteban Ocon, aided by a staunch defence against a charging Lewis
          Hamilton from team mate Fernando Alonso, who also finishes on the
          podium in Qatar.
        </p>
        <br />
        <p>2020</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Three podium finishes – the first since Renault’s works return –
          signal a significant step forward ahead of the team’s Alpine rebrand,
          and Fernando Alonso’s comeback, for 2021.
        </p>
        <br />
        <p>2019</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Progress up the championship order is halted, ironically by new
          Renault customers McLaren, who demote them to fifth in the standings,
          despite Daniel Ricciardo securing their best result to date with P4 in
          Italy.
        </p>
      </div>
    </div>
  );
}
