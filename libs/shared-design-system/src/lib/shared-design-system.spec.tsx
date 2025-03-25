import { render } from '@testing-library/react';

import SharedDesignSystem from './shared-design-system';

describe('SharedDesignSystem', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<SharedDesignSystem />);
    expect(baseElement).toBeTruthy();
  });
  
});
