import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Paginate } from "../component/Paginate";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialColor = searchParams.getAll("color");
  const initialOrder = searchParams.get("order");
  const initialPage = searchParams.get("page");

  const [color, setColor] = useState(initialColor || []);
  const [order, setOrder] = useState(initialOrder || "");
  const [page, setPage] = useState(+initialPage || 1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    let newColor = [...color];
  
    if (newColor.includes(value)) {
      newColor = newColor.filter((el) => el !== value);
    } else {
      newColor.push(value);
    }
  
    // Get all the articles that match the selected colors
    const articles = data.filter((article) => {
      return article.swatches.some((swatch) => {
        return newColor.includes(swatch.colorName);
      });
    });
  
    setArticles(articles);
    setColor(newColor);
  };
  

  const handleSort = (e) => {
    const currentPage = page; // store the current page number
    setOrder(e.target.value);
    setPage(currentPage); // set the page to the current page number
  };
  
  

  

  useEffect(() => {
    let params = {
      color,
      page,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [color, order]);

  const totalPages = 7;

  const handleFilterClick = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div style={{ display: "flex",margin:"50px 0px 0px 70px",gap:"15px" }}>
      <div className="filter-button" onClick={handleFilterClick}>
        Filter 
      </div>
      <Drawer isOpen={drawerOpen} placement="left" onClose={handleCloseDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter by</DrawerHeader>

          <DrawerBody>
            <div>
              <input
                type="checkbox"
                value={"Red"}
                onChange={handleChange}
                checked={color.includes("Red")}
              />
              <label>Red</label>
            </div>

            <div>
              <input
                type="checkbox"
                value={"Blue"}
                onChange={handleChange}
                checked={color.includes("blue")}
              />
              <label>Blue</label>
            </div>

            <div>
              <input
                type="checkbox"
                value={"Green"}
                onChange={handleChange}
                checked={color.includes("green")}
              />
              <label>Green</label>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <button onClick={handleCloseDrawer}>Close</button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div style={{ marginLeft: "10px" }}>
        <label>Sort by:</label>
        <select onChange={handleSort} value={order}>
          <option value="">Featured</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};
