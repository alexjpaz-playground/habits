

function Item(props) {

  const { name, audioUrl } = props;

  const [ clicked, setClicked ] = React.useState(false);

  const onClick = () => {

  };

  return (
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{ name }</p>
      </header>
      <div class="card-content">
        <div class="content">
          <audio src={ audioUrl } controls style={{"width": "100%"}} />
        </div>
      </div>
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
        audioUrl: './media/Bup.mp3',
      },
      {
        name: 'Bubble Cool Down on Reverse Single Arpeggio - Low' ,
        audioUrl: "./media/Bubble_Cooldown.mp3",
      },
      {
        name: "Ugly Ah - Descending 5 Tone Repeat (Low Voices)",
        audioUrl: "./media/Ugly_Ah_Low.mp3"
      },
      {
        name: "Ugly Ah - Descending 5 Tone Repeat (High Voices)",
        audioUrl: "./media/Ugly_Ah_High.mp3"
      },
      {
        name: "Mmm - 5 Tone Scale (Low Voices)",
        audioUrl: "./media/Mmm_Low.mp3"
      },
      {
        name: "Mmm 5 Tone Scale (High Voices)",
        audioUrl: "./media/Mmm_High.mp3"
      },
      {
        name: "Goo-Koo Descending Arpeggio (Low Voices)",
        audioUrl: "./media/Goo-Koo_Low.mp3"
      },
      {
        name: "Goo-Koo Descending Arpeggio (High Voices)",
        audioUrl: "./media/Goo-Koo_High.mp3"
      },
      {
        name: "Gug Descending Arpeggio (Low Voices)",
        audioUrl: "./media/Goo-Koo_Low.mp3"
      },
      {
        name: "Gug Descending Arpeggio (High Voices)",
        audioUrl: "./media/Goo-Koo_High.mp3"
      },
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