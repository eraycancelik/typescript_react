import style from "./SideBar.module.css";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import PriceSlider from "./PriceSlider";
import { categories } from "../../Data/categories";
import { useToggleStore } from "../../states/clearState";
import { open } from "fs/promises";

type CategoriesProps = {
  clearAllFilters: () => void;
  pricesList: number[];
  categoryHandler: (category: string[]) => void;
  onPriceHolder: (values: number[]) => void;
};
const SideBar: React.FC<CategoriesProps> = (props) => {
  const { toggle, closeToggle, openToggle } = useToggleStore((state: any) => ({
    toggle: state.toggle,
    closeToggle: state.closeToggle,
    openToggle: state.openToggle,
  }));

  const [initialCategory, setInitialCategory] = useState<string[]>(categories);
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
  let priceValues = props.pricesList;
  useEffect(() => {
    priceValues = props.pricesList;
    openToggle();
  }, [props.pricesList]);
  useEffect(() => {
    closeToggle();
  }, []);

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
  // const increasePopulation = useBearStore(
  //   (state: any) => state.increasePopulation
  // );
  const [priceValueHolder, setPriceValueHolder] = useState<number[]>([
    priceValues[0],
    priceValues[priceValues[1]],
  ]);
  const onPriceHolder = (values: number[]) => {
    setPriceValueHolder(values);
  };
  const filter = async () => {
    props.onPriceHolder(priceValueHolder);
    props.categoryHandler(categoryHandler);
  };
  const clearFilter = () => {
    setCategoryHandler([]);
    props.clearAllFilters();
    closeToggle();
  };
  return (
    <div className={style.sideBar}>
      <div className={style.fier}>
        <div className={style.listFiltered}>
          {toggle === false ? (
            <p>Filtered:</p>
          ) : (
            <div className={style.filteredArea}>
              <p>Filtered:</p>
              <button onClick={clearFilter} className={style.clearFilter}>
                Clear Filters
              </button>
            </div>
          )}
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
            <PriceSlider
              priceValuesHolder={onPriceHolder}
              priceValues={priceValues}
            />
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
