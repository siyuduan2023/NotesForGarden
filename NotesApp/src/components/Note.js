

function Note(props) {

  function createCard(single) {
    return (
      <div className="note">
        <h1>{single.title}</h1>
        <p>{single.content}</p>
        <p>{single.genus}</p>
        <p>{single.species}</p>
        <p>{single.family}</p>
      </div>
    );
  }

  return <>{props.notes.map(createCard)}</>;
}
export default Note;
