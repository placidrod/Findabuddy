var SearchList = ({searchResult}) => (
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
            searchResult.map((item) =>
                // console.log('EACH ITEM', item)
              <SearchResultItem
                result={item}
                key={item._id}
              />
          )}
        </tbody>
  </table>
);

window.SearchList = SearchList;