'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.scss');

var imageDatas=require('../data/imageDatas.json');
//var imageURL = require('../images/yeoman.png');
function genImageURL(imageDatasArr){
	for(var i=0,j=imageDatasArr.length;i<j;i++){
		var singleImageData=imageDatasArr[i];
		singleImageData.imageURL=require('../images/'+singleImageData.fileName);
	    imageDatasArr[i]=singleImageData;
	}
	return imageDatasArr;
}

var GalleryByReactApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
          <span>hello</span>
        </ReactTransitionGroup>
      </div>
    );
  }
});
React.render(<GalleryByReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryByReactApp;
