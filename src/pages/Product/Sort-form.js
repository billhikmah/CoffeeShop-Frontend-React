import React from 'react';
import withNavigate from "../../helpers/withNavigate";
import withSearchParams from "../../helpers/withSearchParams";

function SortForm(props) {
    const {searchParams, setSearchParams} = props
    return (
        <div className="product-sort-container">
            <form action="/action_page.php" className="product-sort">
                <label htmlFor="sort" className="product-sort-label"></label>
                <select id="sort" name="sort"  className="product-sort-choices"
                onClick={(e) => {
                    if (e.target.value === "1"){
                        setSearchParams({
                            category: searchParams.get("category"),
                            sort: "name",
                            order: searchParams.get("order"),
                            page: 1
                        })
                    }
                    if (e.target.value === "2"){
                        setSearchParams({
                            category: searchParams.get("category"),
                            sort: "price",
                            order: searchParams.get("order"),
                            page: 1
                        })
                    }
                    if (e.target.value === "3"){
                        setSearchParams({
                            category: searchParams.get("category"),
                            sort: "input_time",
                            order: searchParams.get("order"),
                            page: 1
                        })
                    }
                }}>
                    <option value="1">Sort by name</option>
                    <option value="2">Sort by price</option>
                    <option value="3">Sort by time</option>
                </select>
            </form>
            <form action="/action_page.php" className="product-sort">
                <label htmlFor="sort" className="product-sort-label"></label>
                <select id="sort" name="sort"  className="product-sort-choices"
                onClick={(e) => {
                    if (e.target.value === "1"){
                        setSearchParams({
                            category: searchParams.get("category"),
                            sort: searchParams.get("sort"),
                            order: "asc",
                            page: 1
                        })
                    }
                    if (e.target.value === "2"){
                        setSearchParams({
                            category: searchParams.get("category"),
                            sort: searchParams.get("sort"),
                            order: "desc",
                            page: 1
                        })
                    }
                }}>
                    <option value="1">Ascending</option>
                    <option value="2">Descending</option>
                </select>
            </form>
        </div>
    )
}

export default withSearchParams(withNavigate(SortForm))