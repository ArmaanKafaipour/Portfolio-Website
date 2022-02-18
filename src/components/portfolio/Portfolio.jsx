import React from "react";
import { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { webPortfolio, netPortfolio, fpgaPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "net",
      title: ".NET Apps",
    },
    {
      id: "web",
      title: "Web Apps",
    },
    {
      id: "fpga",
      title: "FPGA",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "net":
        setData(netPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "fpga":
        setData(fpgaPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
