import {useState, useEffect} from "react";
import MainContainer from "../components/mainContainer";

export default function Projects ({projects}) {
    return <>
        <MainContainer >
            <h1>Projects</h1>
            {
                projects.map(item => {
                    // eslint-disable-next-line react/jsx-key
                    return <h2>{item.title}</h2>
                })
            }
        </MainContainer>
    </>
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.slug}`)
  const projects = [{"title": "Projects List"}] // await res.json()

  // Pass post data to the page via props
  return {
      props: { projects },
      revalidate: 10, // In seconds
  }
}