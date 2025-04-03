import { jsPDF } from "jspdf";
import { convertDate } from "./utilityFunctions";

export const handleGeneratePdf = async (invoiceData: any) => {
  const doc = new jsPDF();

  // Add company logo/header
  doc.setFontSize(25);
  doc.text("Invoice", 105, 20, { align: "center" });

  // Add a line
  doc.setLineWidth(0.5);
  doc.line(20, 23, 190, 23);

  // Invoice details section
  doc.setFontSize(14);
  doc.text("Bill From: LMS", 20, 30);
  doc.setFontSize(10);
  doc.text("Repeat Colony, Jamshedpur, Jharkhand, india", 20, 35);
  doc.text("Phone: (+91) 4581000283 | Email: LMS@info.com", 20, 40);

  doc.text(`Invoice Number: ${invoiceData.invoice_name}`, 20, 47);
  doc.text(`Issue Date: ${convertDate(invoiceData.created_at)}`, 20, 52);

  // Customer details
  doc.setFontSize(14);
  doc.text("Bill To:", 130, 30);
  doc.setFontSize(10);
  doc.text(`${invoiceData.email}`, 130, 35);
  doc.text(`${invoiceData.contact}`, 130, 40);

  // Table headers
  doc.setFillColor(173, 216, 230);
  doc.rect(20, 62, 170, 8, "F");
  doc.setFontSize(10);
  doc.text("Course Name", 22, 67);
  doc.text("Unit", 100, 67);
  doc.text("Amount", 160, 67);

  // Table content

  doc.text(invoiceData.courseName, 22, 75);
  doc.text("1", 100, 75);
  doc.text(`Rs.${invoiceData.amount.toFixed(2)}`, 160, 75);

  // Add a line
  doc.setLineWidth(0.5);
  doc.line(20, 80, 190, 80);

  // Totals
  doc.text("Total:", 155, 86);
  doc.text(`Rs.${invoiceData.amount.toFixed(2)}`, 165, 86);

  // Footer
  doc.setFontSize(10);
  doc.text("Thank you for your Support!", 105, 250, { align: "center" });

  // Convert the PDF to a buffer
  const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
  return pdfBuffer;
};
