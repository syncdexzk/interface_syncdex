import React from "react";
import TeamOneItem from "./TeamOneItem";

const TeamOne = () => {
  const team_members = [
    {
      src: "/img/team/team_img01.png",
      name: "Cameron Williamson",
      designation: "Founder & CO",
    },
    {
      src: "/img/team/team_img02.png",
      name: "Eleanor Pena",
      designation: "Head of Design",
    },
    {
      src: "/img/team/team_img03.png",
      name: "Bessie Cooper",
      designation: "Vp People",
    },
    {
      src: "/img/team/team_img04.png",
      name: "Darlene Robertson",
      designation: "Product Manager",
    },
    {
      src: "/img/team/team_img05.png",
      name: "Jacob Jones",
      designation: "Marketer",
    },
    {
      src: "/img/team/team_img06.png",
      name: "Courtney Henry",
      designation: "Founder",
    },
    {
      src: "/img/team/team_img07.png",
      name: "Ronald Richards",
      designation: "Account Manager",
    },
    {
      src: "/img/team/team_img08.png",
      name: "Theresa Webb",
      designation: "Founder & CO",
    },
  ];

  return (
    <section className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">OUr team</span>
              <h2 className="title">
                The Leadership <br /> <span>Team</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {team_members.map((member, index) => (
            <div key={index} className="col-xl-3 col-md-4 col-sm-6">
              <TeamOneItem item={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOne;
