

function Item(props) {

  const { name, audioUrl } = props;

  return (
    <div>
      <h2 className="title is-6">{ name }</h2>
      <audio src={ audioUrl } controls style={{"width": "100%"}} />
    </div>
  );
}

function ItemList(props) {

  const Items = props.items.map((item) => (
    <Item key={item.name} audioUrl={item.audioUrl} name={item.name} />
  ));

  return Items;
}


function Frame() {
  const data = {
    items: [
      { 
        name: "Long Scale (Warm-Ups: Bubble, Vvv, Puffy Cheeks & Cool Down) - Low",
        audioUrl: "./media/Bubble.mp3"
      },
      { 
        name: "'Mum' on Descending 5 Tone Repeat (Low)",
        audioUrl: "./media/Mum.mp3"
      },
      {
        name: '"Bub" on Octave Repeat - Low ',
        audioUrl: "./media/Bub.mp3",
      },
      {
        name: '"Bup" on a Triple Arpeggio - Low',
        audioUrl: './media/"Bup" on a Triple Arpeggio - Low',
      },
      {
        name: 'Bubble Cool Down on Reverse Single Arpeggio - Low' ,
        audioUrl: "./media/Bubble_Cooldown.mp3",
      }
    ]
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          Singing Habit
        </h1>
        <ItemList items={data.items} />
      </div>
    </section>
  )
}

function App(props) {
    return <Frame />
}


ReactDOM.render(
  <App />,
  document.getElementById("root")
);  