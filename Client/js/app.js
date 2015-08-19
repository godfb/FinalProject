var Application = React.createClass({ 
  propTypes: {
    onNewResultsAvailable: React.PropTypes.func.isRequired
  },
  render: function() {
   return (
      <div className="application">
        <div id="searchbox" className="row">
            <Searchbox onNewResultsAvailable={this.displayNewResults}/>
        </div>
        <div className="row">
          <Results ref="results" onDoubleclickEvent={this.doubleClickedImage}/>
        </div>
      </div>
    );
  },
  displayNewResults: function(data) {
    this.refs.results.replaceState({value:data});
  },
});
React.render(
  <Application />,
  document.body
);