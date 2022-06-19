import posts from '../../posts.json';
import Link from 'next/link';
import {withLayout} from '../../components/layout';
import { Header } from '../../components/header';

function BlogEntry(props) {
  const {posts} = props;
  if(posts?.posts && Array.isArray(posts?.posts) && posts?.posts.length > 0) {
    return (
      <>
        <ul className="space-y-3">
          <>
            {posts.posts.map((p) => (
              <li key={p.slug} className="flex items-center space-x-3">
                <span className="block text-gray-500 w-[9.5rem] text-right">
                  {p.date}
                </span>
                <Link href={p.slug}>
                  <a className="block font-bold">{p.title}</a>
                </Link>
              </li>
            ))}
          </>
        </ul>
      </>
    );
  }

  return (
    <>
      <div className="text-center">{"come back soon for updates"}</div>
    </>
  );
}

function Blog(props) {

  return (
    <>
      <div className="max-w-3xl px-8 mx-auto py-4">
        <BlogEntry posts={{}} /> 
      </div>
    </>
  );
}

export default withLayout(Blog);
