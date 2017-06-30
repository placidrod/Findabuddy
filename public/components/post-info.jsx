class PostInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleBackButton() {

  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  handleReply() {

  }

  render() {
    $.ajax({
      url: 'http://localhost:3000/rating/' + this.props.post._id,
      type: 'GET'
    })
      .done(function(data) {
        console.log('rating data for post ',data);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR, textStatus, errorThrown);
      });

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

        <SendMessage recipient={'Alex'} sender={'testSender'}/>
      </div>
    );
  }
}


window.PostInfo = PostInfo;