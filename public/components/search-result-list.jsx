var SearchList = ({searchResult}) => (
  <table className="table table-striped">
        <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Posted Date</th>
          <th>Posted Time</th>
          <th>Age</th>
        </tr>
        </thead>
        <tbody>
          {/*searchResult.map((item) =>*/
            <SearchResultItem
              result={result}
            />
          /*)*/}
        </tbody>
  </table>
);

window.SearchList = SearchList;