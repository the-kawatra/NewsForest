import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: '6',
    category: 'general'
  }
  
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `NewsForest - ${this.props.category}`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6722c3051cd64191a14225bbe8736217&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({page: this.state.page - 1})
    this.updateNews();
  }
  
  handleNextClick = async () => {
    this.setState({page: this.state.page + 1})
    this.updateNews();
    }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='my-4 text-center'>NewsForest - Top {this.props.category} Headings</h1>
        {this.state.loading && <Spinner/>}
          <div className="row my-2">
            {!this.state.loading && this.state.articles.map((e)=>{
              return <div className="col-md-4" key={e.url}>
                <NewsItem title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name}/>
              </div>
            })}
          </div>
          <div className="container d-flex justify-content-between mb-5">
          <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
          </div>
      </div>
    )
  }
}

export default News