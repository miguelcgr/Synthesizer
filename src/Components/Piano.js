import React, {useState} from "react";
import * as Tone from "tone";
 

const Piano = () => {

    const phaser = new Tone.Phaser({
        frequency: 15,
        octaves: 5,
        baseFrequency: 1000
    }).toDestination();

 // const synth = new Tone.Synth().toDestination();


 
const synth = new Tone.FMSynth().connect(phaser);




  const [pitch, setPitch] = useState(1)

  const playNote = (event) => {
    let note = event.target.className;

    synth.triggerAttackRelease(`${note}${pitch}`, "8n");
  };


  return (
    <div>
      hi bro this is a piano bro it is a nice piano please play it
      <div>
        <button onClick={(event) => playNote(event)} className="C">
          C
        </button>
        <button onClick={(event) => playNote(event)} className="D">
          D
        </button>
        <button onClick={(event) => playNote(event)} className="E">
          E
        </button>
        <button onClick={(event) => playNote(event)} className="F">
          F
        </button>
        <button onClick={(event) => playNote(event)} className="G">
          G
        </button>
        <button onClick={(event) => playNote(event)} className="A">
          A
        </button>
        <button onClick={(event) => playNote(event)} className="B">
          B
        </button>
      </div>
      <input
       
        onChange={event => setPitch(event.target.value)}
        type="number"
        min="1"
        max="9"
      />
    </div>
  );
};

export default Piano;
