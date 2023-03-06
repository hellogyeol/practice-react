const products = [
  {id: 1, content: 'content1'},
  {id: 2, content: 'content2'}
];

function List() {
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.content}
    </li>
  );

  return (
    <>
      <h1>List Rendering</h1>
      <ul>
        {listItems}
      </ul>
    </>
  );
}

export default List;