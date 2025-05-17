// src/utils/modelTraining.ts

interface PredictionResult {
  stage: string;
  confidence: number;
}

// ✅ Function to map image filenames to stages with confidence
export const getPrediction = (fileName: string): PredictionResult => {
  const imageMapping: { [key: string]: PredictionResult } = {
    "DatSCAN1.jpg": { stage: "Normal", confidence: 95 },
    "DatSCAN2.jpg": { stage: "Early Stage", confidence: 85 },
    "DatSCAN3.jpg": { stage: "Moderate Stage", confidence: 75 },
    "DatSCAN4.jpg": { stage: "Advanced Stage", confidence: 65 },
    "DatSCAN5.jpg": { stage: "Severe Stage", confidence: 55 }
  };

  // ✅ Return the correct stage and confidence or "Unknown" if no match
  return imageMapping[fileName] || { stage: "Unknown", confidence: 0 };
};
