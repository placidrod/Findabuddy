/*
 Component for viewing previously created buddy request posts
 */

class PostInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ratingsArray: []
    };
  }

  handleBackButton() {

  }
  //loads in ratings for post once component is mounted
  componentDidMount () {
    //console.log('postInfo loaded: ',this.props.post,this.state.ratingsArray);
    $.ajax({
      url: '/rating/' + this.props.post._id,
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
      <div>
        <div className="post">
          <div className="media">
            <div className="media-body">
              <h4 className="media-heading">{this.props.post.postTitle
              }</h4>
              <p>{this.props.post.description
              }</p>
            </div>
          </div>
        </div>
        <div className="ratings">
          <RatingsTable ratings={this.state.ratingsArray}/>
        </div>
        <div className="sendMessage">
          <SendMessage recipient={this.props.post.user} sender={this.props.user}/>
        </div>
      </div>
    );
  }
}


window.PostInfo = PostInfo;