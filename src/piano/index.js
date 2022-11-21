import { HabitHeader } from "../common/HabitHeader";
import Rewards from "../common/rewards";

export function PianoHabit() {
    return (
      <section className="section">
        <div className="container">
          <HabitHeader title={"Piano"} path={"/piano"} description={`
            1. Practice C, G Scales
            2. Practice C Arrpeggios
            3. Practice Chrord Progressions
            4. Practice Songs
          `} />
          <div className='buttons'>
            <a href='https://www.youtube.com/watch?v=PzQY2K5Ormc&t=46s' className='button'>C Major Arrpeggios</a>
          </div>
          <img src='https://trello.com/1/cards/635930b17bdb4300e08b15c8/attachments/635930dca34f9801ac04cabd/previews/635930dda34f9801ac04caf4/download/Screenshot_20221026-090617.png' />
          <hr />
          <Rewards />
        </div>
      </section>
    )
  }
  
  export default PianoHabit;