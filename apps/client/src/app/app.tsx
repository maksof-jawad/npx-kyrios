// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { KyriosButton } from '@npx-kyrios/ui';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <KyriosButton />
      <NxWelcome title="client" />
    </div>
  );
}

export default App;
