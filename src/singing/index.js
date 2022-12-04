import React from 'react';

import { HabitHeader } from '../common/HabitHeader';

import References from './References';
import { ScalesSection } from './ScalesSection';

export const ASSET_PATH = "/singing/media/";

export const NOOP = () => { };

function Frame() {

  const SINGING_PLAYLIST_URL = 'https://music.youtube.com/playlist?list=PLBsbOw7xrqWMYUnXANFeOer-8pS2q1eU4&feature=share';

  return (
    <section className="section">
      <div className="container">
        <HabitHeader title={"Singing"} path={"/singing"} description={(
          <div>
            <h4>Habit Outline</h4>
            <ol>
              <li>Sing arreggios</li>
              <li>Write down lyrics / phrases</li>
              <li>Identify vowel substitutions</li>
            </ol>
            <h4>Excercises</h4>
            <p>Bubble, VVV, Puffy cheeks, Raspberry</p>
            <p>Bub, Bup, Goo/Koo, Gug</p>
            <p>Hnng → EE → Mmm</p>
            <h4><a href='/singing/images/solfege.png'>Scales (Solfege)</a></h4>
            <p>Major Scale 1 (Doh) 2 (Re) 3 (Mi) 4 (Fa) 5 (Sol) 6 (La) 7 (Ti)</p>
            <p>Natural Minor Progression: 6 (Low La) 7 (Low Ti) 1 (Doh) 2 (Re) 3 (Mi) 4 (Fa) 5 (Sol) 6 (La)</p>

            <a href={SINGING_PLAYLIST_URL} className='button'>Singing playlist</a>
          </div>
        )} />
        <References />
        <hr />
        <ScalesSection />
      </div>
    </section>
  )
}

export default Frame;
