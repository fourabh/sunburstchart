import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Sunburst from "highcharts/modules/sunburst";

(async () => {
  const Sunburst = await import("highcharts/modules/sunburst");
  Sunburst.default(Highcharts);
})();

const SunburstChart = ({ data }) => {
  const [clickedText, setClickedText] = useState("");
  console.log('Incoming data:', data);

  const transformData = (node, depth = 0) => {
    const result = [
      {
        id: node.name,
        name: node.name,
        value: node.value,
        color: Highcharts.getOptions().colors[depth],
      },
    ];
    if (node.children) {
      node.children.forEach((child) => {
        result.push(...transformData(child, depth + 1));
        result.push({
          parent: node.name,
          id: child.name,
        });
      });
    }
    // console.log(`result of transformData `+ result)
    return result;
  };

  const options = {
    chart: {
      height: "60%",
    },
    title: {
      text: "Sunburst Chart",
    },
    series: [
      {
        type: "sunburst",
        data: transformData(data),
        allowDrillToNode: true,
        cursor: "pointer",
        dataLabels: {
          format: "{point.name}",
          filter: {
            property: "innerArcLength",
            operator: ">",
            value: 16,
          },
        },
        levels: [
          {
            level: 1,
            levelIsConstant: false,
            dataLabels: {
              rotationMode: "parallel",
            },
          },
        ],
        point: {
          events: {
            click: function () {
              const randomTexts = [
                "Insight A",
                "Insight B",
                "Insight C",
                "Insight D",
              ];
              const randomText =
                randomTexts[Math.floor(Math.random() * randomTexts.length)];
              setClickedText(`${this.name} clicked: ${randomText}`);
            },
          },
        },
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
      {clickedText && <p>{clickedText}</p>}
    </div>
  );
};

export default SunburstChart;
