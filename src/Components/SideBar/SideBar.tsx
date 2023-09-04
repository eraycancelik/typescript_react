import style from "./SideBar.module.css";
import React, { useState } from "react";
import Category from "./Category";
type CategoriesProps = {
  categories: string[];
};
const SideBar: React.FC<CategoriesProps> = (props) => {
  const [initialCategory, setInitialCategory] = useState<string[]>(
    props.categories
  );
  const [categoryHandler, setCategoryHandler] = useState<string[]>([]);

  const onRemoveCategory = (category: string): void => {
    if (!categoryHandler.includes(category)) {
      setCategoryHandler((prevCategoryHandler) => [
        ...prevCategoryHandler,
        category,
      ]);
      setInitialCategory((prevInitialCategory) =>
        prevInitialCategory.filter((cate) => cate !== category)
      );
    }
  };
  const onBackCategory = (category: string): void => {
    if (!initialCategory.includes(category)) {
      setInitialCategory((prevInitialCategory) => [
        ...prevInitialCategory,
        category,
      ]);
      setCategoryHandler((prevCategoryHandler) =>
        prevCategoryHandler.filter((cate) => cate !== category)
      );
    }
  };
  const filter = () => {
    console.clear();
    console.log("categoryHandler");
    console.log(categoryHandler);
    console.log("initialCategory");
    console.log(initialCategory);
  };

  let filteredArea = categoryHandler.map((category, index) => (
    <p
      onClick={() => onBackCategory(category)}
      className={style.category2}
      key={index}
    >
      {category} <span className={style.back}>x</span>
    </p>
  ));
  let categoriesArea = initialCategory.map((category, index) => (
    <Category
      className={style.category}
      key={index}
      cate={category}
      index={index}
      onClick={() => onRemoveCategory(category)}
    />
  ));
  return (
    <div className={style.sideBar}>
      <div className={style.fier}>
        <div className={style.listFiltered}>
          <p>Filtered:</p>
          <div className={style.mainArea}>
            {categoryHandler.length === 0 ? (
              <p className={style.message}>no filtered category</p>
            ) : (
              filteredArea
            )}
          </div>
        </div>
        <p>Shop by Category:</p>
        <div className={style.categoryFilter}>
          <div className={style.list2}>
            <div className={style.mainArea}>
              {categoriesArea.length === 0 ? (
                <p className={style.message}>all categories filtered</p>
              ) : (
                categoriesArea
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={style.priceInput}>
        <p className={style.priceArea}>Shop by Price</p>
        <div className={style.priceFilter}>
          <div className={style.list}>
            <input
              className={style.min}
              type="number"
              placeholder="minimum price"
            />
            <span>TL</span>
            <input
              className={style.max}
              type="number"
              placeholder="maximum price"
            />{" "}
            <span>TL</span>
          </div>
        </div>
        <div className={style.filterArea}>
          <button onClick={filter} className={style.filterButton}>
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
