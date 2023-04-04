import "./styles.css";
export default function Card(props) {
  const date = props.date.substring(0, 4);
  return (
    <div className="card">
      <img src={props.img} />
      <div className="card-text">
      <h3 className="title">{props.title}</h3>
      <p>{props.description}</p>
      <p>{date}</p>
      </div>
    </div>
  );
}
{
  /* <div class="card">
  <h4 class="title">${data.title}</h4>
  <p>${data.channelTitle}</p>
  <p>${data.description}</p>
  <p>2.4M</p>
  <p>${data.publishTime.substring(0, 4)}</p>
  <p>${cardId++}</p>
</div>; */
}
