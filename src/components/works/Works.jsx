import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Webpage Countdown Timer",
      desc: "Web page that displays a custom countdown timer. Form to input email for notifications. Social media links at bottom of page. Completed using Vanilla JS.",
      img: "assets/webpageCountdown.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "React JS Todo List",
      desc: "Simple todo list completed to learn React JS.",
      img: "assets/todo.png",
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "React JS Recipe App",
      desc: "Recipe app developed in React JS to learn how to implement APIs. The user can search for an ingredient and the API will return several recipes that include the ingredient. ",
      img: "assets/recipeApp.png",
    },
    {
      id: "4",
      icon: "./assets/globe.png",
      title: "Rock Paper Scissors",
      desc: "Rock paper scissors game developed in Vanilla JS. Learned basic styling and animations in CSS. ",
      img: "assets/rockpaperscissors.png",
    },
    {
      id: "5",
      icon: "./assets/globe.png",
      title: "Job App Tracker",
      desc: "GUI designed using WPF and XAML. User enters job applications into GUI and it gets stored in a SQL database managed by SSMS. The user can search the database for previous job applications and view the queried application details on the GUI. Written in C#. ",
      img: "assets/jobAppTracker.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
