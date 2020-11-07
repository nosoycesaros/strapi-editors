import React from 'react'
import pluginId from '../../pluginId'
import { useHistory } from "react-router-dom"
import { Table } from '@buffetjs/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { TABLE_HEADERS } from './config'

function CollectionTable({ rows }) {
  const history = useHistory()

  /**
   * Navigates to pages/id to load editor
   * TODO: Dynamically set the collection instead of 'pages'
   * 
   * @param {*} data data to gent id of element
   */
  const goToDetail = (data) =>
    history.push(`/plugins/${pluginId}/pages/${data.id}`)

  return (
    <Table
      headers={TABLE_HEADERS}
      rows={rows}
      onClickRow={(e, data) => goToDetail(data)}
      rowLinks={[
        {
          icon: <FontAwesomeIcon icon={faPencilAlt} />,
          onClick: data => goToDetail(data),
        }
      ]}
    />
  )
}

export default CollectionTable
