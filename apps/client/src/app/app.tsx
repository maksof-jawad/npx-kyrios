// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { KyriosButton } from '@npx-kyrios/ui';
import { Suspense } from 'react';

export function App() {
  return (
    <div>
      <Suspense>
        <KyriosButton />
      </Suspense>
    </div>
  );
}

export default App;
