export default function DevSnippet({post}){
    return <>
        <h1>Dev Snippet {post.title}</h1>
    </>
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // Get the paths we want to pre-render based on posts
    console.log("In Get Static Paths")
  const paths = [
      {params: {slug: "demo"}},
      {params: {slug: "demo2"}}
  ]/*posts.map((post) => ({
    params: { id: post.id },
  }))*/

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.slug}`)
    console.log("In Get Static Props", params.slug)
  const post = {"title": params.slug} // await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}
