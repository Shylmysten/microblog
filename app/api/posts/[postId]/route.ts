import prisma from "@/lib/prisma";

interface Params {
    params: {
        postId: string;
    }
}

// Publish Post
// PUT /api/posts/[postId]
export async function PUT(request: Request, { params }: Params) {
    const { postId } = await params;
    await prisma.post.update({
        where: {
            id: postId
        },
        data: {
            published: true
        }
    });
    return new Response('Success', { status: 200 });
}

// Delete Post
// DELETE /api/posts/[postId]
export async function DELETE(request: Request, { params }: Params) {
    const { postId } = await params;
    await prisma.post.delete({
        where: {
            id: postId
        }
    });
    return new Response('Success', { status: 200 });
}