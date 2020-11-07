import React, { memo, useEffect, useState } from 'react';
import { getCollection } from '../../utils'
import { lets } from '../../utils';
import CollectionTable from '../CollectionTable';

const HomePage = () => {
  const [ pages, setPages ] = useState([])

  useEffect(() => { getPages() }, [])

  /**
   * Get the list of pages using getCollection
   * See request.js for more information
   * 
   * TODO: Set dinamically the collection
   */
  const getPages = () => lets(async () => {
    const pagesCollection = await getCollection('pages')
    setPages(pagesCollection)
  })

  return (
    <div>
      <h1>Pages</h1>
      <CollectionTable rows={pages} />
    </div>
  );
};

export default memo(HomePage);
