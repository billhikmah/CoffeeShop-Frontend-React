import React from 'react';
import withNavigate from "../../helpers/withNavigate";
import withSearchParams from "../../helpers/withSearchParams";

function SortCategory(props) {
    const {navigate, searchParams} = props
  return (
    <form action="/action_page.php" className="product-sort">
        <label htmlFor="sort" className="product-sort-label">Category :</label>
        <select id="sort" name="sort"  className="product-sort-choices"
        onClick={(e) => {
            const keyword = searchParams.get("keyword");
            const sort = searchParams.get("sort");
            const order = searchParams.get("order");
            if (e.target.value === "1"){
                navigate(`/search?keyword=${keyword}&category=&sort=${sort}&order=${order}&page=1`)
            }
            if (e.target.value === "2"){
                navigate(`/search?keyword=${keyword}&category=1&sort=${sort}&order=${order}&page=1`)
            }
            if (e.target.value === "3"){
                navigate(`/search?keyword=${keyword}&category=2&sort=${sort}&order=${order}&page=1`)
            }
            if (e.target.value === "4"){
                navigate(`/search?keyword=${keyword}&category=3&sort=${sort}&order=${order}&page=1`)
            }
        }}>
            <option value="1">All Product</option>
            <option value="2">Coffe</option>
            <option value="3">Non Coffee</option>
            <option value="4">Food</option>
        </select>
    </form>
  )
}

export default withSearchParams(withNavigate(SortCategory))