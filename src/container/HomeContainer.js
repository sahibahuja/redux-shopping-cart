import Home from '../components/Home';
import {connect} from 'react-redux'
import {addToCart,removeToCart} from '../service/actions/actions';

const mapDispatchToProps=dispath=>({
    addToCartHandler:data=>dispath(addToCart(data)),
    removeToCartHandler:data=>dispath(removeToCart(data))
})
    const mapStateToProps=state=>({
        // data:state.cartItems
})
export default connect(mapStateToProps,mapDispatchToProps) (Home);