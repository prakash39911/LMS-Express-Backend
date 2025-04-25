import jsPDF from "jspdf";
import { SummaryDataType } from "../types";

export const GenerateSummaryPdf = async (summaryData: SummaryDataType) => {
  const doc = new jsPDF();

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
  doc.text(`Course Title: ${summaryData.section.course.title}`, 105, 20, {
    align: "center",
  });

  // Add section name
  doc.setFontSize(14);
  doc.text(`Section: ${summaryData.section.sectionName}`, 105, 30, {
    align: "center",
  });

  // Add video title
  doc.setFontSize(12);
  doc.text(`Video: ${summaryData.video_title}`, 105, 40, { align: "center" });

  doc.text("Summary", 20, 40);
  const today = new Date().toLocaleDateString();
  doc.text(`Generated on: ${today}`, 140, 40);

  // Add horizontal line
  doc.setDrawColor(0);
  doc.setLineWidth(0.5);
  doc.line(20, 45, 190, 45);

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
    doc.text(textLines, 20, 50);
  } else {
    doc.setFontSize(12);
    doc.text("No summary available for this video.", 20, 55);
  }

  //   // Add page number at the bottom
  //   const pageCount = doc.internal.pages.length;
  //   for (let i = 1; i <= pageCount; i++) {
  //     doc.setPage(i);
  //     doc.setFontSize(8);
  //     doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: "center" });
  //   }

  return Buffer.from(doc.output("arraybuffer"));
};
