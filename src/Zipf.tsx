import React, { Component } from "react";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, LogarithmicScale, PointElement, Title, Tooltip} from "chart.js";
import {Bar, Scatter} from "react-chartjs-2";

import {CORPUS_STATS, getTotalRoots, sortedEntries} from "./TextReader";
import {Link} from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Occurrences per root',
    },
  },
} as const;

type Props = {
}

type State = {
}

export default class Zipf extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const sorted_entries = sortedEntries(CORPUS_STATS.frequencies);
    const total_roots = getTotalRoots(CORPUS_STATS.frequencies);

    function rootsForCoverage(percent: number): number {
      const target_cov = total_roots*percent;
      let cumulative_cov = 0;

      for (let i = 0; i < sorted_entries.length; i++) {
        cumulative_cov += sorted_entries[i][1];
        if (cumulative_cov >= target_cov) {
          return i+1;
        }
      }

      return -1;
    }

    return (
      <>
        <h1>Frequency statistics</h1>

        <p>
          The total number of occurrences of Jaobon roots across the entire{' '}
          <Link to={"/texts"}>corpus on this site</Link>
          , sorted in frequency order, are as follows:
        </p>

        <Bar
          data={{
            labels: sorted_entries.map(e => e[0].CJK),
            datasets: [
              {
                label: "Roots",
                data: sorted_entries.map(e => e[1]),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
            ],
          }}
          options={options}
        />

        <p>
          Log-scaling this data, it can be seen that it does not quite follow a{' '}
          <a href="https://en.wikipedia.org/wiki/Zipf%27s_law" target="_blank">Zipf distribution</a>:
        </p>

        <Scatter
          data={{
            labels: sorted_entries.map(e => e[0].CJK),
            datasets: [
              {
                label: "Roots",
                data: sorted_entries.map((e, i) => ({
                  x: i + 1,
                  y: e[1],
                })),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              }
            ],
          }}
          options={{
            ...options,
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Frequency rank",
                },
                type: "logarithmic",
              },
              y: {
                title: {
                  display: true,
                  text: "Occurrences",
                },
                type: "logarithmic",
              },
            },
          }}
        />

        <h2>Text coverage</h2>

        <p>The number of roots to achieve various levels of text coverage on the corpus are as follows:</p>

        <ul>
          {[.5, .75, .9, .95, .98, .99, 1].map(p => (
            <li key={p}>
              {p*100}% coverage: {rootsForCoverage(p)}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
