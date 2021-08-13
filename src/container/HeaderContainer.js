import Header from '../components/Header';
import {connect} from 'react-redux'


const mapDispatchToProps=dispath=>({
   
})
    const mapStateToProps=state=>({
        data:state.cartItems
})
export default connect(mapStateToProps,mapDispatchToProps) (Header);