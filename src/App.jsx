import RecipePage from "./components/RecipePage/RecipePage";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [loader, setLoader] = useState(false);
  const ref = useRef();

  const downloadPDF = () => {
    const capture = ref.current;
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", [1000, 2000]);
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("recipe.pdf");
    });
  };
  return (
    <div className="mx-auto max-w-7xl bg-gray-100" ref={ref}>
      <RecipePage />
      <div className="flex justify-center py-10">
        <button
          onClick={downloadPDF}
          disabled={!(loader === false)}
          className="bg-red-500 px-4 py-2 rounded-lg text-white md:block hidden">
          {loader ? <span>Downloading</span> : <span>Download</span>}
        </button>
      </div>
    </div>
  );
}

export default App;
