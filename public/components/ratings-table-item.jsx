class RatingsTableItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    console.log('ratings table item: ',this.props.rating);
    return (
      <tr>
        <td>{this.props.rating.reviewer}</td>
        <td>{this.props.rating.reviewee}</td>
        <td><a href={'http://localhost:3000/request/' + this.props.rating.BuddyRequestId}>{this.props.rating.BuddyRequestId}</a></td>
        <td>{this.props.rating.rating}</td>
        <td>{this.props.rating.reviewText}</td>
      </tr>
    );
  }
}


window.RatingsTableItem = RatingsTableItem;