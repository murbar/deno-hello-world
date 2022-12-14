import { Handlers, PageProps } from '$fresh/server.ts';
import { AppLayout } from '../components/AppLayout.tsx';

const meta = { title: 'Search page' };

const NAMES = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank'];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get('q') || '';
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <AppLayout {...meta}>
      <form>
        <input type="text" name="q" value={query} />
        <button type="submit">Search</button>
      </form>
      {results.length ? (
        <ul>
          {results.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>
          No results for <strong>{`${query}`}</strong>
        </p>
      )}
    </AppLayout>
  );
}
