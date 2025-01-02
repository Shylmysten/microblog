import Posts from "@/components/Posts";
import prisma from "@/lib/prisma";
import styles from './Drafts.module.css';

export default async function DraftsPage() {
    const drafts = await prisma.post.findMany({
        where: {
            published: false
        },
        include: {
            author: true
        }
    });
    return (
        <main>
            <h1>Drafts</h1>
            {drafts.map((draft) => (
                <div key={draft.id} className={styles.draft}>
                    <Posts post={draft}/>
                </div>
            ))}
        </main>
    )
}
