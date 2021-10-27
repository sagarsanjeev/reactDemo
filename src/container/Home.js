import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions';
import { bindActionCreators} from 'redux';
import ProductPage from '../component/home/ProductPage';

class Home extends Component{

    componentDidMount(){
        this.props.getProducts()
    }
    render(){
        return(
            <div>
                <ProductPage latestData={this.props.products}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        products: state.products.data
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getProducts},dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Home) ;