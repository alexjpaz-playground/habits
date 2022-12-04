import { HabitHeader } from "../common/HabitHeader";

export function Description() {
  return (
    <div>
      <h4>Practice Scales</h4>
      <p>Start with <a href="https://www.basicmusictheory.com/c-major-scale">C Major Scale</a>, G and then pick others to practice</p>
      <p>C, F, G, Bb, and Eb</p>
      <strong>Major Scale Formula</strong>
      <p>W W H W W W H</p>

      <h4>Practice Arrpeggios</h4>
      <p>Practice <a href="https://www.youtube.com/watch?v=PzQY2K5Ormc">C Major Arrpeggios</a> and other scales</p>
      <p>1, 3, 5, 1</p>

      <h4>Practice Chord Progressions</h4>

    </div>
  )
}

export function PianoHabit() {
  return (
    <section className="section">
      <div className="container">
        <HabitHeader title={"Piano"} path={"/piano"} description={<Description />} />


        <h4 className="subtitle">Scales</h4>

        <p>C Major</p>
        <img alt="scale" src="https://www.pianoscales.org/images/C.png" />

        <p>G Major</p>
        <img alt="scale" src="https://www.pianoscales.org/images/G.png" />

        <p>F Major</p>
        <img alt="scale" src="https://www.pianoscales.org/images/F.png" />

        <p>Bb Major</p>
        <img alt="scale" src="https://www.pianoscales.org/images/Bb.png" />

        <p>Eb Major</p>
        <img alt="scale" src="https://www.pianoscales.org/images/Eb.png" />


        <div className="buttons">
          <a className="button" href="https://www.pianoscales.org/major.html">Major Scales</a>
        </div>

        <h4 className="subtitle">Chords</h4>
        <img alt="chords" src="/piano/images/chords-constellations.png"></img>
        <p>Forumlas</p>
        <dl>
          <dt>Major</dt>
          <dd>1-3-5</dd>

          <dt>Minor</dt>
          <dd>1-b3-5</dd>
        </dl>

        <dl>
          <dt>All White Keys</dt>
          <dd>C F G</dd>

          <dt>White Black White</dt>
          <dd>D E A</dd>

          <dt>Black White Black</dt>
          <dd>Db Eb Ab</dd>

          <dt>Odd Shapes</dt>
          <dd>
            <p>Gb (Black Black Black)</p>
            <p>Bb (Black White White)</p>
            <p>B (White Black Black)</p>
          </dd>
        </dl>

        <h4 className="subtitle">Chord Progressions</h4>
        <p className="is-size-5">I – V – vi – IV</p>
        <p>C – G – Am – F</p>
        <p>G – D – Em – C</p>

        <br />

        <p className="is-size-5">IV - V - iii - vi</p>
        <p>F – G – Em – Am</p>

        <br />

        <div className="buttons">
          <a className="button" href="https://www.pianoscales.org/major-harmonizing.html">Major Scales harmonizing</a>
        </div>

        <h4 className="subtitle">Arrpeggios</h4>

        <p>C Arpeggio</p>
        <img alt="scale" src="https://www.pianoscales.org/images/arpeggio_C.png" />

        <p>G Arpeggio</p>
        <img alt="scale" src="https://www.pianoscales.org/images/arpeggio_G.png" />

        <p>F Arpeggio</p>
        <img alt="scale" src="https://www.pianoscales.org/images/arpeggio_F.png" />

        <p>Bb Arpeggio</p>
        <img alt="scale" src="https://www.pianoscales.org/images/arpeggio_Bb.png" />

        <p>Eb Arpeggio</p>
        <img alt="scale" src="https://www.pianoscales.org/images/arpeggio_Eb.png" />

        <div className="buttons">
          <a className="button" href="  https://www.pianoscales.org/major-arpeggios.html">Major Scale Arrpeggios</a>
        </div>

        <h4 className="subtitle">Circle of the Fifths</h4>
        <img alt="Circle of the Fifth" src="/piano/images/Circle-of-fifths-700x662.jpeg" />
      </div>
    </section>
  )
}

export default PianoHabit;