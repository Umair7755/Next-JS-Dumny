import React from 'react'
import {useRouter} from "next/router"

const Newsid = () => {
    const route = useRouter()
    console.log(route.query.newsid)
  return (
    <h5>inner Detail Page</h5>
  )
}

export default Newsid