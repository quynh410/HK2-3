import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleViewMode } from '../store/reducer/viewModReducer';
import '../index.css'; 
const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
];

function ViewMod() {
  const dispatch = useDispatch();
  const isGridView:any = useSelector((state:any) => state.viewMode.isGridView);

  const handleToggleViewMode = () => {
    dispatch(toggleViewMode());
  };

  return (
    <div>
      <button onClick={handleToggleViewMode}>
        List Mode {isGridView ? 'List' : 'Grid'} 
      </button>
      <div className={isGridView ? 'grid-view' : 'list-view'}>
        {data.map((item) => (
          <div key={item.id} className="item">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMod;
