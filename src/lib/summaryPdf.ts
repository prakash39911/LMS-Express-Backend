import jsPDF from "jspdf";
import { SummaryDataType } from "../types";

export const GenerateSummaryPdf = async (summaryData: SummaryDataType) => {
  const doc = new jsPDF();
  let yPos = 20; // Track vertical position

  // Set document properties
  doc.setProperties({
    title: `Summary - ${summaryData.video_title}`,
    subject: `Summary for ${summaryData.section.course.title}`,
    author: "Generated Summary",
    creator: "Summary Generator Tool",
  });

  // Add styling
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);

  // Add course title at the top
  doc.text(`Course Title: ${summaryData.section.course.title}`, 105, yPos, {
    align: "center",
  });
  yPos += 10;

  // Add section name
  doc.setFontSize(14);
  doc.text(`Section: ${summaryData.section.sectionName}`, 105, yPos, {
    align: "center",
  });
  yPos += 10;

  // Add video title
  doc.setFontSize(12);
  doc.text(`Video: ${summaryData.video_title}`, 105, yPos, { align: "center" });

  doc.text("Summary", 20, yPos);
  const today = new Date().toLocaleDateString();
  doc.text(`Generated on: ${today}`, 140, yPos);
  yPos += 10;

  // Add horizontal line
  doc.setDrawColor(0);
  doc.setLineWidth(0.5);
  doc.line(20, yPos, 190, yPos);
  yPos += 10;

  // Process the HTML content
  if (summaryData.transcription_summary) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    const processHtmlToText = (html: string): string => {
      // Replace headers with newlines
      html = html.replace(/<h[1-6]>(.*?)<\/h[1-6]>/g, "$1");

      // Replace paragraphs with double newlines
      html = html.replace(/<p>(.*?)<\/p>/g, "\n$1");

      // Handle lists
      html = html.replace(/<ul>(.*?)<\/ul>/gs, "\n$1");
      html = html.replace(/<ol>(.*?)<\/ol>/gs, "\n$1");
      html = html.replace(/<li>(.*?)<\/li>/g, "• $1");

      // Handle bold and italic
      html = html.replace(/<(b|strong)>(.*?)<\/\1>/g, "$2");
      html = html.replace(/<(i|em)>(.*?)<\/\1>/g, "$2");

      // Handle code blocks
      html = html.replace(/<code>(.*?)<\/code>/g, "'$1'");

      // Remove other tags but keep content
      html = html.replace(/<[^>]+>/g, "");

      // Clean up excessive newlines
      html = html.replace(/\n\s*\n/g, "\n\n");
      return html.trim();
    };

    const plainText = processHtmlToText(summaryData.transcription_summary);
    const textLines = doc.splitTextToSize(plainText, 170);

    // Function to add text with page breaks
    const addTextWithPageBreaks = (lines: string[], startY: number) => {
      const pageHeight = doc.internal.pageSize.height;
      const margin = 20; // bottom margin

      for (const line of lines) {
        // Check if we need a new page
        if (yPos > pageHeight - margin) {
          doc.addPage();
          yPos = 20; // Reset Y position for new page
        }

        doc.text(line, 20, yPos);
        yPos += 7; // Line height (adjust as needed)
      }
    };

    addTextWithPageBreaks(textLines, yPos);
  } else {
    doc.setFontSize(12);
    doc.text("No summary available for this video.", 20, yPos);
  }

  // Add page numbers
  const pageCount = (doc.internal as any).getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.text(`Page ${i} of ${pageCount}`, 105, 285, { align: "center" });
  }

  return Buffer.from(doc.output("arraybuffer"));
};
