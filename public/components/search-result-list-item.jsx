
var SearchResultItem = ({result}) => (

  <tr>
    <td>{result.title}</td>
    <td>{result.description}</td>
    <td>{result.posteDateTime}</td>
    <td>{result.posteDateTime}</td>
    <td>{result.age}</td>
  </tr>
);

window.SearchResultItem = SearchResultItem;