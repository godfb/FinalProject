var Login = React.createClass({
    propTypes: {
        onChangeEvent: React.PropTypes.func.isRequired,
        passowrdString: React.PropTypes.string
    },
    render: function() {
        return (
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input placeholder="Username" id="usernameBox" type="text" className=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input placeholder="Password" id="passwordBox" onChange={this.handleChange} type="text" className=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input id="submitButton" type="submit" className=""/>
                    </div>
                </div>
            </form>
        );
    },
    handleChange: function(event) {
        this.props.passwordString = event.target.value;
        passwordBox.value = "";
        for (var i = 0; i<this.props.passwordString.length; i++){
            passwordBox.value += "*";
        }
    }
});