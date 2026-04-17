import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, X, FileText, Eye, User, Briefcase, GraduationCap, Code2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface CvDownloadModalProps {
  onClose: () => void;
}

const highlights = [
  { icon: User, label: "Profile", value: "Mobile Developer" },
  { icon: Briefcase, label: "Experience", value: "4+ Years" },
  { icon: Code2, label: "Stack", value: "Flutter · NestJS" },
  { icon: GraduationCap, label: "Education", value: "Master's Degree" },
];

const CvDownloadModal = ({ onClose }: CvDownloadModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-md glass rounded-2xl shadow-elevated border border-violet/20 overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Violet glow top bar */}
          <div className="h-0.5 w-full bg-gradient-violet" />

          {/* Ambient glow */}
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "hsl(262 83% 68%)" }}
          />

          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet/15 border border-violet/20 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-violet" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-foreground">Curriculum Vitae</h2>
                  <p className="text-xs text-muted-foreground font-mono">Oussama_Methnani.pdf</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-all duration-fast"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* CV Highlights */}
            <div className="grid grid-cols-2 gap-2">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-elevated border border-border/50"
                >
                  <div className="w-7 h-7 rounded-lg bg-violet/10 flex items-center justify-center shrink-0">
                    <Icon className="h-3.5 w-3.5 text-violet" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-mono">{label}</p>
                    <p className="text-xs font-semibold text-foreground truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Preview thumbnail — links to /cv */}
            <Link to="/cv" onClick={onClose} className="block">
              <div className="relative rounded-xl overflow-hidden border border-violet/20 bg-surface-elevated group cursor-pointer hover:border-violet/40 transition-colors">
                <iframe
                  src="/cv"
                  className="w-full h-52 pointer-events-none scale-[0.6] origin-top-left"
                  style={{ width: "167%", height: "calc(52/0.6 * 1px)" }}
                  title="CV Preview"
                  scrolling="no"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-mono text-muted-foreground">Click to view full CV</span>
                  <ExternalLink className="h-3.5 w-3.5 text-violet" />
                </div>
              </div>
            </Link>

            {/* Actions */}
            <div className="flex gap-3">
              <Link to="/cv" onClick={onClose} className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-violet/30 text-violet hover:bg-violet/10 hover:border-violet font-medium transition-all duration-normal"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View CV
                </Button>
              </Link>
              <a
                href="/Oussama_Methnani.pdf"
                download="Oussama_Methnani.pdf"
                className="flex-1"
              >
                <Button
                  className="w-full bg-violet hover:bg-violet-bright text-white font-semibold shadow-glow transition-all duration-normal"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CvDownloadModal;
