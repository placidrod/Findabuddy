class PostInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleBackButton() {

  }

  handleReply() {

  }

  render() {
    return (
      <div className="post">
        <div className="media">
          <div className="media-body">
            <h2>Post</h2>
            <h4 className="media-heading">{this.props.post.postTitle
            }</h4>
            <p>{this.props.post.description
            }</p>
          </div>
        </div>
      </div>
    );
  }
}


window.PostInfo = PostInfo;