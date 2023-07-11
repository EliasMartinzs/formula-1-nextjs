import TeamsPage from '@/components/TeamsPage';
import TeamsSlides from '@/components/TeamsSlides';

export default function Willians({}) {
  return (
    <div>
      <TeamsPage team_name="williams" />
      <TeamsSlides team_name="williams" />
      <div className="mt-20 px-5 lg:px-20">
        <h3 className="text-3xl">In Profile</h3>
        <br />
        <p className="text-lg font-extralight leading-8">
          Driven on by the brilliance and passion of the late Sir Frank
          Williams, Williams grew from humble beginnings to become a Formula 1
          behemoth, unrivalled by all except Ferrari and McLaren in terms of
          enduring success. Over the past four decades the team has racked up
          Grand Prix wins and championship glory, and in the process nurtured
          some of the greatest talents in the sport, both in and out the
          cockpit. And, following the Williams family's decision to step aside
          after the 2020 sale of the team to Dorilton Capital, a new era has
          begun...
          <br />
          <br />
        </p>
        <br />
        <p className="text-xl">2022</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Despite the FW44 showing promising pace at times – particularly in the
          hands of Alex Albon, who qualifies an outstanding ninth at Spa – score
          just eight points across the season, leaving the team 10th and last in
          the final standings.
        </p>
        <br />
        <p>2021</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Experience something of a resurgence, scoring a podium in
          rain-curtailed Belgian Grand Prix courtesy of regular Q3 qualifying
          star George Russell. Improve to eighth overall in a campaign sadly
          marred by the death of founder Sir Frank Williams in November.
        </p>
        <br />
        <p>2020</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          End a season without a point for the first time in their history, but
          the team's future is assured as new owners take over from the Williams
          family, and closer technical ties to engine suppliers Mercedes are
          agreed for 2021 and beyond.
        </p>
        <br />
        <p>2019</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          A single point from 21 races heralds the worst campaign in the team’s
          history, despite the addition of former Grand Prix winner Robert
          Kubica. On the flip side, rookie George Russell marks himself out as a
          star of the future, out-qualifying his experienced team mate at every
          round.
        </p>
      </div>
    </div>
  );
}
