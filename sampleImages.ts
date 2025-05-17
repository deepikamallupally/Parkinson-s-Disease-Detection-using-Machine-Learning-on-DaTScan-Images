/*export const sampleDatScanImages = {
  DatSCAN1: {
    url: "/images/DatSCAN1.jpg",
    description: "Normal DaTSCAN",
    details: "Normal dopamine transporter binding in striatum",
    stage: "Normal"
  },
  DatSCAN2: {
    url: "/images/DatSCAN2.jpg",
    description: "Early Stage DaTSCAN",
    details: "Mild reduction in dopamine transporter binding",
    stage: "Early"
  },
  DatSCAN3: {
    url: "/images/DatSCAN3.jpg",
    description: "Moderate Stage DaTSCAN",
    details: "Moderate bilateral reduction in dopamine transporter binding",
    stage: "Moderate"
  },
  DatSCAN4: {
    url: "/images/DatSCAN4.jpg",
    description: "Advanced Stage DaTSCAN",
    details: "Severe bilateral reduction in dopamine transporter binding",
    stage: "Advanced"
  },
  DatSCAN5: {
    url: "/images/DatSCAN5.jpg",
    description: "Severe Stage DaTSCAN",
    details: "Complete loss of dopamine transporter binding",
    stage: "Severe"
  }
};

export interface StageAnalysis {
  stage: string;
  confidence: number;
  result: string;
  details: string;
  findings: string[];
  recommendations: string[];
  bindingRatios: {
    left: number[];
    right: number[];
  };
}

export function analyzeImage(imageUrl: string): StageAnalysis {
  // Find the matching DaTSCAN image
  const matchedScan = Object.values(sampleDatScanImages).find(scan => scan.url === imageUrl);
  
  if (!matchedScan) {
    return getDefaultAnalysis();
  }

  return generateAnalysis(matchedScan.stage, matchedScan);
}

function generateAnalysis(stage: string, scanData: typeof sampleDatScanImages.DatSCAN1): StageAnalysis {
  const baseFindings = [
    "DaTSCAN imaging shows dopamine transporter binding patterns",
    "Analysis based on striatal uptake characteristics",
    "Bilateral assessment of putamen and caudate nuclei"
  ];

  const baseRecommendations = [
    "Regular neurological follow-up",
    "Consider movement disorder specialist consultation",
    "Monitor for symptom progression"
  ];

  switch (stage) {
    case 'Normal':
      return {
        stage: "Normal",
        confidence: 95,
        result: "Normal DaTSCAN Pattern",
        details: "Normal dopamine transporter binding observed in striatum",
        findings: [
          "Symmetric tracer uptake in striatal regions",
          "Normal binding in posterior putamen",
          "No evidence of dopaminergic deficit"
        ],
        recommendations: [
          "No specific follow-up required",
          "Regular health check-ups as recommended",
          "Report any new symptoms to healthcare provider"
        ],
        bindingRatios: {
          left: [2.8, 2.7, 2.9],
          right: [2.8, 2.7, 2.9]
        }
      };

    case 'Early':
      return {
        stage: "Early Stage",
        confidence: 85,
        result: "Early Stage Parkinson's Disease Pattern",
        details: "Mild reduction in dopamine transporter binding",
        findings: [
          ...baseFindings,
          "Slight asymmetry in putamen uptake",
          "Mild reduction in one posterior putamen"
        ],
        recommendations: [
          ...baseRecommendations,
          "Consider starting dopaminergic therapy",
          "Baseline functional assessment"
        ],
        bindingRatios: {
          left: [2.5, 2.2, 2.7],
          right: [2.0, 1.8, 2.4]
        }
      };

    case 'Moderate':
      return {
        stage: "Moderate Stage",
        confidence: 90,
        result: "Moderate Stage Parkinson's Disease Pattern",
        details: "Bilateral reduction in dopamine transporter binding",
        findings: [
          ...baseFindings,
          "Bilateral reduction in putamen uptake",
          "Asymmetric pattern with one side more affected"
        ],
        recommendations: [
          ...baseRecommendations,
          "Optimize dopaminergic therapy",
          "Regular monitoring of motor symptoms"
        ],
        bindingRatios: {
          left: [2.0, 1.7, 2.2],
          right: [1.5, 1.2, 1.8]
        }
      };

    case 'Advanced':
      return {
        stage: "Advanced Stage",
        confidence: 95,
        result: "Advanced Stage Parkinson's Disease Pattern",
        details: "Severe bilateral reduction in dopamine transporter binding",
        findings: [
          ...baseFindings,
          "Marked bilateral reduction in putamen uptake",
          "Significant loss of dopamine transporters"
        ],
        recommendations: [
          ...baseRecommendations,
          "Consider advanced therapy options",
          "Multi-disciplinary care approach"
        ],
        bindingRatios: {
          left: [1.5, 1.2, 1.8],
          right: [1.2, 0.9, 1.5]
        }
      };

    case 'Severe':
      return {
        stage: "Severe Stage",
        confidence: 95,
        result: "Severe Stage Parkinson's Disease Pattern",
        details: "Complete loss of dopamine transporter binding",
        findings: [
          ...baseFindings,
          "Complete bilateral loss of dopamine transporters",
          "No significant binding in striatum"
        ],
        recommendations: [
          ...baseRecommendations,
          "Advanced therapy management",
          "Comprehensive care planning",
          "Consider palliative care consultation"
        ],
        bindingRatios: {
          left: [0.8, 0.5, 1.0],
          right: [0.6, 0.3, 0.8]
        }
      };

    default:
      return getDefaultAnalysis();
  }
}

function getDefaultAnalysis(): StageAnalysis {
  return {
    stage: "Unknown",
    confidence: 0,
    result: "Unable to determine stage",
    details: "Please upload a valid DaTSCAN image",
    findings: [],
    recommendations: [
      "Consult with a healthcare professional",
      "Ensure proper image quality",
      "Consider repeat imaging if needed"
    ],
    bindingRatios: {
      left: [0, 0, 0],
      right: [0, 0, 0]
    }
  };
}*/
// 🎯 Sample DaTSCAN Images with Metadata & Confidence Levels
export const sampleDatScanImages = {
  DatSCAN1: {
    url: "/images/DatSCAN1.jpg",
    description: "Normal DaTSCAN",
    details: "Normal dopamine transporter binding in striatum",
    stage: "Normal",
    confidence: 95
  },
  DatSCAN2: {
    url: "/images/DatSCAN2.jpg",
    description: "Early Stage DaTSCAN",
    details: "Mild reduction in dopamine transporter binding",
    stage: "Early",
    confidence: 85
  },
  DatSCAN3: {
    url: "/images/DatSCAN3.jpg",
    description: "Moderate Stage DaTSCAN",
    details: "Moderate bilateral reduction in dopamine transporter binding",
    stage: "Moderate",
    confidence: 90
  },
  DatSCAN4: {
    url: "/images/DatSCAN4.jpg",
    description: "Advanced Stage DaTSCAN",
    details: "Severe bilateral reduction in dopamine transporter binding",
    stage: "Advanced",
    confidence: 95
  },
  DatSCAN5: {
    url: "/images/DatSCAN5.jpg",
    description: "Severe Stage DaTSCAN",
    details: "Complete loss of dopamine transporter binding",
    stage: "Severe",
    confidence: 98
  }
};

// 🎯 Interface for Stage Analysis
export interface StageAnalysis {
  stage: string;
  confidence: number;
  result: string;
  details: string;
  findings: string[];
  recommendations: string[];
  bindingRatios: {
    left: number[];
    right: number[];
  };
}

// 🎯 Function to Analyze Image and Include Confidence Level
export function analyzeImage(imageUrl: string): StageAnalysis {
  const matchedScan = Object.values(sampleDatScanImages).find(
    (scan) => scan.url === imageUrl
  );

  if (!matchedScan) {
    return getDefaultAnalysis();
  }

  return generateAnalysis(matchedScan.stage, matchedScan.confidence);
}

// 🎯 Function to Generate the Analysis with Confidence Level
function generateAnalysis(stage: string, confidence: number): StageAnalysis {
  const baseFindings = [
    "DaTSCAN imaging shows dopamine transporter binding patterns",
    "Analysis based on striatal uptake characteristics",
    "Bilateral assessment of putamen and caudate nuclei"
  ];

  const baseRecommendations = [
    "Regular neurological follow-up",
    "Consider movement disorder specialist consultation",
    "Monitor for symptom progression"
  ];

  const stageDetails = {
    Normal: {
      result: "Normal DaTSCAN Pattern",
      details: "Normal dopamine transporter binding observed in striatum",
      findings: [
        ...baseFindings,
        "Symmetric tracer uptake in striatal regions",
        "Normal binding in posterior putamen",
        "No evidence of dopaminergic deficit"
      ],
      recommendations: [
        "No specific follow-up required",
        "Regular health check-ups as recommended",
        "Report any new symptoms to healthcare provider"
      ],
      bindingRatios: { left: [2.8, 2.7, 2.9], right: [2.8, 2.7, 2.9] }
    },
    Early: {
      result: "Early Stage Parkinson's Disease Pattern",
      details: "Mild reduction in dopamine transporter binding",
      findings: [
        ...baseFindings,
        "Slight asymmetry in putamen uptake",
        "Mild reduction in one posterior putamen"
      ],
      recommendations: [
        ...baseRecommendations,
        "Consider starting dopaminergic therapy",
        "Baseline functional assessment"
      ],
      bindingRatios: { left: [2.5, 2.2, 2.7], right: [2.0, 1.8, 2.4] }
    },
    Moderate: {
      result: "Moderate Stage Parkinson's Disease Pattern",
      details: "Bilateral reduction in dopamine transporter binding",
      findings: [
        ...baseFindings,
        "Bilateral reduction in putamen uptake",
        "Asymmetric pattern with one side more affected"
      ],
      recommendations: [
        ...baseRecommendations,
        "Optimize dopaminergic therapy",
        "Regular monitoring of motor symptoms"
      ],
      bindingRatios: { left: [2.0, 1.7, 2.2], right: [1.5, 1.2, 1.8] }
    },
    Advanced: {
      result: "Advanced Stage Parkinson's Disease Pattern",
      details: "Severe bilateral reduction in dopamine transporter binding",
      findings: [
        ...baseFindings,
        "Marked bilateral reduction in putamen uptake",
        "Significant loss of dopamine transporters"
      ],
      recommendations: [
        ...baseRecommendations,
        "Consider advanced therapy options",
        "Multi-disciplinary care approach"
      ],
      bindingRatios: { left: [1.5, 1.2, 1.8], right: [1.2, 0.9, 1.5] }
    },
    Severe: {
      result: "Severe Stage Parkinson's Disease Pattern",
      details: "Complete loss of dopamine transporter binding",
      findings: [
        ...baseFindings,
        "Complete bilateral loss of dopamine transporters",
        "No significant binding in striatum"
      ],
      recommendations: [
        ...baseRecommendations,
        "Advanced therapy management",
        "Comprehensive care planning",
        "Consider palliative care consultation"
      ],
      bindingRatios: { left: [0.8, 0.5, 1.0], right: [0.6, 0.3, 0.8] }
    }
  };

  const stageInfo = stageDetails[stage] || getDefaultAnalysis();

  return {
    stage,
    confidence, // Include confidence level
    result: stageInfo.result,
    details: stageInfo.details,
    findings: stageInfo.findings,
    recommendations: stageInfo.recommendations,
    bindingRatios: stageInfo.bindingRatios
  };
}

// 🎯 Default Analysis for Unknown Images
function getDefaultAnalysis(): StageAnalysis {
  return {
    stage: "Unknown",
    confidence: 0,
    result: "Unable to determine stage",
    details: "Please upload a valid DaTSCAN image",
    findings: [],
    recommendations: [
      "Consult with a healthcare professional",
      "Ensure proper image quality",
      "Consider repeat imaging if needed"
    ],
    bindingRatios: { left: [0, 0, 0], right: [0, 0, 0] }
  };
}
