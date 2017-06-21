//you can use import statements, like the one below
//var ReactDom = require("react-dom"); https://codepen.io/markhillard/pen/Hjcwu

import React from 'react';
import ReactDom from 'react-dom' ;
import $ from 'jquery' ;

import { Song } from './song.js' ;

class MusicApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { //These are state variables
            message: '',
            apiKey: '',
            playlist:[]
        };

        this.fetchTopTracks = this.fetchTopTracks.bind(this);    //Add any new function if created
    }

    displayMessage(){
        var that = this;
        this.setState({
            message: "Welcome!"
        })
    }

    componentWillMount() {}

    componentDidMount() {}

    fetchTopTracks(){
      var artistInput = document.getElementById("artistInput").value;
      var that = this;

      if (artistInput == ""){
        alert("Please enter an artist's name")
      } else {
          $.ajax({
              type: 'GET',
              url: 'https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+artistInput+'&api_key=70818bdde1762f2467ffa9207ba79bec&format=json',
              datatype: 'json',
              success:function(data, x, y) {
                        console.log(data.toptracks.track)
                        that.setState(
                      {playlist : data.toptracks.track})
                    },
              error: function(httpRequest,status,error){
                  console.log(status)
              }
            }
          )
      }
    }


    render() {
        var playlist = [];

        if (this.state.playlist!==[]){
          for (var i=0 ; i< this.state.playlist.length ; i++ ){
            playlist.push(
              <Song key={i}
                  name = {this.state.playlist[i].name}
                  image = {this.state.playlist[i].image[2]["#text"]}
                  url ={this.state.playlist[i].url} />
            );
          }
        }

        return (
          <div>
            <div>
                <input type="text" id="artistInput" placeholder = "Enter an Artist" />
            </div>
            <div>
                <button className="btn btn-block btn-info" id="btn-get" onClick={this.fetchTopTracks}>
                    Fetch Top Tracks!
                </button>
            </div>
            {playlist}
          </div>
        )
    }

}

ReactDom.render(<MusicApp/>, document.getElementById("container"));
