
var SearchResultItem = ({result}) => (

  <tr>
    <td>{result.postTitle}</td>
    <td>{result.description}</td>
    <td>{result.posteDateTime}</td>
    <td>{result.posteDateTime}</td>
    <td>{result.age}</td>
    <td>{result.gender}</td>
    <td>{result.zipCode}</td>
  </tr>
);

window.SearchResultItem = SearchResultItem;