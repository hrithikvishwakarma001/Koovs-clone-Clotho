import { useEffect, useState } from "react";
import { useSearchParams, } from "react-router-dom";
import {Paginate} from "../component/Paginate"

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialColor = searchParams.getAll("color");
  const initialOrder = searchParams.get("order");
  const initialPage = searchParams.get("page");

  const [color, setColor] = useState(initialColor || []);
  const [order, setOrder] = useState(initialOrder || "");
  const [page, setPage] = useState(+initialPage || 1);

  const handleChange = (e) => {
    let newColor = [...color];
    const value = e.target.value;
    if (newColor.includes(value)) {
      newColor = newColor.filter((el) => el !== value);
    } else {
      newColor.push(value);
    }

    setColor(newColor);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    let params = {
      color,
      page,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [color, order, page]);

  const totalPages = 7;

  return (
    <>
      <h1>Filter by</h1>

      <div>
        <input
          type="checkbox"
          value={"red"}
          onChange={handleChange}
          checked={color.includes("red")}
        />
        <label>Red</label>
      </div>

      <div>
        <input
          type="checkbox"
          value={"blue"}
          onChange={handleChange}
          checked={color.includes("blue")}
        />
        <label>Blue</label>
      </div>

      <div>
        <input
          type="checkbox"
          value={"green"}
          onChange={handleChange}
          checked={color.includes("green")}
        />
        <label>Green</label>
      </div>

      <div>
        <label>Sort by:</label>
        <select onChange={handleSort} value={order}>
          <option value="">None</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

     
    </>
  );
};
