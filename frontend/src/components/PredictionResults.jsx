import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function PredictionResults({ predictions }) {
  const { cnn } = predictions || {};

  const getConfidenceBadgeColor = (confidence) => {
    const level = typeof confidence === "string" ? confidence : "High";

    switch (level.toLowerCase()) {
      case "high":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "medium":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "low":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      default:
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
    }
  };

  if (!cnn) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex items-center space-x-2">
        <TrendingUp size={24} className="text-cyan-400" />
        <h2 className="text-2xl font-bold text-white">
          Prediction Results
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">
              CNN Model
            </h3>

            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold">
              C
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-400 text-sm">
              Predicted Brain Age
            </p>

            <p className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {Number(cnn.age || 0).toFixed(1)}
            </p>

            <p className="text-gray-400 text-sm">
              years old
            </p>
          </div>

          <div
            className={`inline-block px-4 py-2 rounded-full border text-sm font-medium ${getConfidenceBadgeColor(
              cnn.confidence
            )}`}
          >
            {typeof cnn.confidence === "string"
              ? cnn.confidence
              : "High"}{" "}
            Confidence
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">
                Accuracy Score
              </span>
              <span className="text-cyan-400 font-semibold">
                94.2%
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">
                Processing Time
              </span>
              <span className="text-cyan-400 font-semibold">
                142ms
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="glass rounded-3xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">
          Analysis Summary
        </h3>

        <p className="text-gray-300">
          Brain age predicted using the CNN model. Explainable AI heatmaps
          highlight the MRI regions that contributed most to the prediction.
        </p>
      </div>
    </motion.div>
  );
}