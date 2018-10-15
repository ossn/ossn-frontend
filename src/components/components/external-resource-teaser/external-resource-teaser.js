import React from 'react'

export const ExternalResource = (props) => {
  const resource = props.resource;
  const title = resource.shortdescription;
  return (
    <div> {title} </div>
  )
}

export const ExternalResourceList = (props) => {

  const resources = props.items.map((resource, i) => {
    return <ExternalResource key={i} resource={resource} />
  });

  return (
    <div>
      {resources}
    </div>
  )
}

// export ExternalResource;
// export ExternalResourceList;
