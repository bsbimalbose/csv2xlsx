import Excel from "exceljs/dist/es5/exceljs.browser";

export const downloadExcel = ({ header, tableBody }) => {
  var workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet("My Sheet");
  if (header) {
    worksheet.columns = header.reduce((acc, current) => {
      acc.push({ header: current });
      return acc;
    }, []);

    let headerRow = worksheet.getRow(1);
    for (let i = 1; i <= header.length; i++) {
      headerRow.getCell(i).fill = {
        type: "pattern",
        pattern: "gray125",
        bgColor: { argb: "FFFF0000" }
      };
    }
  }

  if (tableBody)
    tableBody.forEach(row => {
      worksheet.addRow(row);
    });
  workbook.xlsx.writeBuffer().then(function(data) {
    var blob = new Blob([data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
    const url = window.URL.createObjectURL(blob);
    const tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.setAttribute("download", "filename.xlsx");
    tempLink.click();
  });
};
