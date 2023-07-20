import animePageTypes from "../../../types/animePageTypes";

const Parameters = ({ data }: animePageTypes) => {
  const type = data?.data?.type;
  const episodes = data?.data?.episodes;
  const score = data?.data?.score;
  const year = data?.data?.year;

  const parametersList = [
    { text: "Type", api: type },
    { text: "Episodes", api: episodes },
    { text: "Score", api: score },
    { text: "Year", api: year },
  ];

  const parametersListMap = parametersList?.map((parameter, id) =>
    parameter.api ? (
      <div className="anime-page__parameter-item" key={id}>
        <p className="anime-page-parameter-title">{parameter.text}</p>
        <p className="anime-page-parameter-subtitle">{parameter.api}</p>
      </div>
    ) : null
  );

  return <div className="anime-page__parameter-list">{parametersListMap}</div>;
};

export default Parameters;
