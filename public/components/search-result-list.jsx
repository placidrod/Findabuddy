class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <table className="table table-striped">
            <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Posted Date</th>
              <th>Posted Time</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Zip Code</th>
            </tr>
            </thead>
            <tbody>
              {
                this.props.searchResult.map((item) =>
                    // console.log('EACH ITEM', item)
                  <SearchResultItem
                    result={item}
                    handlePostClick={this.props.handlePostClick}
                    key={item._id}
                  />
              )}
            </tbody>
      </table>
    );
  }
}

window.SearchList = SearchList;