class PostInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ratingsArray: []
    };
  }

  handleBackButton() {

  }

  componentDidMount () {
    //console.log('postInfo loaded: ',this.props.post,this.state.ratingsArray);
    $.ajax({
      url: 'http://localhost:3000/rating/' + this.props.post._id,
      type: 'GET'
    })
      .done(function(data) {
        this.setState({ratingsArray: data});
        // console.log('rating data for post ',data, this.state.ratingsArray);
      }.bind(this))
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR, textStatus, errorThrown);
      });
  }

  render() {


    return (
      <div className="post">
        <div className="media">
          <div className="media-body">
            <h4 className="media-heading">{this.props.post.postTitle
            }</h4>
            <p>{this.props.post.description
            }</p>
          </div>
        </div>
        <RatingsTable ratings={this.state.ratingsArray}/>
        <SendMessage recipient={this.props.post.user} sender={this.props.user}/>
      </div>
    );
  }
}


window.PostInfo = PostInfo;