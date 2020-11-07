import React, { useEffect, useState, useRef } from 'react'
import BlockEditor from '../BlockEditor'
import { Button } from '@buffetjs/core'
import { getContent, saveContent, sanitizeContent, sanitizeUpload, lets } from '../../utils'

function Edit(props) {
  const { collection, id } = props.match.params
  const [blocks, setBlocks] = useState([])
  const editorReference = useRef()

  useEffect(() => { loadContent() }, [])

  /**
   * Lodas the content of the desired element
   * 
   * Uses lets function to manage errors
   * Uses getContent from requests.js
   * Uses sanitizeContent from sanitize.js
   * 
   * TODO: Maybe add args to function to make
   * it agnostic from global collection/id
   */
  const loadContent = () => lets(async () => {
    const { content } = await getContent(collection, id)
    setBlocks(sanitizeContent(content))
  })

  /**
   * Saves the edited content in the database
   * 
   * Uses lets function to manage errors
   * Uses sanitizeUpload from sanitize.js
   * Uses saveContent from requests.js
   * 
   * TODO: Maybe add args to function to make
   * it agnostic from collection/id
   */
  const save = () => lets(async () => {
    const output = await editorReference.current.save()
    const data = sanitizeUpload(output)

    await saveContent(collection, id, data)
    strapi.notification.success('Page updated')
  })


  return (
    <section>
      <div className='text-right'>
        <Button color="success" onClick={save}>Save</Button>
      </div>
      <BlockEditor
        instanceRef={instance => editorReference.current = instance}
        data={{
          "time": 1604659383071,
          "blocks": blocks,
          "version": "2.19.0"
        }} />
    </section>
  )
}

export default Edit
