

function Note(props) {

  function createCard(single) {
    return (
      <div className="note">
        <h1>{single.title}</h1>
        <p>{single.content}</p>
      </div>
    );
  }

  return <>{props.notes.map(createCard)}</>;
}
export default Note;
