var Results = React.createClass({
  render: function() {
    if(this.state.value){
      return (
        <div className="results content">
          {
            this.state.value.map(function(item, i){
              return (<img src={item.images.original.url} onClick={this.doubleClickHandler} className='result col s6 m4 l3'/>)
            }, this)
          }
        </div>
      );
    }
    else{
      return <div className="results content"/>
    }
  },
  doubleClickHandler: function(itemReactObject) {
    console.log(itemReactObject.target.currentSrc);
    $.ajax({
        url: "http://localhost:3000/saved",
        type: 'POST',
        data: itemReactObject.target.currentSrc,
        contentType: 'application/json',
        success: function (data) {
        },
        error: function (data) {
          console.error('Failed to save image...');
        },
        complete: function () {
        }
    });
  },
  displayResults: function(data){
    console.log("data", data);
  },
  getInitialState: function(){
    return {value:null};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  }
});