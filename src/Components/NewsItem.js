import React, { Component } from 'react'

export default class NewsItem extends Component {
  
    
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
       
       <div className="card ">
            <img src={imageUrl} class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a target="_blank" without rel="noreferrer" href={newsUrl}  className="btn btn-dark">Go somewhere</a>
            </div>

  
</div>
      
    )
  }
}
