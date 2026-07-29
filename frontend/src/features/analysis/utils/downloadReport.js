import jsPDF from "jspdf";

export function downloadReport(report) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  /* ===========================================================
     DESIGN TOKENS
  =========================================================== */

  const COLORS = {
    primary: [56, 75, 143],
    heading: [24, 32, 42],
    body: [94, 103, 115],
    border: [220, 227, 235],
    background: [245, 247, 250],
    white: [255, 255, 255],
    success: [60, 141, 104],
    warning: [215, 155, 47],
    danger: [201, 92, 84],
  };

  const PAGE_WIDTH = doc.internal.pageSize.getWidth();
  const PAGE_HEIGHT = doc.internal.pageSize.getHeight();

  const LEFT = 18;
  const RIGHT = PAGE_WIDTH - 18;
  const CONTENT_WIDTH = RIGHT - LEFT;

  let y = 20;

  /* ===========================================================
     HELPERS
  =========================================================== */

  function newPage(spaceNeeded = 20) {
    if (y + spaceNeeded > PAGE_HEIGHT - 20) {
      doc.addPage();
      y = 20;
    }
  }

  function divider() {
    doc.setDrawColor(...COLORS.border);
    doc.line(LEFT, y, RIGHT, y);
    y += 8;
  }

  function sectionLabel(text) {
    newPage(15);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.primary);

    doc.text(text.toUpperCase(), LEFT, y);

    y += 5;

    doc.setDrawColor(...COLORS.border);
    doc.line(LEFT, y, RIGHT, y);

    y += 8;
  }

  function paragraph(text) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11.5);
    doc.setTextColor(...COLORS.body);

    const lines = doc.splitTextToSize(text || "", CONTENT_WIDTH);

    doc.text(lines, LEFT, y);

    y += lines.length * 6 + 2;
  }

  function riskColor(level) {
    switch ((level || "").toLowerCase()) {
      case "low":
        return COLORS.success;

      case "medium":
      case "moderate":
        return COLORS.warning;

      default:
        return COLORS.danger;
    }
  }

  /* ===========================================================
     HEADER
  =========================================================== */

  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(...COLORS.primary);

  doc.text("SAMVID", LEFT, y);

  doc.setFontSize(20);
  doc.setTextColor(...COLORS.heading);

  doc.text("Contract Intelligence Report", LEFT, y + 10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.body);

  doc.text(
    "AI-powered legal contract analysis",
    LEFT,
    y + 18
  );

  y += 28;

  divider();

  /* ===========================================================
     DOCUMENT INFORMATION
  =========================================================== */

  const generatedDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.primary);

  doc.text("DOCUMENT", LEFT, y);
  doc.text("GENERATED", 120, y);

  y += 6;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.heading);

  doc.text(report.fileName || "-", LEFT, y);
  doc.text(generatedDate, 120, y);

  y += 12;

  divider();

  /* ===========================================================
     METRICS
  =========================================================== */

  const CARD_W = 54;
  const CARD_H = 33;

  function metricCard(x, title, value, color) {

    doc.setFillColor(...COLORS.background);
    doc.setDrawColor(...COLORS.border);

    doc.roundedRect(
      x,
      y,
      CARD_W,
      CARD_H,
      3,
      3,
      "FD"
    );

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.primary);

    doc.text(
      title.toUpperCase(),
      x + 4,
      y + 7
    );

    doc.setFontSize(20);
    doc.setTextColor(...color);

    doc.text(
      String(value),
      x + 4,
      y + 21
    );
  }

  metricCard(
    LEFT,
    "Overall Risk",
    report.overallRisk,
    riskColor(report.overallRisk)
  );

  metricCard(
    LEFT + 58,
    "Risk Score",
    `${report.riskScore}/100`,
    riskColor(report.overallRisk)
  );

  metricCard(
    LEFT + 116,
    "AI Confidence",
    `${report.confidence}%`,
    COLORS.primary
  );

  y += CARD_H + 12;
    /* ===========================================================
       AI SUMMARY
    =========================================================== */

    sectionLabel("AI Summary");

    paragraph(
      report.summary ||
        "No AI summary was generated for this document."
    );

    divider();
  /* =====================================================
      CLAUSE BREAKDOWN
  ===================================================== */
  /* ===========================================================
     CLAUSE REVIEW
  =========================================================== */

  sectionLabel("Clause Review");

  (report.clauses || []).forEach((clause, index) => {

    const explanation =
      doc.splitTextToSize(
        clause.explanation || "No explanation available.",
        CONTENT_WIDTH - 20
      );

    const suggestion =
      doc.splitTextToSize(
        clause.recommendation ||
          clause.suggestedAction ||
          "No suggested action available.",
        CONTENT_WIDTH - 20
      );

    const cardHeight =
      46 +
      explanation.length * 5 +
      suggestion.length * 5;

    newPage(cardHeight + 12);

    const cardTop = y;

    /* Card */

    doc.setFillColor(...COLORS.white);
    doc.setDrawColor(...COLORS.border);

    doc.roundedRect(
      LEFT,
      cardTop,
      CONTENT_WIDTH,
      cardHeight,
      3,
      3,
      "FD"
    );

    /* Accent */

    const accent = riskColor(clause.risk);

    doc.setFillColor(...accent);

    doc.rect(
      LEFT,
      cardTop,
      3,
      cardHeight,
      "F"
    );

    /* Clause label */

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.primary);

    doc.text(
      `CLAUSE ${index + 1}`,
      LEFT + 8,
      cardTop + 8
    );

    /* Title */

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(...COLORS.heading);

    doc.text(
      clause.name || "Unnamed Clause",
      LEFT + 8,
      cardTop + 18
    );

    /* Risk badge */

    const badgeWidth = 26;

    doc.setFillColor(...COLORS.background);
    doc.setDrawColor(...accent);

    doc.roundedRect(
      RIGHT - badgeWidth,
      cardTop + 5,
      badgeWidth,
      8,
      2,
      2,
      "FD"
    );

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...accent);

    doc.text(
      String(clause.risk || "Unknown").toUpperCase(),
      RIGHT - badgeWidth + 4,
      cardTop + 10.5
    );

    /* Explanation */

    let currentY = cardTop + 30;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.primary);

    doc.text(
      "EXPLANATION",
      LEFT + 8,
      currentY
    );

    currentY += 6;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.8);
    doc.setTextColor(...COLORS.body);

    doc.text(
      explanation,
      LEFT + 8,
      currentY
    );

    currentY += explanation.length * 5 + 4;

    /* Divider */

    doc.setDrawColor(...COLORS.border);

    doc.line(
      LEFT + 8,
      currentY,
      RIGHT - 8,
      currentY
    );

    currentY += 7;

    /* Suggested Action */

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.primary);

    doc.text(
      "SUGGESTED ACTION",
      LEFT + 8,
      currentY
    );

    currentY += 6;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.8);
    doc.setTextColor(...COLORS.body);

    doc.text(
      suggestion,
      LEFT + 8,
      currentY
    );

    y = cardTop + cardHeight + 10;

  });

  divider();
  /* =====================================================
      MISSING CLAUSES
  ===================================================== */
  /* ===========================================================
     MISSING CLAUSES
  =========================================================== */

  sectionLabel("Missing Clauses");

  if (
    report.missingClauses &&
    report.missingClauses.length > 0
  ) {

    report.missingClauses.forEach((item) => {

      newPage(12);

      doc.setFillColor(...COLORS.success);

      doc.circle(
        LEFT + 2,
        y - 1.5,
        1.4,
        "F"
      );

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(...COLORS.body);

      const lines = doc.splitTextToSize(
        item,
        CONTENT_WIDTH - 12
      );

      doc.text(
        lines,
        LEFT + 8,
        y
      );

      y += lines.length * 6 + 3;

    });

  } else {

    doc.setFont("helvetica", "italic");
    doc.setFontSize(11);
    doc.setTextColor(...COLORS.body);

    doc.text(
      "No critical missing clauses were detected.",
      LEFT,
      y
    );

    y += 10;
  }

  divider();

  /* ===========================================================
     NEGOTIATION SUGGESTIONS
  =========================================================== */

  sectionLabel("Negotiation Suggestions");

  if (
    report.negotiationTips &&
    report.negotiationTips.length > 0
  ) {

    report.negotiationTips.forEach((tip) => {

      newPage(12);

      doc.setFillColor(...COLORS.primary);

      doc.circle(
        LEFT + 2,
        y - 1.5,
        1.4,
        "F"
      );

      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(...COLORS.body);

      const lines = doc.splitTextToSize(
        tip,
        CONTENT_WIDTH - 12
      );

      doc.text(
        lines,
        LEFT + 8,
        y
      );

      y += lines.length * 6 + 3;

    });

  } else {

    doc.setFont("helvetica", "italic");
    doc.setFontSize(11);
    doc.setTextColor(...COLORS.body);

    doc.text(
      "No negotiation suggestions were generated.",
      LEFT,
      y
    );

    y += 10;
  }

  divider();
    /* ===========================================================
       DISCLAIMER
    =========================================================== */

    sectionLabel("Disclaimer");

    paragraph(
      "This report has been generated using Samvid's AI-powered contract analysis engine. It is intended to help users understand contractual language, identify potential risks, and highlight areas that may require further review. This report is for informational purposes only and does not constitute legal advice. Users should consult a qualified legal professional before making legally binding decisions."
    );

    divider();

    /* ===========================================================
       FOOTER
    =========================================================== */

    const totalPages = doc.getNumberOfPages();

    for (let page = 1; page <= totalPages; page++) {

      doc.setPage(page);

      doc.setDrawColor(...COLORS.border);

      doc.line(
        LEFT,
        PAGE_HEIGHT - 14,
        RIGHT,
        PAGE_HEIGHT - 14
      );

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(...COLORS.body);

      doc.text(
        "Generated by Samvid",
        LEFT,
        PAGE_HEIGHT - 8
      );

      doc.text(
        `Page ${page} of ${totalPages}`,
        RIGHT - 22,
        PAGE_HEIGHT - 8
      );
    }

    /* ===========================================================
       SAVE
    =========================================================== */

    const fileName =
      (report.fileName || "Contract")
        .replace(/\.[^/.]+$/, "");

    doc.save(
      `${fileName}_Samvid_Report.pdf`
    );
  }