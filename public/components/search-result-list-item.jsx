
var SearchResultItem = ({item}) => (
  <tr>
    <td>{item.postTitle}</td>
    <td>{item.description}</td>
    <td>{item.postedTime}</td>
    <td>{item.postedTime}</td>
    <td>{item.age}</td>
  </tr>
);

window.SearchResultItem = SearchResultItem;