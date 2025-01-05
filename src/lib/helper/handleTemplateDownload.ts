export const handleTemplateDownload = async ({
  templateRef,
  candidateName,
}: {
  candidateName: string;
  templateRef: React.RefObject<HTMLDivElement>;
}) => {
  const html2canvas = (await import("html2canvas")).default;
  const jsPDF = (await import("jspdf")).default;

  if (templateRef.current) {
    const canvas = await html2canvas(templateRef.current, {
      scale: 2, // Higher scale for better quality
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("portrait", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0, 210, 297); // A4 dimensions in mm
    pdf.save(`${candidateName}.pdf`);
  }
};
