import './TodoItems.css';

function TodoItems(props) {
  let { items, deleteItem } = props;
  return (
    <div className='listItems'>
      <div>
        <span className='name title'>Name</span>
        <span className='task title'>Task</span>
        <span className='action title '>Action</span>
      </div>
      {
        items.length ?
          items.map(item => {
            return (
              <div key={item.id}>
                <span className='name'>{item.name}</span>
                <span className='task'>{item.task}</span>
                <span className='action icon'
                  onClick={() => deleteItem(item.id)}>
                  &times;
                </span>
              </div>
            )
          })
          :
          <div className='no-data'>No Data To Show</div>
      }
    </div>
  )
}

export default TodoItems;