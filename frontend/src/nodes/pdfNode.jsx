import Node from "../Components/Node/Node";
import { pdfConfig } from "../configs/pdf.config";

export const PDFNode = (props) => {
  return <Node {...props} config={pdfConfig} />;
};