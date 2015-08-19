var Searchbox = React.createClass({
	lastTimer: null,
	propTypes: {
		onNewResultsAvailable: React.PropTypes.func.isRequired
	},
    render: function() {
        return (
            <form className="col s12">
                <div className="row">
                    <div className="browser-default input-field col s6 offset-s3">
                        <input type="text" placeholder="Search for giphy!" onChange={this.handleChange}/>    
                    </div>
                </div>
            </form>
        );
    },
  handleChange: function(event) {
  	if (this.lastTimer){
  		clearTimeout(this.lastTimer);
  	}
  	var self = this;
  	var textValue = event.target.value;
  	this.lastTimer = setTimeout(function(){
  		clearTimeout(self.lastTimer);
  		lastTimer = null;
  		self.search(textValue);
    	// if (self.props.onNewResultsAvailable){
    	// 	self.props.onNewResultsAvailable(textValue);
    	// }
  	}, 1000);
  },
    search: function(query) {
        var res = query.split(" ");
        var urlString = "http://api.giphy.com/v1/gifs/search?q=";
        for(var i=0; i<res.length; i++){
            urlString += res[i];
            urlString += "+";
        }
        urlString = urlString.substring(0, urlString.length - 1);
        urlString += "&api_key=dc6zaTOxFJmzC";
        console.log(urlString);
        var xhr = $.get(urlString);
        var self = this;
        xhr.done(function(data) {
            console.log("success got data", data); 
            if (self.props.onNewResultsAvailable){
               self.props.onNewResultsAvailable(data.data);
            }
        });
    }
});	