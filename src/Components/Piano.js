import React, { useState } from "react";
import * as Tone from "tone";

const Piano = () => {
  //const [monoType, setMonoType] = useState('sine');

  const [osciType, setOsciType] = useState("sine");
  


  const synth = new Tone.Synth({
    oscillator: {
      type: `${osciType}`,
      modulationType: "sawtooth",
      modulationIndex: 3,
      harmonicity: 3.4,
    },
    envelope: {
      attack: 0.001,
      decay: 0.1,
      sustain: 0.1,
      release: 0.1,
    },
  }).toDestination();

  const [pitch, setPitch] = useState(5);

  const now = Tone.now();

  const playNote = (event) => {
    //console.log("instrument", instrument);
    let note = event.target.className;

    //instrument.triggerAttack(`${note}${pitch}`, "8n");
    synth.triggerAttack(`${note}${pitch}`, "8n");
    
  };
  const silenceNote = (event) => {
    let note = event.target.className;

    // instrument.triggerRelease(now);
    synth.triggerRelease(now);
  };

  return (
    <div className="box">
      <div className="controls">
        
        <select onChange={(event) => setPitch(event.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5" selected>
            5
          </option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        

        <button onClick={() => setOsciType("square")}>Square</button>
        <button onClick={() => setOsciType("sine")}>Sine</button>
        <button onClick={() => setOsciType("sawtooth")}>Sawtooth</button>
      </div>

      <div className="piano">
        {" "}
        {/*//////////////  ////////////////__-_ P  I  A  N  O _-__/////////////////////////////*/}
        <button
          id="white"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          className="C"
        >
          C
        </button>
        <button
          id="black"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          className="C#"
        >
          C#
        </button>
        <button
          id="white"
          onPointerUp={(event) => silenceNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          className="D"
        >
          D
        </button>
        <button
          id="black"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          className="D#"
        >
          D#
        </button>
        <button
          id="white"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          className="E"
        >
          E
        </button>
        <button
          id="white"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          className="F"
        >
          F
        </button>
        <button
          id="black"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          className="F#"
        >
          F#
        </button>
        <button
          id="white"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          className="G"
        >
          G
        </button>
        <button
          id="black"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          className="G#"
        >
          G#
        </button>
        <button
          id="white"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          className="A"
        >
          A
        </button>
        <button
          id="black"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          className="A#"
        >
          A#
        </button>
        <button
          id="white"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          className="B"
        >
          B
        </button>
      </div>
    </div>
  );
};

export default Piano;
