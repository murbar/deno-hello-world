import Countdown from '../islands/Countdown.tsx';
import { AppLayout } from '../components/AppLayout.tsx';

const meta = { title: 'Countdown page' };

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <AppLayout {...meta}>
      <p>
        The big event is happening <Countdown target={date.toISOString()} />.
      </p>
    </AppLayout>
  );
}
