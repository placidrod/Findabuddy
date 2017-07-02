/*
 Table for displaying ratings associated with a request or user
 */

class RatingsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount () {
    console.log('RatingsTable loaded: ',this.props.ratings);
  }

  render() {
    console.log('under render');

    return (
      <div className="panel panel-warning">
        <div className="panel-heading">Ratings</div>
        <div className="panel-body">
          <p>These are previously submitted ratings for this Buddy Request</p>
        </div>
        <table className="table">
          <thead>
          <tr>
            <th>Reviewer</th>
            <th>Reviewee</th>
            <th>Buddy Request Link</th>
            <th>Rating</th>
            <th>Comment</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.ratings.map((curElement) => {
              return <RatingsTableItem rating={curElement} />
          })}
          </tbody>
        </table>
      </div>
    );
  }
}


window.RatingsTable = RatingsTable;