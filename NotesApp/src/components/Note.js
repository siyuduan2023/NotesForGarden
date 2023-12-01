

function Note(props) {

  function createCard(single) {
    return (
      <div className="note">
        <h1>{single.title}</h1>
        <p>{single.content}</p>
        <p>Genus: {single.genus}</p>
        <p>Species: {single.species}</p>
        <p>Family: {single.family}</p>
        <p>Month: {single.family}</p>
      </div>
    );
  }

  return <>{props.notes.map(createCard)}</>;
}
export default Note;
