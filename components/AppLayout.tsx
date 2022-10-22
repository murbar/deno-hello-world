import { ComponentChildren } from 'preact';
import { Head } from '$fresh/runtime.ts';

export type Props = {
  children: ComponentChildren;
  title?: string;
  name?: string;
  description?: string;
};

const Footer = () => {
  return <div>Footer Text 2022</div>;
};

const Meta = ({ ...customMeta }) => {
  const meta = {
    title: 'Deno Hello World',
    description: 'Deno Hello World demo app.',
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export const AppLayout = ({ children, ...meta }: Props) => {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <Meta {...meta} />
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/search">Search</a>
            </li>
            <li>
              <a href="/countdown">Countdown</a>
            </li>
            <li>
              <a href="/api/joke">Joke API</a>
            </li>
          </ul>
        </nav>
        <div className="container">{children}</div>
        <Footer />
      </div>
    </>
  );
};
