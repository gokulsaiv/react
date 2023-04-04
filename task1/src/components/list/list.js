import React from "react";
import "./styles.css";
import Card from "../card/card.js";

export default function List(props) {
  const cardList = props.listData.map((card) => {
    return (
      <Card
        key={card.id.videoId}
        title={card.snippet.channelTitle}
        description={card.snippet.description}
        date={card.snippet.publishTime}
        img={card.snippet.thumbnails.medium.url}
      />
    );
  });

  return <>{cardList}</>;
}
