import React from 'react';

const showLatest = ({latestData}) => {
    if(latestData){
        return <div className="row row-cols-1 row-cols-md-3 mb-3 text-center courseBox" style={{margin: '50px', paddingBottom: '80px'}}>
                {latestData && latestData.products.map((data) => {
                    return <div className="card" style={{width: '18rem', margin: '10px'}} key={data.Id}>
                                <img className="card-img-top" src={data.img} alt={data.Title}/>
                                <div className="card-body">
                                    <h5 className="card-title">{data.Title}</h5>
                                    <p className="card-text">{data.Description}</p>
                                    <a href={data.Url} className="btn btn-primary">Link</a>
                                </div>
                            </div>
                })}
                </div>
    }
}

const ProductPage = (props) => {
    return(
        <div className="home-latest">
            {showLatest(props)}
        </div>
    )
}

export default ProductPage;