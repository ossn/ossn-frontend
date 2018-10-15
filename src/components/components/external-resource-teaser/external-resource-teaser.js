import React from 'react'

const ExternalResource = (props) => {
  const resource = props.resource;

  return (
    <div> Ext resource </div>
  )
}

const ExternalResourceList = (props) => {

  const resources = props.resources.map((resource, i) => {
    return <ExternalResource key={i} resource={resource} />
  });

  return (
    <div>
      {resources}
    </div>
  )
}

export ExternalResource
export ExternalResourceList
