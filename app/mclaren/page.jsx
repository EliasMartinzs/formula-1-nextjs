import TeamsPage from '@/components/TeamsPage';
import TeamsSlides from '@/components/TeamsSlides';

export default function McLaren({}) {
  return (
    <div>
      <TeamsPage team_name="mclaren" />
      <TeamsSlides team_name="mclaren" />
      <div className="mt-20 px-5 lg:px-20">
        <h3 className="text-3xl">In Profile</h3>
        <br />
        <p className="text-lg font-extralight leading-8">
          Since entering the sport in 1966 under the guidance and restless
          endeavour of eponymous founder Bruce, McLaren's success has been
          nothing short of breathtaking. Five glittering decades have yielded
          countless victories, pole positions and podiums, not to mention eight
          constructors' championships. What's more, some of the sport's greatest
          drivers made their names with the team, including Emerson Fittipaldi,
          Ayrton Senna, Mika Hakkinen and Lewis Hamilton...
          <br />
          <br />
        </p>
        <br />
        <p className="text-xl">2022</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Drop to P5 in the standings behind Alpine, with Lando Norris scoring
          their sole podium at Imola – and 122 of their 159 points. Daniel
          Ricciardo fails to get to grips with the Mercedes-powered MCL36 and
          departs the team at the end of season.
        </p>
        <br />
        <p>2021</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Record their first win since 2012, with Daniel Ricciardo and Lando
          Norris taking the year’s only one-two result by any team at Monza.
          Nevertheless, drop to fourth overall after coming off worse in
          season-long duel for P3 with Ferrari.
        </p>
        <br />
        <p>2020</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Quick and consistent, beat their upper-midfield rivals to P3 in the
          standings as Ferrari falter, with Carlos Sainz and Lando Norris both
          scoring podium finishes. Agree deal to use Mercedes power from 2021
        </p>
        <br />
        <p>2019</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          With the Renault partnership starting to gel, and rookie star Lando
          Norris pushing the experienced Carlos Sainz hard, re-establish
          themselves as clear ‘best of the rest’ behind the big three teams.
          Third place in Brazil marks their first podium in five years.
        </p>
      </div>
    </div>
  );
}
