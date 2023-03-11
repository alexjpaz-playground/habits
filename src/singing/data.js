
const data = {}

data.scales = {
  guided: {
    scales: [
      { label: "1. Bubble, VVV, Puffycheeks, Raspberry", value: "Bubble.mp3" },
      { label: "2. Bass Hold", value: "nebula_scales/bass/Unison - E2 to E4 - Bass.mp3" },
      { label: "3. Bass Gug", value: "nebula_scales/bass/Standard Octave Chromatic - E2 to E4 - Bass.mp3" },
      { label: "4. Mum", value: "nebula_scales/baritone/Standard 5th Major - G2 to G4 - Baritone.mp3" },
      { label: "5. Bub", value: "nebula_scales/baritone/Circular 5th Major - D3 to G4 - Baritone.mp3" },
      { label: "6. Bup", value: "nebula_scales/tenor/Circular 5th Minor - G3 to C5 - Tenor.mp3" },
      { label: "7. Nnng-EE-Mmm", value: "nebula_scales/tenor/Circular 5th Major - G3 to C5 - Tenor.mp3" },
      { label: "8. Nnng-Ayy (Tenor Passagio)", value: "nebula_scales/tenor/Circular 9th Minor - F3 to C5 - Tenor.mp3" },
      { label: "9. Gug", value: "nebula_scales/baritone/Standard Octave Chromatic - G2 to G4 - Baritone.mp3" },
      { label: "10. Goo/Koo", value: "nebula_scales/tenor/Standard 9th Major - C3 to C5 - Tenor.mp3" },
      { label: "11. Siren Baritone", value: "nebula_scales/baritone/Siren Octave Major - G2 to G4 - Baritone.mp3" },
      { label: "12. Siren Tenor", value: "nebula_scales/tenor/Siren Octave Major - C3 to C5 - Tenor.mp3" },
      { label: "13. Hold Vowels", value: "nebula_scales/baritone/Unison - G2 to G4 - Baritone.mp3" },
      { label: "14. Interval Training", value: "BaritonIntervalTraining.ogg" },
      { label: "15. Cooldown - Bubble, VVV, Puffycheeks, Raspberry", value: "nebula_scales/tenor/Unison - C3 to C5 - Tenor.mp3" },
    ]
  },
  tenor: {
    scales: [
      "nebula_scales/tenor/Arpeggio Octave Major - C3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Arpeggio Octave Minor - C3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Circular 5th Major - G3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Circular 5th Minor - G3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Circular 9th Major - F3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Circular 9th Minor - F3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Looper 1-Octave Chromatic - C3 to C4 - Tenor bottom.mp3",
      "nebula_scales/tenor/Looper 1-Octave Chromatic - C4 to C5 - Tenor top.mp3",
      "nebula_scales/tenor/Looper 2-Octave Chromatic - C3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Pentatonic 12th Major - C3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Pentatonic 12th Minor - C3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Siren Octave Major - C3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Standard 5th Major - C3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Standard 5th Minor - C3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Standard 9th Major - C3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Standard 9th Minor - C3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Standard Octave Chromatic - C3 to C5 - Tenor.mp3",
      "nebula_scales/tenor/Unison - C3 to C5 - Tenor.mp3",
    ].map((item) => ({ label: item.slice(20).slice(0, -23), value: item }))
  },
  baritone: {
    scales: [
      "nebula_scales/baritone/Arpeggio Octave Major - G2 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Arpeggio Octave Minor - G2 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Circular 5th Major - D3 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Circular 5th Minor - D3 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Circular 9th Major - C3 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Circular 9th Minor - C3 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Looper 1-Octave Chromatic - G2 to G3 - Baritone bottom.mp3",
      "nebula_scales/baritone/Looper 1-Octave Chromatic - G3 to G4 - Baritone top.mp3",
      "nebula_scales/baritone/Looper 2-Octave Chromatic - G2 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Pentatonic 12th Major - G2 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Pentatonic 12th Minor - G2 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Siren Octave Major - G2 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Standard 5th Major - G2 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Standard 5th Minor - G2 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Standard 9th Major - G2 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Standard 9th Minor - G2 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Standard Octave Chromatic - G2 to G4 - Baritone.mp3",
      "nebula_scales/baritone/Unison - G2 to G4 - Baritone.mp3", 
    ].map((item) => ({ label: item.slice(23).slice(0, -25), value: item }))
  },
};

data.practice_arpeggios = [
    { 
      name: "Long Scale (Warm-Ups: Bubble, Vvv, Puffy Cheeks, Raspberry & Cool Down) - Low",
      audioUrl: "Bubble.mp3"
    },
    { 
      name: "'Mum' on Descending 5 Tone Repeat (Low)",
      audioUrl: "Mum.mp3"
    },
    {
      name: '"Bub" on Octave Repeat - Low ',
      audioUrl: "Bub.mp3",
    },
    {
      name: '"Bup" on a Triple Arpeggio - Low',
      audioUrl: 'Bup.mp3',
    },
    {
      name: 'Bubble Cool Down on Reverse Single Arpeggio - Low' ,
      audioUrl: "Bubble_Cooldown.mp3",
    },
    {
      name: "Ugly Ah - Descending 5 Tone Repeat (Low Voices)",
      audioUrl: "Ugly_Ah_Low.mp3"
    },
    {
      name: "Ugly Ah - Descending 5 Tone Repeat (High Voices)",
      audioUrl: "Ugly_Ah_High.mp3"
    },
    {
      name: "Mmm - 5 Tone Scale (Low Voices)",
      audioUrl: "Mmm_Low.mp3"
    },
    {
      name: "Mmm 5 Tone Scale (High Voices)",
      audioUrl: "Mmm_High.mp3"
    },
    {
      name: "Goo-Koo Descending Arpeggio (Low Voices)",
      audioUrl: "Goo-Koo_Low.mp3"
    },
    {
      name: "Goo-Koo Descending Arpeggio (High Voices)",
      audioUrl: "Goo-Koo_High.mp3"
    },
    {
      name: "Gug Descending Arpeggio (Low Voices)",
      audioUrl: "Goo-Koo_Low.mp3"
    },
    {
      name: "Gug Descending Arpeggio (High Voices)",
      audioUrl: "Goo-Koo_High.mp3"
    },
    {
      name: "Hnnng -> EE -> MM (Baritone)",
      audioUrl: "nebula_scales/baritone/Circular 5th Major - D3 to G4 - Baritone.mp3",
    },
    {
      name: "Hnnng -> EE -> MM (Tenor)",
      audioUrl: "nebula_scales/tenor/Circular 5th Major - G3 to C5 - Tenor.mp3",
    },
    {
      name: "Siren (Baritone)",
      audioUrl: "nebula_scales/baritone/Siren Octave Major - G2 to G4 - Baritone.mp3",
    },
    {
      name: "Siren (Tenor)",
      audioUrl: "nebula_scales/tenor/Siren Octave Major - C3 to C5 - Tenor.mp3",
    }
  ]

data.common_words_by_usage = [
    ["I", "96%"],
    ["A", "95.8%"],
    ["You", "93.6%"],
    ["Love", "93.2%"],
    ["The", "92.9%"],
    ["Me", "85.5%"],
    ["To", "79.4%"],
    ["We", "78.7%"],
    ["Be", "77.9%"],
    ["U", "76.5%"],
    ["On", "75.8%"],
    ["Do", "75.1%"],
    ["Go", "73.6%"],
    ["In", "72.9%"],
    ["and", "71.5%"],
    ["No", "71.5%"],
    ["So", "70.2%"],
    ["It", "69.1%"],
    ["Is", "67.6%"],
    ["My", "67.5%"],
    ["Your", "66.9%"],
    ["Can", "65.5%"],
    ["For", "65.1%"],
    ["of", "63.2%"],
    ["Are", "61.7%"],
    ["When", "59.3%"],
    ["Girl", "59.1%"],
    ["One / 1", "58.4%"],
    ["What", "57%"],
    ["Man", "56%"],
    ["Boy", "54.5%"],
    ["Two / 2 / II", "53.5%"],
    ["Like", "52.2%"],
    ["That", "52.1%"],
    ["Woman", "52.1%"],
    ["Will", "51.2%"],
    ["Don't", "51%"],
    ["All", "50.7%"],
    ["Up", "49.6%"],
    ["Heart", "49.1%"],
    ["This", "48.2%"],
    ["Baby", "48.1%"],
    ["With", "48%"],
    ["If", "47.7%"],
    ["Can't", "47.4%"],
    ["Too", "47.4%"],
    ["How", "47%"],
    ["Have", "46.4%"],
    ["Time", "45.9%"],
    ["Want", "45.9%"],
    ["There", "45.8%"],
    ["Night", "43.6%"],
    ["Get", "42.8%"],
    ["Down", "42.2%"],
    ["Good", "41.1%"],
    ["Out", "41.1%"],
    ["You're", "40.9%"],
    ["From", "40.7%"],
    ["I'm", "39.7%"],
    ["Say", "38.9%"],
    ["Just", "38.7%"],
    ["Life", "38.4%"],
    ["It's", "37%"],
    ["Now", "36.5%"],
    ["Know", "36%"],
    ["Live", "35.4%"],
    ["Way", "34.9%"],
    ["Got", "34.9%"],
    ["Take", "34.8%"],
    ["Song", "34.7%"],
    ["Give", "34.4%"],
    ["Come", "34.4%"],
    ["Bad", "33.6%"],
    ["Make", "32.6%"],
    ["More", "32.5%"],
    ["Over", "32.1%"],
    ["Kiss", "31%"],
    ["World", "30.8%"],
    ["Back", "29.7%"],
    ["Black", "27.6%"],
    ["I'll", "27.1%"],
    ["Eyes", "26%"],
    ["Without", "23.8%"],
    ["Stop", "23.2%"],
    ["Together", "22.7%"],
    ["Away", "22.6%"],
    ["Little", "21.8%"],
    ["Rock", "21.7%"],
    ["About", "21.4%"],
    ["Hold", "21%"],
    ["Girls", "20.2%"],
    ["Again", "20.1%"],
    ["Tonight", "19.6%"],
    ["Lady", "19.2%"],
    ["Hey", "18.6%"],
    ["Loves", "17.8%"],
    ["Let's", "17.6%"],
    ["Fire", "17%"],
    ["Gonna", "16.1%"],
    ["Everything", "15.7%"],
    ["Keep", "15.1%"],
    ["Mr", "10.7%"],
    ["Angel", "9.2%"],
    ["Shake", "8.6%"],
    ["Theme", "4%"],
];

export default data;