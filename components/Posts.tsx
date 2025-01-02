import { Post, User } from "@prisma/client"
import Link from "next/link";
import styles from './Posts.module.css'

interface Props {
    post: Post & {
        author: User | null
    }
}

export default function Posts({ post }: Props) {
    const authorname = post.author ? post.author.name : 'Anonymous';
  return (
    <Link href={`/posts/${post.id}`} className={styles.post}>
        <h2>{post.title}</h2>
        <small>{authorname}</small>
    </Link>
  )
}

