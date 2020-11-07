import React, { useEffect, useState } from "react";
import EditorJS from '@editorjs/editorjs';
import { lets } from '../../utils'
import { EDITOR_CONFIG, EDITOR_HOLDER_ID } from './config'

const BlockEditor = ({ data = {}, instanceRef }) => {
  const [instance, setInstance] = useState()

  instanceRef(instance)
  useEffect(() => { setInstance(new EditorJS(EDITOR_CONFIG)) }, [])
  useEffect(() => { render(data) }, [data])

  /**
   * Re-renders the elements in the editor
   * Uses 'lets' function to manage errors
   * 
   * @param {*} data 
   */
  const render = (data) => lets(async () => {
    if (instance) {
      await instance.isReady

      instance.clear()
      instance.render(data)
    }
  })

  return (
    <div id={EDITOR_HOLDER_ID} />
  );
}


export default BlockEditor