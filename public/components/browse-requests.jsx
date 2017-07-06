var BrowseRequests = ({requests, handlePostClick}) => (

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
            requests.map((item) =>
                // console.log('EACH ITEM', item)
              <SearchResultItem
                result={item}
                handlePostClick={handlePostClick}
                key={item._id}
              />
          )}
        </tbody>
  </table>
);

window.BrowseRequests = BrowseRequests;