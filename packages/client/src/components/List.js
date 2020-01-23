import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const List = ({ data, url }) => {
  return (
    <>
      <div className="list-group">
        {data && data.map(shoppingCenter => (
          <Link
            key={shoppingCenter.name}
            href={{
              pathname: '/assets/',
              query: {
                shoppingCenterId: shoppingCenter.id
              }
            }}
          >
            <a
              key={shoppingCenter.name}
              className="list-group-item list-group-item-action"
            >
              {shoppingCenter.name}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export default List;
