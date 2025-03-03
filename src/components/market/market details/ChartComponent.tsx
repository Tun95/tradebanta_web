import Chart from "../../../common/chart/Chart";
import { formatNumberShort } from "../../../utilities/utils/Utils";
import "./styles.scss";
import { TooltipProps } from "recharts";

// Generate random data for predictionStats
const generateRandomData = (days: number) => {
  const randomData = [];
  const startDate = new Date();
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() - i);

    randomData.push({
      name: date.toISOString().split("T")[0], // Format as YYYY-MM-DD
      Predictions: Math.floor(Math.random() * 1000), // Random value for predictions
    });
  }
  return randomData.reverse(); // Ensure the data is ordered by date ascending
};

const predictionStats = generateRandomData(30); // Generate 30 days of random data

interface ChartProps {
  activeTypeTab: string;
  toggleTypeTab: (tab: string) => void;

  activeFilterTab: string;
  toggleFilterTab: (tab: string) => void;
}
function ChartComponent({
  activeTypeTab,
  toggleTypeTab,
  activeFilterTab,
  toggleFilterTab,
}: ChartProps) {
  // CustomTooltip Component
  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom_tooltip" style={{ padding: "10px" }}>
          {label ? (
            <p className="label">{`Date: ${label}`}</p>
          ) : payload[0]?.payload.name ? (
            <p className="">{`Date: ${payload[0]?.payload.name}`}</p>
          ) : (
            ""
          )}
          <p className="" style={{ color: "#5550bd", marginTop: "3px" }}>
            Votes: {formatNumberShort(payload[0]?.payload["Predictions"] ?? 0)}
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="market_chart_component">
      <div className="content">
        <div className="chart_ light_shadow">
          
          <div className="rechart">
            <Chart
              title="Prediction Chart Overtime"
              data={predictionStats}
              grid
              dataKeys={["Predictions"]}
              aspect={2 / 1}
              CustomTooltip={CustomTooltip}
            />
          </div>
        </div>
        <div className="bottom_btn c_flex">
          <div className="left">
            <div className="toggle_btn">
              <div className="btn l_flex">
                <button
                  className={`main_btn l_flex ${
                    activeTypeTab === "yes" ? "active" : ""
                  }`}
                  onClick={() => toggleTypeTab("yes")}
                >
                  <small>Yes</small>
                </button>
                <button
                  className={`main_btn l_flex ${
                    activeTypeTab === "no" ? "active" : ""
                  }`}
                  onClick={() => toggleTypeTab("no")}
                >
                  <small>No</small>
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            {" "}
            <div className="toggle_btn">
              <div className="btn l_flex">
                <button
                  className={`main_btn l_flex ${
                    activeFilterTab === "1h" ? "active" : ""
                  }`}
                  onClick={() => toggleFilterTab("1h")}
                >
                  <small>1H</small>
                </button>
                <button
                  className={`main_btn l_flex ${
                    activeFilterTab === "6h" ? "active" : ""
                  }`}
                  onClick={() => toggleFilterTab("6h")}
                >
                  <small>6H</small>
                </button>
                <button
                  className={`main_btn l_flex ${
                    activeFilterTab === "1d" ? "active" : ""
                  }`}
                  onClick={() => toggleFilterTab("1d")}
                >
                  <small>1D</small>
                </button>
                <button
                  className={`main_btn l_flex ${
                    activeFilterTab === "1w" ? "active" : ""
                  }`}
                  onClick={() => toggleFilterTab("1w")}
                >
                  <small>1W</small>
                </button>
                <button
                  className={`main_btn l_flex ${
                    activeFilterTab === "all" ? "active" : ""
                  }`}
                  onClick={() => toggleFilterTab("all")}
                >
                  <small>ALL</small>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartComponent;
