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