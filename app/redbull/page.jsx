import TeamsPage from '@/components/TeamsPage';
import TeamsSlides from '@/components/TeamsSlides';

export default function Redbull({}) {
  return (
    <div>
      <TeamsPage team_name="redbull" />
      <TeamsSlides team_name="redbull" />
      <div className="mt-20 px-5 lg:px-20">
        <h3 className="text-3xl">In Profile</h3>
        <br />
        <p className="text-lg font-extralight leading-8">
          Red Bull were no strangers to F1 - as sponsors - prior to formally
          entering as a works team in 2004. Nonetheless, the scale of their
          success over the following decade was staggering. After a first podium
          in 2006, the team hit their stride in 2009, claiming six victories and
          second in the constructors' standings. Over the next four seasons they
          were a tour de force, claiming consecutive title doubles between 2010
          and 2013, with Sebastian Vettel emerging as the sport's youngest
          quadruple champion. Now they are recapturing that glory with an
          equally exciting talent – one named Max Verstappen…
          <br />
          <br />
        </p>
        <br />
        <p className="text-xl">2022</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          After seeing off early Ferrari challenge, dominate to take first title
          double since 2013, with Max Verstappen securing a record 15 wins to
          retain drivers’ crown. Only cloud is a $7 million fine and a reduction
          in future wind-tunnel testing for exceeding the 2021 budget cap.
        </p>
        <br />
        <p>2021</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Secure their first drivers’ championship since 2013, winning 11 of 22
          races, and push Mercedes all the way in an intense – and, at times,
          bitter – constructors’ fight. New team mate Sergio Perez provides
          invaluable support to Max Verstappen’s successful title bid. season.
        </p>
        <br />
        <p>2020</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          A lonely second in the standings, consistently clear of the midfield
          but rarely able to match the pace of champions Mercedes. Max
          Verstappen stars – with two wins and another nine podiums – but Alex
          Albon is dropped for 2021 after just two top-three appearances.
        </p>
        <br />
        <p>2019</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Transition from Renault to Honda power is remarkably smooth, and Max
          Verstappen’s four wins ensure an almost identical points tally to
          2018. Drop Pierre Gasly mid-year in favour of rookie Alex Albon, and
          late-season progress raises hopes of a genuine title challenge in
          2020.
        </p>
      </div>
    </div>
  );
}
