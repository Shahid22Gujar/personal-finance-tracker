import { useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import Button from "../atoms/Button";
import DateRangePicker from "../molecules/DateRangerPicker";
import ReportViewer from "../organisms/ReportViewer";
//third party library
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
export default function Reports() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportData, setReportData] = useState([
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
  ]);

  const handleDateChange = (type, value) => {
    if (type === "start") setStartDate(value);
    else setEndDate(value);
  };

  const handleExport = (format) => {
    if (format === "PDF") {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.setTextColor("#2c3e50");
      doc.text("Personal Finance Tracker - Report", 14, 20);

      doc.setFontSize(12);
      doc.setTextColor("#34495e");
      doc.text(
        `Report Period: ${startDate || "N/A"} - ${endDate || "N/A"}`,
        14,
        30
      );

      const tableData = reportData.map((row) => [row.name, row.value]);

      autoTable(doc, {
        head: [
          [
            {
              content: "Month",
              styles: {
                fontStyle: "bold",
                fillColor: "#2980b9",
                textColor: "#ffffff",
              },
            },
            {
              content: "Value",
              styles: {
                fontStyle: "bold",
                fillColor: "#2980b9",
                textColor: "#ffffff",
              },
            },
          ],
        ],
        body: tableData,
        startY: 40,
        theme: "grid",
        styles: {
          font: "helvetica",
          fontSize: 11,
          textColor: "#2c3e50",
          lineColor: "#bdc3c7",
        },
      });

      doc.save("report.pdf");
    } else if (format === "CSV") {
      const csvContent = [
        "name,value",
        ...reportData.map((row) => `${row.name},${row.value}`),
      ].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "report.csv";
      link.click();
    }
  };
  return (
    <MainTemplate>
      <h2 className="dashboard-title">Reports</h2>
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onChange={handleDateChange}
      />
      <ReportViewer data={reportData} />
      <div className="export-buttons">
        <Button label="Export as PDF" onClick={() => handleExport("PDF")} />
        <Button label="Export as CSV" onClick={() => handleExport("CSV")} />
      </div>
    </MainTemplate>
  );
}
