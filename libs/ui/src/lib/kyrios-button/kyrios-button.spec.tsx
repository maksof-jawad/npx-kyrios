import { render } from '@testing-library/react';

import KyriosButton from './kyrios-button';

describe('KyriosButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KyriosButton />);
    expect(baseElement).toBeTruthy();
  });
});
