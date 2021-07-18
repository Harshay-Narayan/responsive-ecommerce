import React, { useCallback, useEffect,useState } from 'react'
import dropdown from "../../assets/dropdown.svg";
import classes from './ProductHeader.module.css'
import useHttp from '../../customHooks/use-http';
const ProductHeader = (props) => {
const [categoryList, setCategoryList] = useState([])

  const storeCategories = useCallback((categories)=>{
    const category_array = []
    for(const keys in categories){
      category_array.push(categories[keys])
    }
    setCategoryList(category_array)
  },[]);
  const {isLoading,hasError,sendRequest} = useHttp(storeCategories);

  useEffect(() => {
    console.log("Category Fetching")
    sendRequest({url:'https://responsive-react-ecommerce-default-rtdb.firebaseio.com/categories.json'})
  }, [sendRequest])

  const selectCategoryHandler=(cat)=>{
    props.getCategory(cat)
  }
    return (
        <div className={classes["dropdown-container"]}>
        <div className={classes["product-category"]}>
          Product Category
          <img
            className={classes["dropdown-icon"]}
            src={dropdown}
            alt="issue"
          />
          <div className={classes["category-list"]}>
            {isLoading && !hasError?<ul><li>...Loading</li></ul>:<ul>
              {categoryList.map((cat)=>{ return <li onClick={selectCategoryHandler.bind(null,cat)} key={cat}>{cat}</li>})}
            </ul>
            }
             {(!isLoading&&hasError)&&<ul><li style={{color:'green'}}>!Error Loading Categories!</li></ul>}
          </div>
        </div>
      </div>
    )
}

export default ProductHeader;


