
import { useState } from "react";
import { motion } from "framer-motion";

export default function DesignCalculator() {
  const [step, setStep] = useState(1);
  const [room, setRoom] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [style, setStyle] = useState("");
  const [palette, setPalette] = useState("");
  const [budget, setBudget] = useState(5000);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-6">Design Calculator</h1>
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {step === 1 && (
          <div>
            <label className="block mb-2 text-sm font-medium">What room are you designing?</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            >
              <option value="">Select</option>
              <option>Living Room</option>
              <option>Bedroom</option>
              <option>Kitchen</option>
              <option>Other</option>
            </select>
            <button onClick={next} className="w-full bg-black text-white py-2 rounded-lg">Next</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block mb-2 text-sm font-medium">Room Size (ft)</label>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                className="border border-gray-300 rounded-lg p-2"
                placeholder="Width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
              <input
                className="border border-gray-300 rounded-lg p-2"
                placeholder="Length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <button onClick={back} className="text-sm text-gray-600">Back</button>
              <button onClick={next} className="bg-black text-white px-4 py-2 rounded-lg">Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <label className="block mb-2 text-sm font-medium">Choose a Style</label>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {['Modern', 'Traditional', 'Coastal', 'Transitional'].map((s) => (
                <button
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`border p-2 rounded-lg ${style === s ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button onClick={back} className="text-sm text-gray-600">Back</button>
              <button onClick={next} className="bg-black text-white px-4 py-2 rounded-lg">Next</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <label className="block mb-2 text-sm font-medium">Choose a Color Palette</label>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {['Soft Neutrals', 'Bold & Warm', 'Earthy Greens', 'Custom Blend'].map((p) => (
                <button
                  key={p}
                  onClick={() => setPalette(p)}
                  className={`border p-2 rounded-lg ${palette === p ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              <button onClick={back} className="text-sm text-gray-600">Back</button>
              <button onClick={next} className="bg-black text-white px-4 py-2 rounded-lg">Next</button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <label className="block mb-2 text-sm font-medium">Your Budget: ${budget.toLocaleString()}</label>
            <input
              type="range"
              min={1000}
              max={20000}
              step={1000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full mb-4"
            />
            <div className="flex justify-between">
              <button onClick={back} className="text-sm text-gray-600">Back</button>
              <button onClick={next} className="bg-black text-white px-4 py-2 rounded-lg">See Preview</button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Your Signature Style</h2>
            <p className="text-gray-600 mb-4">Here’s a curated preview based on your preferences.</p>
            <div className="bg-gray-100 p-4 rounded-lg text-left text-sm mb-4">
              <p><strong>Room:</strong> {room}</p>
              <p><strong>Size:</strong> {width} ft x {length} ft</p>
              <p><strong>Style:</strong> {style}</p>
              <p><strong>Palette:</strong> {palette}</p>
              <p><strong>Budget:</strong> ${budget.toLocaleString()}</p>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg text-lg">Unlock Full Design Plan</button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
