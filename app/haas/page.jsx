import TeamsPage from '@/components/TeamsPage';
import TeamsSlides from '@/components/TeamsSlides';

export default function Haas({}) {
  return (
    <div>
      <TeamsPage team_name="haas" />
      <TeamsSlides team_name="haas" />
      <div className="mt-20 px-5 lg:px-20">
        <h3 className="text-3xl">In Profile</h3>
        <br />
        <p className="text-lg font-extralight leading-8">
          The youngest team on the grid, Haas made their highly impressive debut
          in 2016, and in the process became the first all-American-led F1 squad
          in three decades. Founded by industrialist Gene Haas, they are based
          in the United States on the same Kannapolis, North Carolina facility
          as his championship-winning NASCAR Sprint Cup Series team,
          Stewart-Haas Racing. The Ferrari-powered team, led by the charismatic
          Guenther Steiner, also have a UK factory in Banbury…
          <br />
          <br />
        </p>
        <br />
        <p className="text-xl">2022</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Return of former driver Kevin Magnussen brings a stunning P5 result at
          Bahrain season-opener and a maiden pole position at a rain-hit
          Interlagos in November. Score a much-improved 37 points in total,
          lifting them to P8 in the final standings.
        </p>
        <br />
        <p>2021</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          End the year without a point after opting to focus on 2022 car rather
          than in-season development of 2021 machine. Mick Schumacher dominates
          team mate Nikita Mazepin in all-new rookie driver line-up, with a best
          result of 12th place in Hungary.
        </p>
        <br />
        <p>2020</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Unable to halt their downward spiral, drop to P9 overall in the table,
          scoring just three points in the final year of the team’s
          Grosjean-Magnussen era. Season ends in dramatic fashion, as Romain
          Grosjean miraculously walks away from fiery, high-speed crash in
          Bahrain.
        </p>
        <br />
        <p>2019</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          The Haas fairy tale finally hits a bump in the road, as they struggle
          to get a handle on their recalcitrant VF-19 machine. Fall to eighth in
          the table, with Romain Grosjean and Kevin Magnussen amassing a meagre
          28 points between them.
        </p>
        <br />
        <p>2018</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Rapid year-on-year progress continues with a move up to fifth in the
          final standings – and it could have been fourth were it not for
          unnecessary errors. Botched pit stops for both cars in Australia rob
          them of their best-ever race result, while a fuel infringement and an
          illegal floor lead to disqualifications in the US and Italy
          respectively. Highly promising nonetheless.
        </p>
        <br />
        <p>2017</p>
        <br />
        <p className="text-lg font-extralight leading-8">
          Romain Grosjean pairs up with a new team mate in the form of feisty
          Dane Kevin Magnussen and Haas prove that their maiden campaign was no
          flash in the pan, scoring 47 points – 18 more than in 2016 – to retain
          eighth place in the standings.
        </p>
      </div>
    </div>
  );
}
