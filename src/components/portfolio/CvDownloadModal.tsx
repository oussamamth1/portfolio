import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

interface CvDownloadModalProps {
  onClose: () => void;
}

const CvDownloadModal: React.FC<CvDownloadModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-sm mx-4">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Download CV</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <a href="/Oussama_Methnani.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download CV (PDF)
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CvDownloadModal;
