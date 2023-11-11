import notes from "../notes";

function Note() {
  console.log(notes[0]);

  function createCard(single) {
    return (
      <div className="note">
        <h1>{single.title}</h1>
        <p>{single.content}</p>
      </div>
    );
  }

  return <>{notes.map(createCard)}</>;
}
export default Note;
