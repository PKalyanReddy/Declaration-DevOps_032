import { Button } from "@chakra-ui/react";
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';

export const ExportButton= ({ elementId }) => {
  const exportToPdf = async () => {
    const element = document.getElementById(elementId);
    console.log(element);
    if (!element) return;

    const pdf = new jsPDF('p', 'pt', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    try {
      const canvas = await htmlToImage.toCanvas(element);
      const imgData = canvas.toDataURL('image/png');

      pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
      pdf.save('portfolio.pdf');
    } catch (error) {
      console.log("Error in PDF Generating", error);
    }
  };

  return (
    <Button colorScheme="blue" size={'sm'} onClick={exportToPdf} m={"20px"} zIndex={1}>
      Export as PDF
    </Button>
  );
}
