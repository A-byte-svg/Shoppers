import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import { Item } from '../components/Item/Item'
// import {all_product} from '../components/Assets/all_product'
export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" id="bnr-1" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12 </span> out of 36 Products
        </p>

        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>

      </div>



      <div className="shopcategory-products">

        {all_product.map((item, i) => {

          if (props.Category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} category={item.category} />
          }

          else {
            return null;
          }

        })}

      </div>

      <div className="shopcategory-loadmore">
        Explore More!
      </div>
    </div>
  )
}
