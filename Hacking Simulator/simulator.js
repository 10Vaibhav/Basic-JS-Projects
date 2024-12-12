const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 1 * Math.random();

    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

async function main() {
  let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 100);

  let text = [
    "Initialized Hacking now reading your data",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning Up",
    "Bypassing Firewall Protocol",
    "Decryption Matrix Activated",
    "Quantum Encryption Breaking",
    "Network Nodes Infiltrated",
    "Digital Footprints Erased",
    "Stealth Mode Engaged",
    "System Vulnerabilities Mapped",
    "Proxy Servers Redirecting",
    "Algorithmic Breach Initiated",
    "Data Packets Intercepted",
    "Quantum Resonance Scanning",
    "Neural Network Overriding",
    "Ghost Protocol Initialized",
    "Cryptographic Barriers Dissolving",
    "Parallel Processing Engaged",
    "Binary Cascade Commencing",
    "Satellite Uplink Established",
    "Steganographic Layers Penetrating",
    "Quantum Entanglement Sequence Started",
    "Distributed Network Hijacking",
    "Digital Camouflage Activated",
    "Recursive Algorithmic Infiltration",
    "Electromagnetic Spectrum Scanning",
    "Holographic Data Reconstruction",
    "Machine Learning Bypass Initiated",
    "Temporal Data Synchronization",
    "Cybernetic Firewall Neutralized",
    "Quantum Encryption Key Generated",
    "Neuromantic Protocol Engaged",
    "Dark Web Pathways Mapped",
    "Synthetic Intelligence Handshake",
    "Nano-Transmission Initiated",
    "Digital Shadow Projection",
    "Multidimensional Data Stream",
    "Encrypted Communication Channels",
    "Biometric Signature Spoofing",
    "Quantum Decoherence Sequence",
    "Semantic Web Infiltration",
    "Augmented Reality Overlay",
    "Cognitive Firewall Breaching",
    "Hyperdimensional Data Matrix",
    "Synaptic Network Mapping",
    "Quantum Entanglement Protocol",
    "Molecular Data Compression",
    "Artificial Neural Pathway Hacking",
    "Electromagnetic Interference Generated",
    "Holographic Memory Reconstruction",
    "Quantum Superposition Breach",
    "Adaptive Camouflage Protocols",
    "Digital Echo Location",
    "Recursive Self-Modifying Code",
    "Quantum Tunneling Initiated",
    "Fractal Encryption Breaking",
    "Photonic Data Transfer",
    "Neuromorphic Computing Hack",
    "Quantum Coherence Manipulation",
    "Metaverse Data Extraction",
    "Synthetic Biological Interface",
    "Quantum Randomness Generator",
    "Adaptive Cryptographic Mapping",
    "Hyperspace Communication Channel",
    "Quantum Error Correction Bypass",
    "Synthetic Consciousness Probe",
    "Holographic Data Encryption",
    "Quantum State Manipulation",
    "Synthetic Telepathic Network",
    "Biomimetic Encryption Algorithm",
    "Quantum Decoherence Mapping",
    "Multispectral Data Analysis",
    "Neuroplastic Network Infiltration",
    "Quantum Resonance Imaging",
    "Synthetic Emotional Response",
    "Hyperdimensional Data Compression",
    "Quantum Entanglement Communication",
    "Adaptive Stealth Protocols",
    "Synthetic Sensory Overlay",
    "Quantum State Encryption",
    "Neuromorphic Pattern Recognition",
    "Holographic Memory Projection",
    "Quantum Randomness Encryption",
    "Synthetic Cognitive Mapping",
    "Quantum Decoherence Interference",
    "Biomimetic Neural Network",
    "Quantum Tunneling Communication",
    "Synthetic Perception Hacking",
    "Hyperspectral Data Encryption",
    "Quantum Coherence Disruption",
    "Neuroplastic Data Reconstruction",
    "Synthetic Empathy Protocol",
    "Quantum State Manipulation",
    "Holographic Consciousness Interface",
  ];

  for (const item of text) {
    await addItem(item);
  }

  await randomDelay();
  clearInterval(t);
}

main();
