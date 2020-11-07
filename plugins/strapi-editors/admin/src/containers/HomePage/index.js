import React, { memo, useEffect, useState } from 'react'
import { getCollection } from '../../utils'
import { lets } from '../../utils'
import CollectionTable from '../CollectionTable'
import { Header } from '@buffetjs/custom'
import './styles.css'

const HomePage = () => {
  const [pages, setPages] = useState([])

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

  console.log()

  return (
    <div className='home-page'>
      <Header
        actions={[{
          label: 'Add Page',
          onClick: () => alert('Add button clicked'),
          color: 'primary',
          type: 'submit',
        }]}
        title={{ label: 'Pages' }}
        content={`${pages.length} entry found`}
      />
      <CollectionTable rows={pages} />
    </div>
  );
};

export default memo(HomePage);
