import Counter from '../islands/Counter.tsx';
import { AppLayout } from '../components/AppLayout.tsx';

const meta = { title: 'Deno Hello World index route' };

export default function Home() {
  return (
    <AppLayout {...meta}>
      <div>
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p>
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx file,
          and refresh.
        </p>
        <Counter start={3} />
      </div>
    </AppLayout>
  );
}
