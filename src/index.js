import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBxJW5dxz_Nnv_TwhP83X3ZK9Pw6Is7TJw'


//Create a new component. This produces html
class App extends Component{
  constructor(props){
    super(props);

    this.state = {videos:[]};

    YTSearch(
      {key :API_KEY, term: 'surfboards'},
      (videos) => {this.setState({videos})}
    );
  }
  render(){
    return ( //SearchBar is jsx for a React functional component, wrapped in tags to instantiate it.

      //We hand videos={this.state.videos}, in order to hand videos as a 'prop' into the VideoList component. This will arrive as an arguement to VideoList, called 'props.videos'
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div> //Now that we have imported SearchBar, we can display it here
    );
  }
}

//Take the generated html, and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
