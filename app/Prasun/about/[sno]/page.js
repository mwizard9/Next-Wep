
// 'use client'

// import { useRouter } from "next/router"

// const Post = () => {
//     const router = useRouter()
//     const { sno } = router.query

//          return <p>Post : {sno}</p>
// }

// export default Post

export default function Page({ params }) {
  return <div>My Post: {params.sno}</div>
}