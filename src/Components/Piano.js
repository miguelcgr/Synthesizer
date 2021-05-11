import React, { useState } from "react";
import * as Tone from "tone";

const Piano = () => {
  const mono = new Tone.MonoSynth({
    oscillator: {
      type: "square",
    },
    envelope: {
      attack: 0.1,
    },
  }).toDestination();

  const osci = new Tone.Synth({
    oscillator: {
      type: "fmsquare",
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

  const phaser = new Tone.Phaser({
    frequency: 15,
    octaves: 5,
    baseFrequency: 1000,
  }).toDestination();

  const phas = new Tone.FMSynth().connect(phaser);

  //const mono = new Tone.FatOscillator("Ab3", "sawtooth", 40).toDestination();

  //const synth = new Tone.Synth().toDestination();

  const [pitch, setPitch] = useState(5);

  const [instrument, setInstrument] = useState(mono);

  const now = Tone.now();

  const playNote = (event) => {
    // console.log("instrument", instrument.name);
    let note = event.target.className;

    instrument.triggerAttack(`${note}${pitch}`, "8n");
  };
  const silenceNote = (event) => {
    let note = event.target.className;

    instrument.triggerRelease(now);
  };

  return (
    <div>
      <div className="piano">
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
      <input
        onChange={(event) => setPitch(event.target.value)}
        defaultValue="5"
        type="number"
        min="1"
        max="9"
      />

      {/*  
      <button onCLick={() => setInstrument(synth)}>Synth</button> */}
      <button onClick={() => setInstrument(phas)}>Phaser</button>
      <button onClick={() => setInstrument(mono)}>Monosynth</button>
      <button onClick={() => setInstrument(osci)}>Oscillator</button>
    </div>
  );
};

export default Piano;

