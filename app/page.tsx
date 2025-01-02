import Posts from "@/components/Posts";
import prisma from "@/lib/prisma";

export default async function homePage() {
    const posts = await prisma.post.findMany({
        where: {
            published: true
        },
        orderBy: {
          updatedAt: 'desc'
        },
        include: {
            author: true
        }
    });
    return (
      <main>
        <h1>Latest Posts</h1>
        {posts.map((post) => 
(          <Posts key={post.id} post={post}/>
        ))}
      </main>
    )
}
