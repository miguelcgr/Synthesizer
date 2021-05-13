import React, { useState } from "react";
import * as Tone from "tone";

const Piano = () => {
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
    let note = event.target.id;

    synth.triggerAttack(`${note}${pitch}`, "8n");
  };
  const silenceNote = (event) => {
    let note = event.target.id;

    synth.triggerRelease(now);
  };

  return (
    <div className="box">
      <div className="controls">
        <select
          className="selectdiv"
          onChange={(event) => setPitch(event.target.value)}
        >
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
          className="white"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          id="C"
        >
          C
        </button>
        <button
          className="Cs"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          id="C#"
        >
          C#
        </button>
        <button
          className="white"
          onPointerUp={(event) => silenceNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          id="D"
        >
          D
        </button>
        <button
          className="Ds"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          id="D#"
        >
          D#
        </button>
        <button
          className="white"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          id="E"
        >
          E
        </button>
        <button
          className="white"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          id="F"
        >
          F
        </button>
        <button
          className="Fs"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          id="F#"
        >
          F#
        </button>
        <button
          className="white"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          id="G"
        >
          G
        </button>
        <button
          className="Gs"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          id="G#"
        >
          G#
        </button>
        <button
          className="white"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          id="A"
        >
          A
        </button>
        <button
          className="As"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          id="A#"
        >
          A#
        </button>
        <button
          className="white"
          onPointerUp={(event) => silenceNote(event)}
          onPointerDown={(event) => playNote(event)}
          onMouseLeave={(event) => silenceNote(event)}
          id="B"
        >
          B
        </button>
      </div>
    </div>
  );
};

export default Piano;
