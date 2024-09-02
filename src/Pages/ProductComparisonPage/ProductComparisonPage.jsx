import React from 'react'
import "./ProductComparisonPage.css"
// import { MdArrowForwardIos } from "react-icons/md";
// import { IoStar } from "react-icons/io5";
import image1 from '../ProductComparisonPage/imagess/image1.jpg';
import star from '../ProductComparisonPage/imagess/star.png';
import Meubel from '../ProductComparisonPage/imagess/Meubel.png';
import General from './Generalcomparisonpage';
import Productcomparison from './Productcomparison';
import Dimensioncomparison from './Dimensioncomparison';
import Warrantycomparison from './Warrantycomparison';
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import ReuseableHero from '../../Components/ReuseableHero';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "/icons/logo.svg";


const ProductComparisonPage = () => {


  const [product, setProduct] = useState();
  const { productID } = useParams();






  return (
  <>
  <div className='ProductComparisonCon'>
  <ReuseableHero page={"Product Comparison"} page1={"Comparison"} />
    <div className='Productpagescon'>
      <div className='ProductpagesconmainBoxwrapp'>
      <div className='ProductpagesconmainBox1'>
        <div className='ProductpagesconmainBoxup'>
          <div className='Productpageslettercon1'>
            <h3>Go to Product page for more Products</h3>
          </div>
          <div className='Productpageslettercon2'>
            <div className='ProductViewmore1'>
              <p>View More</p>
            </div>
            <div className='ProductViewmore2'>
              <div className='Viewmorlinee'></div>
            </div>
          </div>
        </div>
        <div className='ProductpagesconmainBoxdown'></div>
      </div>
      <div className='ProductpagesconmainBox2'>
        <div className='ProductpagesconmainBoxup'>
          <img src={image1} alt="" />
        </div>
        <div className='ProductpagesconmainBoxdown'>
          <div className='AsgaadsofaBox'>
            <div className='AsgaadsofaBoxwrapper'>
              <div className='AsgaadsofaLetters'>
                <h3>Asgaard Sofa</h3>
              </div>
              <div className='AsgaadsofaLetters'>
                <p>Rs.250.000.00</p>
              </div>
              <div className='AsgaadsofaLetters'>
                <div className='AsgaadsofaStarbox'>
                  <div className='AsgaadsofaStar1'>
                    <p>4.7</p>
                    <img src={star} alt="" />
                  </div>
                  <div className='AsgaadsofaStar2'></div>
                  <div className='AsgaadsofaStar3'>
                    <p>250</p> <span>Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ProductpagesconmainBox2'>
        <div className='ProductpagesconmainBoxup'>
        <img src={image1}alt="" />
        </div>
        <div className='ProductpagesconmainBoxdown'>
          <div className='Outdoorsofaset'>
            <div className='Outdoorsofasetwrapper'>
              <div className='OutdoorsofasetLetter'>
                <h3>Outdoor Sofa Set</h3>
              </div>
              <div className='OutdoorsofasetLetter'>
                <p>Rs.224.000.00</p>
              </div>
              <div className='OutdoorsofasetLetter'>
                <div className='OutdoorStars'>
                  <div className='OutdoorStarsboxz1'>
                    <p>4.2</p>
                    <img src={star} alt="" />
                  </div>
                  <div className='OutdoorStarsboxz2'></div>
                  <div className='OutdoorStarsboxz3'>
                    <p>200</p> <span>Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ProductpagesconmainBox1'>
        <div className='ProductpagesconmainBoxup'>
          <div className='AddAProductBoxs'>
            <div className='AddAProductBoxwrapper'>
            <div className='AddproductBox1'>
            <h3>Add A Product</h3>
          </div>
          <div className='AddproductBox2'>
            <div className='Chooseaproductbox'>
              <button>Choose a product
              <IoIosArrowDown  className='Addproductarrow'/>
              </button>
            </div>
          </div>
            </div>
          </div>
        </div>
        <div className='ProductpagesconmainBoxdown'></div>
      </div>
      </div>
    </div>
  </div>
  <General/>
  <Productcomparison/>
  <Dimensioncomparison/>
  <Warrantycomparison/>
  
  
  
  </>    
  )
}

export default ProductComparisonPage