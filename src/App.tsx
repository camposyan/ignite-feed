import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/lejoaoconte.png',
            name: 'João Pedro Conte',
            role: 'Frontend Dev'
        },
        content: [
            {
                type: 'paragraph',
                content: 'Eai galera',
            },
            {
                type: 'paragraph',
                content: 'Fiz uma integração com API do Rick and Morty com Next JS, chega aí pra ver!',
            },
            {
                type: 'link',
                content: 'github.com/lejoaoconte/rickandmorty-app-nextjs-getdata',
            },
        ],
        publishedAt: new Date('2022-10-23 07:50:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/jaoluiz13.png',
            name: 'João Luiz Costa',
            role: 'Backend Dev'
        },
        content: [
            {
                type: 'paragraph',
                content: 'Boa tarde, pessoal 👋',
            },
            {
                type: 'paragraph',
                content: 'Projeto novo saindo do forno, boraaa!!',
            },
            {
                type: 'link',
                content: 'github.com/jaoluiz13/finance-services-node',
            },
        ],
        publishedAt: new Date('2022-10-20 07:50:00')
    },
];

export function App() {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </>
    );
}
