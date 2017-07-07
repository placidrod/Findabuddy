/*
 Main dynamic container for bulk of application content.  The state, and visibility of components, changes based on
 how the user interacts with the frontend UI
 */

class DynamicContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // renderResults: this.props.render.renderResults,
      results: [],
      convo: {},
      currentPost: ''
    };
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
    this.handleConvoClick = this.handleConvoClick.bind(this);

    this.props.socket.on('message', function(convo){
      console.log(convo);
      this.props.getMessages();
      this.setState({
        convo: convo
      });
    }.bind(this));
  }
  //click event handler for search submit & new buddy request submit
  handleSubmitRequest(data) {
    data = data.reverse();

    this.setState({
      results: data
    });
  }

  handleConvoClick(convo) {

    this.setState({
      convo: convo
    });


    this.props.handleSelect('chat');
  }

  handleBackToConversations(){
    this.props.handleSelect('conversations');
  }


  //renders a specific request when it is clicked on in the search results list
  handlePostClick(post) {
    // var results = this.state.results;
    //console.log('CURRENT POST', post)
    this.props.handleSelect('renderPost');

    this.setState({
      currentPost: post,
    });
  }

  render() {
    if (this.props.render.selectSearch) {
      return (
        <div className="componentWindow">
          <h1>Search Form</h1>
          <SearchForm
            handleSubmitRequest={this.handleSubmitRequest}
            handleSelect={this.props.handleSelect}
          />
        </div>
      );
    } else if (this.props.render.selectRequest) {
      return (
        <div className="componentWindow">
          <h1>Buddy Request Form</h1>
          <CreateRequest
            handleSelect={this.props.handleSelect}
            handleSubmitRequest={this.handleSubmitRequest}
            user={this.props.user}
          />
        </div>
      );
    } else if (this.props.render.renderPost) {
      return (
        <div className="componentWindow">
          <h1>Post Info</h1>
          <PostInfo
            post={this.state.currentPost}
            user={this.props.user}
          />
        </div>
      );
    } else if (this.props.render.selectProfile) {
      return (
        <div className="componentWindow">
          <h1>About Me</h1>
          <Profile
            user={this.props.user}
            friends={this.props.friends}
          />
        </div>
      );
    } else if (this.props.render.renderResults) {
      return (
        <div className="componentWindow">
          <h1>Search Result</h1>
          <SearchList
            searchResult={this.state.results}
            handlePostClick={this.handlePostClick}
          />
        </div>
      );
    } else if (this.props.render.selectMessages) {
      return (
        <div className="componentWindow">
          <h1>Messages</h1>
          <Conversations
            user={this.props.user}
            conversations={this.props.conversations}
            handleConvoClick={this.handleConvoClick}
          />
        </div>
      );
    } else if (this.props.render.browseRequests) {
      return (
        <div className="componentWindow">
          <h1>Open Requests</h1>
          <BrowseRequests
            requests={this.props.requests}
            handlePostClick={this.handlePostClick}

          />
        </div>
      );
    } else if (this.props.render.chat) {
      return (
        <div className="componentWindow">
          <h1>{this.state.convo.participants[1]}</h1>
          <MessageList
            convo={this.state.convo}
            user={this.props.user}
          />
        </div>
      );
    }
  }
}

window.DynamicContent = DynamicContent;
