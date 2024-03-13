import { render } from '@/test/test-utils';
import { describe, expect, it } from '@jest/globals';
import { Alert } from './Alert';

describe('Example', () => {
  it('should render without crashing', () => {
    const { container } = render(
      <Alert status="error" primaryText="There was an error" secondaryText="Very sorry about that." />,
      {}
    );
    expect(container).toBeInTheDocument();
  });
});
