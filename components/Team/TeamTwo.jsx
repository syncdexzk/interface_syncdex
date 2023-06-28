import React from "react";
import TeamTwoItem from "./TeamTwoItem";

const TeamTwo = () => {
  const team_members = [
    {
      src: "/img/team/h2_team_img01.png",
      name: "Cameron Williamson",
      designation: "Founder & CO",
    },
    {
      src: "/img/team/h2_team_img02.png",
      name: "Eleanor Pena",
      designation: "Head of Design",
    },
    {
      src: "/img/team/h2_team_img03.png",
      name: "Bessie Cooper",
      designation: "Vp People",
    },
    {
      src: "/img/team/h2_team_img04.png",
      name: "Darlene Robertson",
      designation: "Product Manager",
    },
  ];

  return (
    <section className="team-area-two team-bg">
      <div className="container custom-container-four">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-60">
              <span className="sub-title">OUr team</span>
              <h2 className="title">
                The Leadership <br />
                <span>Team</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {team_members.map((x, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <TeamTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamTwo;
