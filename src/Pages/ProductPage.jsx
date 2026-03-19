import { useEffect, useState } from "react";
import { getProductData } from "../API/postApi";
import "./pageLoading.css";
import ProductCard from "./productCard";

function ProductPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  async function getingProductData() {
    try {
      let response = await getProductData({ pageNumber });
      setLoading(false);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getingProductData();
    }, 5000);
  }, [pageNumber]);

  useEffect(() => {
    setLoading(true)
  },[pageNumber]);


  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <>
      <div className="parentProduct">
        <h1 className="text-5xl font-bold text-center">Product Page</h1>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4 p-10 mt-6">
            {data.map((curEle) => {
              return (
                <>
                  <ProductCard curEle={curEle} key={curEle.id} />
                </>
              );
            })}
          </div>
          <div className="flex justify-center gap-2">
            <button 
                onClick={() => setPageNumber(pageNumber + 1)}
                className="p-4 border-2 border-black rounded-full"
            >
                Next
            </button>

            <p className="text-4xl font-bold">{pageNumber}</p>

            <button 
            onClick={() => setPageNumber(pageNumber - 1)}
                disabled = {pageNumber == 1}
                className="p-4 border-2 border-black rounded-full"
            >
                Prev
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
